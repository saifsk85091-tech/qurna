package com.deenlibrary.app.ui.quran

import android.widget.Toast
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalClipboardManager
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.deenlibrary.app.data.QuranRepository
import com.deenlibrary.app.data.model.Ayah
import com.deenlibrary.app.ui.theme.IslamicGoldAccent
import com.deenlibrary.app.ui.theme.IslamicGoldLight

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SurahDetailScreen(
    surahNumber: Int,
    onNavigateBack: () -> Unit
) {
    val surah = remember(surahNumber) { QuranRepository.getSurahByNumber(surahNumber) }
    val ayahs = remember(surahNumber) { QuranRepository.getAyahsForSurah(surahNumber) }
    val context = LocalContext.current
    val clipboardManager = LocalClipboardManager.current
    var playingAyahId by remember { mutableStateOf<Int?>(null) }
    var bookmarkedAyahs by remember { mutableStateOf(setOf<Int>()) }

    if (surah == null) {
        Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
            Text("সূরা পাওয়া যায়নি")
        }
        return
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Column {
                        Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(6.dp)) {
                            Text(
                                text = "সূরা ${surah.banglaName}",
                                fontWeight = FontWeight.Bold,
                                fontSize = 18.sp
                            )
                            Surface(
                                shape = RoundedCornerShape(12.dp),
                                color = MaterialTheme.colorScheme.primary.copy(alpha = 0.15f)
                            ) {
                                Text(
                                    text = surah.revelationType,
                                    fontSize = 11.sp,
                                    fontWeight = FontWeight.SemiBold,
                                    color = MaterialTheme.colorScheme.primary,
                                    modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp)
                                )
                            }
                        }
                        Text(
                            text = "${surah.englishName} • ${surah.meaning} • ${surah.totalAyah} আয়াত",
                            fontSize = 12.sp,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                },
                navigationIcon = {
                    IconButton(onClick = onNavigateBack) {
                        Icon(
                            imageVector = Icons.Default.ArrowBack,
                            contentDescription = "পিছনে যান"
                        )
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.surface,
                    titleContentColor = MaterialTheme.colorScheme.onSurface,
                    navigationIconContentColor = MaterialTheme.colorScheme.onSurface
                )
            )
        }
    ) { paddingValues ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .background(MaterialTheme.colorScheme.background)
                .padding(paddingValues),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(14.dp)
        ) {
            // Surah Banner Header
            item {
                SurahHeaderBanner(
                    arabicName = surah.arabicName,
                    banglaName = surah.banglaName,
                    meaning = surah.meaning,
                    totalAyahs = surah.totalAyah,
                    showBismillah = surah.bismillahPre
                )
            }

            // Ayahs List
            items(ayahs, key = { it.id }) { ayah ->
                AyahCard(
                    ayah = ayah,
                    isPlaying = playingAyahId == ayah.id,
                    isBookmarked = bookmarkedAyahs.contains(ayah.id),
                    onPlayToggle = {
                        playingAyahId = if (playingAyahId == ayah.id) null else ayah.id
                        val msg = if (playingAyahId != null) "আয়াত ${ayah.ayahNumber} তিলাওয়াত শুরু হচ্ছে" else "তিলাওয়াত স্থগিত করা হয়েছে"
                        Toast.makeText(context, msg, Toast.LENGTH_SHORT).show()
                    },
                    onBookmarkToggle = {
                        bookmarkedAyahs = if (bookmarkedAyahs.contains(ayah.id)) {
                            bookmarkedAyahs - ayah.id
                        } else {
                            bookmarkedAyahs + ayah.id
                        }
                        val msg = if (bookmarkedAyahs.contains(ayah.id)) "বুকমার্কে যোগ করা হয়েছে" else "বুকমার্ক মুছে ফেলা হয়েছে"
                        Toast.makeText(context, msg, Toast.LENGTH_SHORT).show()
                    },
                    onCopy = {
                        val text = "${ayah.arabicText}\n\nউচ্চারণ: ${ayah.banglaPronunciation}\n\nঅর্থ: ${ayah.banglaTranslation}\n[সূরা ${ayah.surahName}, আয়াত ${ayah.ayahNumber}]"
                        clipboardManager.setText(AnnotatedString(text))
                        Toast.makeText(context, "আয়াত কপি করা হয়েছে", Toast.LENGTH_SHORT).show()
                    }
                )
            }
        }
    }
}

