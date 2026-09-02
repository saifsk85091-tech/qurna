package com.deenlibrary.app.ui.quran

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.deenlibrary.app.ui.theme.IslamicGoldAccent

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun QuranScreen(
    onSurahClick: (Int) -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background)
    ) {
        TopAppBar(
            title = {
                Text(
                    text = "পবিত্র কুরআন (Holy Quran)",
                    fontWeight = FontWeight.Bold,
                    fontSize = 18.sp
                )
            },
            colors = TopAppBarDefaults.topAppBarColors(
                containerColor = MaterialTheme.colorScheme.surface,
                titleContentColor = MaterialTheme.colorScheme.primary
            )
        )

        LazyColumn(
            modifier = Modifier.fillMaxSize(),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            // Surah Preview Cards (Ready for Room Database data injection in Step 3)
            items(10) { index ->
                val surahNum = index + 1
                SurahItemCard(
                    surahNumber = surahNum,
                    arabicName = if (surahNum == 1) "الفاتحة" else if (surahNum == 2) "البقرة" else "آل عمران",
                    banglaName = if (surahNum == 1) "সূরা আল-ফাতিহা" else if (surahNum == 2) "সূরা আল-বাকারা" else "সূরা আলে ইমরান",
                    englishName = if (surahNum == 1) "Al-Fatihah" else if (surahNum == 2) "Al-Baqarah" else "Ali 'Imran",
                    totalAyahs = if (surahNum == 1) 7 else if (surahNum == 2) 286 else 200,
                    revelationType = if (surahNum == 1) "মাক্কী" else "মাদানী",
                    onClick = { onSurahClick(surahNum) }
                )
            }
        }
    }
}

@Composable
private fun SurahItemCard(
    surahNumber: Int,
    arabicName: String,
    banglaName: String,
    englishName: String,
    totalAyahs: Int,
    revelationType: String,
    onClick: () -> Unit
) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onClick() },
        shape = RoundedCornerShape(12.dp),
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
                    .size(40.dp)
                    .clip(CircleShape)
                    .background(MaterialTheme.colorScheme.primaryContainer),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = surahNumber.toString(),
                    fontWeight = FontWeight.Bold,
                    fontSize = 14.sp,
                    color = MaterialTheme.colorScheme.primary
                )
            }

            Spacer(modifier = Modifier.width(14.dp))

            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = banglaName,
                    fontWeight = FontWeight.SemiBold,
                    fontSize = 15.sp,
                    color = MaterialTheme.colorScheme.onSurface
                )
                Text(
                    text = "$englishName • $revelationType • $totalAyahs টি আয়াত",
                    fontSize = 12.sp,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }

            Text(
                text = arabicName,
                fontSize = 18.sp,
                fontWeight = FontWeight.Bold,
                color = MaterialTheme.colorScheme.primary
            )
        }
    }
}