package com.deenlibrary.app.ui.hadith

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Mosque
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.deenlibrary.app.ui.theme.IslamicGoldAccent

val hadithBooksSample = listOf(
    "সহীহ বুখারী" to "Sahih Bukhari (৭৫৬৩ হাদিস)",
    "সহীহ মুসলিম" to "Sahih Muslim (৭৪৫৩ হাদিস)",
    "সুনান আবু দাউদ" to "Sunan Abu Dawood (৫২৭৪ হাদিস)",
    "জামে আত-তিরমিজি" to "Jami at-Tirmidhi (৩৯৫৬ হাদিস)",
    "সুনান আন-নাসায়ী" to "Sunan an-Nasai (৫৭৫৮ হাদিস)",
    "সুনান ইবনে মাজাহ" to "Sunan Ibn Majah (৪৩৪৯ হাদিস)",
    "মুয়াত্তা মালিক" to "Muwatta Malik (১৮৫৭ হাদিস)",
    "মুসনাদে আহমাদ" to "Musnad Ahmad (২৭৭৭১ হাদিস)"
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HadithScreen(
    onBookClick: (Int) -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background)
    ) {
        TopAppBar(
            title = {
                Text(
                    text = "হাদিস গ্রন্থসমূহ (Hadith Books)",
                    fontWeight = FontWeight.Bold,
                    fontSize = 18.sp
                )
            },
            colors = TopAppBarDefaults.topAppBarColors(
                containerColor = MaterialTheme.colorScheme.surface,
                titleContentColor = MaterialTheme.colorScheme.primary
            )
        )

        LazyVerticalGrid(
            columns = GridCells.Fixed(2),
            modifier = Modifier.fillMaxSize(),
            contentPadding = PaddingValues(16.dp),
            horizontalArrangement = Arrangement.spacedBy(12.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            items(hadithBooksSample.size) { index ->
                val book = hadithBooksSample[index]
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .clickable { onBookClick(index + 1) },
                    shape = RoundedCornerShape(12.dp),
                    colors = CardDefaults.cardColors(
                        containerColor = MaterialTheme.colorScheme.surface
                    ),
                    elevation = CardDefaults.cardElevation(defaultElevation = 1.dp)
                ) {
                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(14.dp),
                        horizontalAlignment = Alignment.Start
                    ) {
                        Icon(
                            imageVector = Icons.Filled.Mosque,
                            contentDescription = null,
                            tint = IslamicGoldAccent,
                            modifier = Modifier.size(24.dp)
                        )
                        Spacer(modifier = Modifier.height(10.dp))
                        Text(
                            text = book.first,
                            fontSize = 15.sp,
                            fontWeight = FontWeight.Bold,
                            color = MaterialTheme.colorScheme.onSurface
                        )
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(
                            text = book.second,
                            fontSize = 11.sp,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }
            }
        }
    }
}