@Composable
private fun SurahHeaderBanner(
    arabicName: String,
    banglaName: String,
    meaning: String,
    totalAyahs: Int,
    showBismillah: Boolean
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(20.dp),
        colors = CardDefaults.cardColors(containerColor = Color.Transparent)
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .background(
                    Brush.horizontalGradient(
                        colors = listOf(
                            Color(0xFF0D5C3A),
                            Color(0xFF083D26),
                            Color(0xFF0F2B1D)
                        )
                    )
                )
                .padding(20.dp)
        ) {
            Column(
                modifier = Modifier.fillMaxWidth(),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text(
                    text = arabicName,
                    fontSize = 32.sp,
                    fontWeight = FontWeight.Bold,
                    color = IslamicGoldLight,
                    fontFamily = FontFamily.Serif
                )

                Spacer(modifier = Modifier.height(4.dp))

                Text(
                    text = "সূরা $banglaName",
                    fontSize = 20.sp,
                    fontWeight = FontWeight.Bold,
                    color = Color.White
                )

                Text(
                    text = "$meaning • $totalAyahs টি আয়াত",
                    fontSize = 13.sp,
                    color = Color(0xFFD1FAE5)
                )

                if (showBismillah) {
                    Spacer(modifier = Modifier.height(14.dp))
                    HorizontalDivider(
                        modifier = Modifier.fillMaxWidth(0.6f),
                        color = IslamicGoldAccent.copy(alpha = 0.4f),
                        thickness = 1.dp
                    )
                    Spacer(modifier = Modifier.height(12.dp))
                    Text(
                        text = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                        fontSize = 20.sp,
                        fontWeight = FontWeight.Medium,
                        color = Color.White,
                        fontFamily = FontFamily.Serif
                    )
                }
            }
        }
    }
}

@Composable
private fun AyahCard(
    ayah: Ayah,
    isPlaying: Boolean,
    isBookmarked: Boolean,
    onPlayToggle: () -> Unit,
    onBookmarkToggle: () -> Unit,
    onCopy: () -> Unit
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surface
        ),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
        ) {
            // Ayah Top bar (Number Badge + Action Buttons)
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                // Ayah Number Badge
                Box(
                    modifier = Modifier
                        .size(34.dp)
                        .clip(CircleShape)
                        .background(MaterialTheme.colorScheme.primaryContainer),
                    contentAlignment = Alignment.Center
                ) {
                    Text(
                        text = ayah.ayahNumber.toString(),
                        fontWeight = FontWeight.Bold,
                        fontSize = 13.sp,
                        color = MaterialTheme.colorScheme.primary
                    )
                }

                // Action Buttons (Play, Bookmark, Copy)
                Row(horizontalArrangement = Arrangement.spacedBy(4.dp)) {
                    IconButton(onClick = onPlayToggle) {
                        Icon(
                            imageVector = if (isPlaying) Icons.Filled.Pause else Icons.Filled.PlayArrow,
                            contentDescription = "তিলাওয়াত",
                            tint = if (isPlaying) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }

                    IconButton(onClick = onBookmarkToggle) {
                        Icon(
                            imageVector = if (isBookmarked) Icons.Filled.Bookmark else Icons.Outlined.BookmarkBorder,
                            contentDescription = "বুকমার্ক",
                            tint = if (isBookmarked) IslamicGoldAccent else MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }

                    IconButton(onClick = onCopy) {
                        Icon(
                            imageVector = Icons.Outlined.ContentCopy,
                            contentDescription = "কপি করুন",
                            tint = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(14.dp))

            // Arabic Text
            Text(
                text = ayah.arabicText,
                modifier = Modifier.fillMaxWidth(),
                textAlign = TextAlign.Right,
                fontSize = 23.sp,
                lineHeight = 38.sp,
                fontWeight = FontWeight.Bold,
                fontFamily = FontFamily.Serif,
                color = MaterialTheme.colorScheme.onSurface
            )

            Spacer(modifier = Modifier.height(14.dp))

            // Bangla Pronunciation
            Surface(
                shape = RoundedCornerShape(8.dp),
                color = MaterialTheme.colorScheme.primary.copy(alpha = 0.08f),
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(modifier = Modifier.padding(10.dp)) {
                    Text(
                        text = "উচ্চারণ:",
                        fontSize = 11.sp,
                        fontWeight = FontWeight.Bold,
                        color = MaterialTheme.colorScheme.primary
                    )
                    Spacer(modifier = Modifier.height(2.dp))
                    Text(
                        text = ayah.banglaPronunciation,
                        fontSize = 14.sp,
                        lineHeight = 20.sp,
                        color = MaterialTheme.colorScheme.onSurface
                    )
                }
            }

            Spacer(modifier = Modifier.height(10.dp))

            // Bangla Translation
            Text(
                text = "অর্থ: ${ayah.banglaTranslation}",
                fontSize = 14.sp,
                lineHeight = 22.sp,
                fontWeight = FontWeight.Normal,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}
