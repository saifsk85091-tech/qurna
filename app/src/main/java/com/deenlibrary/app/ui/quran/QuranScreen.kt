package com.deenlibrary.app.ui.quran

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.deenlibrary.app.data.QuranRepository
import com.deenlibrary.app.data.model.Surah

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun QuranScreen(
    onSurahClick: (Int) -> Unit
) {
    var searchQuery by remember { mutableStateOf("") }
    var selectedFilter by remember { mutableStateOf("all") } // "all", "makki", "madani"

    val allSurahs = remember { QuranRepository.surahs }

    val filteredSurahs = remember(searchQuery, selectedFilter) {
        allSurahs.filter { surah ->
            val matchesQuery = searchQuery.isBlank() ||
                    surah.banglaName.contains(searchQuery, ignoreCase = true) ||
                    surah.englishName.contains(searchQuery, ignoreCase = true) ||
                    surah.arabicName.contains(searchQuery) ||
                    surah.number.toString() == searchQuery.trim()

            val matchesFilter = when (selectedFilter) {
                "makki" -> surah.revelationType == "মাক্কী"
                "madani" -> surah.revelationType == "মাদানী"
                else -> true
            }

            matchesQuery && matchesFilter
        }
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background)
    ) {
        // Top App Header
        TopAppBar(
            title = {
                Column {
                    Text(
                        text = "আল-কুরআনুল কারীম",
                        fontWeight = FontWeight.Bold,
                        fontSize = 18.sp
                    )
                    Text(
                        text = "১১৪টি সূরা • আরবি, বাংলা অর্থ ও উচ্চারণ",
                        fontSize = 12.sp,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            },
            colors = TopAppBarDefaults.topAppBarColors(
                containerColor = MaterialTheme.colorScheme.surface,
                titleContentColor = MaterialTheme.colorScheme.onSurface
            )
        )

        // Search Bar
        OutlinedTextField(
            value = searchQuery,
            onValueChange = { searchQuery = it },
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 8.dp),
            placeholder = { Text("সূরার নাম বা নম্বর দিয়ে খুঁজুন...", fontSize = 13.sp) },
            leadingIcon = {
                Icon(
                    imageVector = Icons.Default.Search,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.onSurfaceVariant
                )
            },
            trailingIcon = {
                if (searchQuery.isNotEmpty()) {
                    IconButton(onClick = { searchQuery = "" }) {
                        Icon(imageVector = Icons.Default.Close, contentDescription = "Clear")
                    }
                }
            },
            singleLine = true,
            shape = RoundedCornerShape(14.dp),
            colors = OutlinedTextFieldDefaults.colors(
                focusedContainerColor = MaterialTheme.colorScheme.surface,
                unfocusedContainerColor = MaterialTheme.colorScheme.surface
            )
        )

        // Filter Chips (সকল সূরা, মাক্কী সূরা, মাদানী সূরা)
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 4.dp),
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            FilterChip(
                selected = selectedFilter == "all",
                onClick = { selectedFilter = "all" },
                label = { Text("সকল সূরা (${allSurahs.size})", fontSize = 12.sp) }
            )
            FilterChip(
                selected = selectedFilter == "makki",
                onClick = { selectedFilter = "makki" },
                label = { Text("মাক্কী", fontSize = 12.sp) }
            )
            FilterChip(
                selected = selectedFilter == "madani",
                onClick = { selectedFilter = "madani" },
                label = { Text("মাদানী", fontSize = 12.sp) }
            )
        }

        // Surah List
        LazyColumn(
            modifier = Modifier.fillMaxSize(),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            items(filteredSurahs, key = { it.id }) { surah ->
                SurahItemCard(
                    surah = surah,
                    onClick = { onSurahClick(surah.number) }
                )
            }
        }
    }
}

@Composable
private fun SurahItemCard(
    surah: Surah,
    onClick: () -> Unit
) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onClick() },
        shape = RoundedCornerShape(14.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surface
        ),
        elevation = CardDefaults.cardElevation(defaultElevation = 1.dp)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(14.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            // Surah Number Badge
            Box(
                modifier = Modifier
                    .size(42.dp)
                    .clip(RoundedCornerShape(12.dp))
                    .background(MaterialTheme.colorScheme.primaryContainer),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = surah.number.toString(),
                    fontWeight = FontWeight.Bold,
                    fontSize = 14.sp,
                    color = MaterialTheme.colorScheme.primary
                )
            }

            Spacer(modifier = Modifier.width(14.dp))

            Column(modifier = Modifier.weight(1f)) {
                Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(6.dp)) {
                    Text(
                        text = "সূরা ${surah.banglaName}",
                        fontWeight = FontWeight.Bold,
                        fontSize = 15.sp,
                        color = MaterialTheme.colorScheme.onSurface
                    )
                    Surface(
                        shape = RoundedCornerShape(6.dp),
                        color = if (surah.revelationType == "মাক্কী")
                            Color(0xFF059669).copy(alpha = 0.12f)
                        else
                            Color(0xFF2563EB).copy(alpha = 0.12f)
                    ) {
                        Text(
                            text = surah.revelationType,
                            fontSize = 10.sp,
                            fontWeight = FontWeight.Medium,
                            color = if (surah.revelationType == "মাক্কী") Color(0xFF059669) else Color(0xFF2563EB),
                            modifier = Modifier.padding(horizontal = 5.dp, vertical = 1.dp)
                        )
                    }
                }

                Spacer(modifier = Modifier.height(2.dp))

                Text(
                    text = "${surah.englishName} • অর্থ: ${surah.meaning} • ${surah.totalAyah} আয়াত",
                    fontSize = 12.sp,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }

            // Arabic Calligraphic Name
            Text(
                text = surah.arabicName,
                fontSize = 20.sp,
                fontWeight = FontWeight.Bold,
                fontFamily = FontFamily.Serif,
                color = MaterialTheme.colorScheme.primary
            )
        }
    }
}
