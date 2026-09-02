package com.deenlibrary.app.ui.home

import android.widget.Toast
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
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
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.platform.LocalClipboardManager
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.deenlibrary.app.ui.theme.IslamicGoldAccent
import com.deenlibrary.app.ui.theme.IslamicGoldLight

@Composable
fun HomeScreen(
    onNavigateToQuran: () -> Unit,
    onNavigateToHadith: () -> Unit,
    onNavigateToBookmarks: () -> Unit,
    onNavigateToSearch: () -> Unit,
    onNavigateToSurah: (Int) -> Unit
) {
    val context = LocalContext.current
    val clipboardManager = LocalClipboardManager.current
    var isAyahPlaying by remember { mutableStateOf(false) }

    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background),
        contentPadding = PaddingValues(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        // 1. Islamic Hijri Greeting Banner (Exactly like Web Preview)
        item {
            IslamicGreetingBanner()
        }

        // 2. Last Read Card
        item {
            LastReadCard(
                onContinueClick = { onNavigateToSurah(1) }
            )
        }

        // 3. Quick Access Grid
        item {
            QuickAccessGrid(
                onQuranClick = onNavigateToQuran,
                onHadithClick = onNavigateToHadith,
                onBookmarkClick = onNavigateToBookmarks,
                onSearchClick = onNavigateToSearch
            )
        }

        // 4. Daily Ayah Card
        item {
            DailyAyahCard(
                isPlaying = isAyahPlaying,
                onPlayToggle = {
                    isAyahPlaying = !isAyahPlaying
                    val msg = if (isAyahPlaying) "আয়াত তিলাওয়াত শুরু হচ্ছে" else "তিলাওয়াত থামানো হয়েছে"
                    Toast.makeText(context, msg, Toast.LENGTH_SHORT).show()
                },
                onCopy = {
                    val text = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\nউচ্চারণ: বিসমিল্লাহির রাহমানির রাহিম\n\nঅর্থ: পরম করুণাময়, অতি দয়ালু আল্লাহর নামে।\n[সূরা আল-ফাতিহা, আয়াত ১]"
                    clipboardManager.setText(AnnotatedString(text))
                    Toast.makeText(context, "আয়াত কপি করা হয়েছে", Toast.LENGTH_SHORT).show()
                },
                onReadSurah = { onNavigateToSurah(1) }
            )
        }

        // 5. Daily Hadith Card
        item {
            DailyHadithCard(
                onCopy = {
                    val text = "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ\n\nঅর্থ: সমস্ত কাজের ফলাফল নিয়তের ওপর নির্ভরশীল।\nবর্ণনাকারী: হযরত উমর (রা.)\nরেফারেন্স: সহীহ বুখারী: ১"
                    clipboardManager.setText(AnnotatedString(text))
                    Toast.makeText(context, "হাদিস কপি করা হয়েছে", Toast.LENGTH_SHORT).show()
                },
                onOpenHadith = onNavigateToHadith
            )
        }
    }
}

@Composable
private fun IslamicGreetingBanner() {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(24.dp),
        colors = CardDefaults.cardColors(containerColor = Color.Transparent)
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .background(
                    Brush.horizontalGradient(
                        colors = listOf(
                            Color(0xFF064E3B), // Emerald-900
                            Color(0xFF0F3E2E),
                            Color(0xFF092318)
                        )
                    )
                )
                .padding(20.dp)
        ) {
            // Bismillah Calligraphy Watermark in Top Right
            Text(
                text = "﷽",
                fontSize = 44.sp,
                color = Color.White.copy(alpha = 0.12f),
                fontFamily = FontFamily.Serif,
                modifier = Modifier.align(Alignment.TopEnd)
            )

            Column(
                modifier = Modifier.fillMaxWidth()
            ) {
                // Sparkle Badge
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(4.dp)
                ) {
                    Icon(
                        imageVector = Icons.Filled.AutoAwesome,
                        contentDescription = null,
                        tint = IslamicGoldLight,
                        modifier = Modifier.size(14.dp)
                    )
                    Text(
                        text = "দ্বীন লাইব্রেরি • কুরআন ও সহীহ হাদিস",
                        fontSize = 12.sp,
                        fontWeight = FontWeight.SemiBold,
                        color = IslamicGoldLight
                    )
                }

                Spacer(modifier = Modifier.height(6.dp))

                // Assalamu Alaikum
                Text(
                    text = "আসসালামু আলাইকুম!",
                    fontSize = 22.sp,
                    fontWeight = FontWeight.Bold,
                    color = Color.White
                )

                Spacer(modifier = Modifier.height(4.dp))

                // Subtitle
                Text(
                    text = "পবিত্র কুরআন তিলাওয়াত করুন, অর্থ ও তাফসীর বুঝুন এবং প্রামাণ্য হাদীসের আলোকে জীবনকে সাজান।",
                    fontSize = 12.sp,
                    lineHeight = 18.sp,
                    color = Color(0xFFD1FAE5).copy(alpha = 0.9f),
                    modifier = Modifier.fillMaxWidth(0.9f)
                )

                Spacer(modifier = Modifier.height(14.dp))
                HorizontalDivider(color = Color.White.copy(alpha = 0.15f), thickness = 1.dp)
                Spacer(modifier = Modifier.height(12.dp))

                // Hijri Date and Blessing row
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Surface(
                        shape = RoundedCornerShape(16.dp),
                        color = Color(0xFF062E22),
                        border = androidx.compose.foundation.BorderStroke(1.dp, Color(0xFF059669).copy(alpha = 0.4f))
                    ) {
                        Text(
                            text = "🌙 ১৪৪৬ হিজরি",
                            fontSize = 11.sp,
                            fontWeight = FontWeight.Medium,
                            color = IslamicGoldLight,
                            modifier = Modifier.padding(horizontal = 10.dp, vertical = 4.dp)
                        )
                    }

                    Text(
                        text = "আজকের দিনটি বরকতময় হোক",
                        fontSize = 12.sp,
                        fontWeight = FontWeight.Medium,
                        color = Color(0xFFA7F3D0)
                    )
                }
            }
        }
    }
}

@Composable
private fun LastReadCard(onContinueClick: () -> Unit) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onContinueClick() },
        shape = RoundedCornerShape(18.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surface
        ),
        border = androidx.compose.foundation.BorderStroke(
            1.dp,
            MaterialTheme.colorScheme.primary.copy(alpha = 0.25f)
        ),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(14.dp),
                modifier = Modifier.weight(1f)
            ) {
                Box(
                    modifier = Modifier
                        .size(46.dp)
                        .clip(RoundedCornerShape(14.dp))
                        .background(MaterialTheme.colorScheme.primary.copy(alpha = 0.15f)),
                    contentAlignment = Alignment.Center
                ) {
                    Icon(
                        imageVector = Icons.Filled.MenuBook,
                        contentDescription = null,
                        tint = MaterialTheme.colorScheme.primary,
                        modifier = Modifier.size(24.dp)
                    )
                }

                Column {
                    Text(
                        text = "সর্বশেষ পাঠ (LAST READ)",
                        fontSize = 11.sp,
                        fontWeight = FontWeight.Bold,
                        color = IslamicGoldAccent
                    )
                    Spacer(modifier = Modifier.height(2.dp))
                    Text(
                        text = "সূরা আল-ফাতিহা",
                        fontSize = 16.sp,
                        fontWeight = FontWeight.Bold,
                        color = MaterialTheme.colorScheme.onSurface
                    )
                    Text(
                        text = "আয়াত ১ • সূচনা / ভূমিকা",
                        fontSize = 12.sp,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }

            Surface(
                shape = RoundedCornerShape(12.dp),
                color = MaterialTheme.colorScheme.primary,
                modifier = Modifier.clickable { onContinueClick() }
            ) {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(4.dp),
                    modifier = Modifier.padding(horizontal = 10.dp, vertical = 6.dp)
                ) {
                    Text(
                        text = "পড়া চালিয়ে যান",
                        fontSize = 11.sp,
                        fontWeight = FontWeight.SemiBold,
                        color = Color.White
                    )
                    Icon(
                        imageVector = Icons.Default.ChevronRight,
                        contentDescription = null,
                        tint = Color.White,
                        modifier = Modifier.size(14.dp)
                    )
                }
            }
        }
    }
}

@Composable
private fun QuickAccessGrid(
    onQuranClick: () -> Unit,
    onHadithClick: () -> Unit,
    onBookmarkClick: () -> Unit,
    onSearchClick: () -> Unit
) {
    Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            QuickCard(
                title = "আল-কুরআনুল কারীম",
                subtitle = "১১৪টি পূর্ণাঙ্গ সূরা",
                icon = Icons.Filled.MenuBook,
                gradient = listOf(Color(0xFF0D5C3A), Color(0xFF083D26)),
                onClick = onQuranClick,
                modifier = Modifier.weight(1f)
            )

            QuickCard(
                title = "সহীহ হাদিস",
                subtitle = "৬টি প্রামাণ্য গ্রন্থ",
                icon = Icons.Filled.Mosque,
                gradient = listOf(Color(0xFF0F766E), Color(0xFF115E59)),
                onClick = onHadithClick,
                modifier = Modifier.weight(1f)
            )
        }

        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            QuickCard(
                title = "বুকমার্ক তালিকা",
                subtitle = "সংরক্ষিত আয়াত ও হাদিস",
                icon = Icons.Filled.Bookmark,
                gradient = listOf(Color(0xFF1E3A8A), Color(0xFF1E293B)),
                onClick = onBookmarkClick,
                modifier = Modifier.weight(1f)
            )

            QuickCard(
                title = "অনুসন্ধান ও তাফসীর",
                subtitle = "বিষয়ভিত্তিক খুঁজুন",
                icon = Icons.Filled.Search,
                gradient = listOf(Color(0xFF7C2D12), Color(0xFF451A03)),
                onClick = onSearchClick,
                modifier = Modifier.weight(1f)
            )
        }
    }
}

@Composable
private fun QuickCard(
    title: String,
    subtitle: String,
    icon: ImageVector,
    gradient: List<Color>,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier
            .clip(RoundedCornerShape(16.dp))
            .clickable { onClick() },
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(containerColor = Color.Transparent)
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .background(Brush.linearGradient(gradient))
                .padding(14.dp)
        ) {
            Column {
                Box(
                    modifier = Modifier
                        .size(36.dp)
                        .clip(RoundedCornerShape(10.dp))
                        .background(Color.White.copy(alpha = 0.15f)),
                    contentAlignment = Alignment.Center
                ) {
                    Icon(
                        imageVector = icon,
                        contentDescription = null,
                        tint = Color.White,
                        modifier = Modifier.size(20.dp)
                    )
                }

                Spacer(modifier = Modifier.height(10.dp))

                Text(
                    text = title,
                    fontSize = 14.sp,
                    fontWeight = FontWeight.Bold,
                    color = Color.White
                )

                Text(
                    text = subtitle,
                    fontSize = 11.sp,
                    color = Color.White.copy(alpha = 0.8f)
                )
            }
        }
    }
}

@Composable
private fun DailyAyahCard(
    isPlaying: Boolean,
    onPlayToggle: () -> Unit,
    onCopy: () -> Unit,
    onReadSurah: () -> Unit
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(20.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surface
        ),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(18.dp)
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(6.dp)
                ) {
                    Icon(
                        imageVector = Icons.Filled.NightsStay,
                        contentDescription = null,
                        tint = IslamicGoldAccent,
                        modifier = Modifier.size(18.dp)
                    )
                    Text(
                        text = "আজকের আয়াত (Daily Ayah)",
                        fontWeight = FontWeight.Bold,
                        fontSize = 14.sp,
                        color = MaterialTheme.colorScheme.primary
                    )
                }

                Text(
                    text = "সূরা আল-ফাতিহা: ১",
                    fontSize = 12.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = IslamicGoldAccent
                )
            }

            Spacer(modifier = Modifier.height(14.dp))

            // Arabic
            Text(
                text = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold,
                fontFamily = FontFamily.Serif,
                textAlign = TextAlign.Center,
                color = MaterialTheme.colorScheme.onSurface,
                modifier = Modifier.fillMaxWidth()
            )

            Spacer(modifier = Modifier.height(12.dp))

            Text(
                text = "উচ্চারণ: বিসমিল্লাহির রাহমানির রাহিম",
                fontSize = 13.sp,
                fontWeight = FontWeight.Medium,
                color = MaterialTheme.colorScheme.primary
            )

            Spacer(modifier = Modifier.height(4.dp))

            Text(
                text = "অর্থ: পরম করুণাময়, অতি দয়ালু আল্লাহর নামে।",
                fontSize = 13.sp,
                lineHeight = 20.sp,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            Spacer(modifier = Modifier.height(14.dp))
            HorizontalDivider(color = MaterialTheme.colorScheme.outlineVariant.copy(alpha = 0.4f))
            Spacer(modifier = Modifier.height(10.dp))

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Row(horizontalArrangement = Arrangement.spacedBy(6.dp)) {
                    FilledTonalButton(
                        onClick = onPlayToggle,
                        contentPadding = PaddingValues(horizontal = 10.dp, vertical = 6.dp)
                    ) {
                        Icon(
                            imageVector = if (isPlaying) Icons.Filled.Pause else Icons.Filled.VolumeUp,
                            contentDescription = null,
                            modifier = Modifier.size(16.dp)
                        )
                        Spacer(modifier = Modifier.width(4.dp))
                        Text(
                            text = if (isPlaying) "থামান" else "তিলাওয়াত",
                            fontSize = 11.sp
                        )
                    }

                    OutlinedButton(
                        onClick = onCopy,
                        contentPadding = PaddingValues(horizontal = 10.dp, vertical = 6.dp)
                    ) {
                        Icon(
                            imageVector = Icons.Outlined.ContentCopy,
                            contentDescription = null,
                            modifier = Modifier.size(16.dp)
                        )
                        Spacer(modifier = Modifier.width(4.dp))
                        Text(text = "কপি", fontSize = 11.sp)
                    }
                }

                TextButton(onClick = onReadSurah) {
                    Text(text = "সম্পূর্ণ সূরা >", fontSize = 12.sp, fontWeight = FontWeight.Bold)
                }
            }
        }
    }
}

@Composable
private fun DailyHadithCard(
    onCopy: () -> Unit,
    onOpenHadith: () -> Unit
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(20.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surface
        ),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(18.dp)
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(6.dp)
                ) {
                    Icon(
                        imageVector = Icons.Filled.FormatQuote,
                        contentDescription = null,
                        tint = IslamicGoldAccent,
                        modifier = Modifier.size(18.dp)
                    )
                    Text(
                        text = "আজকের হাদিস (Daily Hadith)",
                        fontWeight = FontWeight.Bold,
                        fontSize = 14.sp,
                        color = MaterialTheme.colorScheme.primary
                    )
                }

                Text(
                    text = "সহীহ বুখারী: ১",
                    fontSize = 12.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = IslamicGoldAccent
                )
            }

            Spacer(modifier = Modifier.height(12.dp))

            Text(
                text = "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
                fontSize = 20.sp,
                fontWeight = FontWeight.Bold,
                fontFamily = FontFamily.Serif,
                textAlign = TextAlign.Center,
                color = MaterialTheme.colorScheme.onSurface,
                modifier = Modifier.fillMaxWidth()
            )

            Spacer(modifier = Modifier.height(10.dp))

            Text(
                text = "অর্থ: নিশ্চয়ই সমস্ত কাজের ফলাফল নিয়তের ওপর নির্ভরশীল। আর প্রত্যেক ব্যক্তি যা নিয়ত করবে কেবল তাই সে লাভ করবে।",
                fontSize = 13.sp,
                lineHeight = 20.sp,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            Spacer(modifier = Modifier.height(6.dp))

            Text(
                text = "বর্ণনাকারী: হযরত উমর ইবনুল খাত্তাব (রা.)",
                fontSize = 12.sp,
                fontWeight = FontWeight.Medium,
                color = MaterialTheme.colorScheme.primary
            )

            Spacer(modifier = Modifier.height(12.dp))
            HorizontalDivider(color = MaterialTheme.colorScheme.outlineVariant.copy(alpha = 0.4f))
            Spacer(modifier = Modifier.height(8.dp))

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                OutlinedButton(
                    onClick = onCopy,
                    contentPadding = PaddingValues(horizontal = 10.dp, vertical = 6.dp)
                ) {
                    Icon(
                        imageVector = Icons.Outlined.ContentCopy,
                        contentDescription = null,
                        modifier = Modifier.size(16.dp)
                    )
                    Spacer(modifier = Modifier.width(4.dp))
                    Text(text = "কপি", fontSize = 11.sp)
                }

                TextButton(onClick = onOpenHadith) {
                    Text(text = "হাদিস ভাণ্ডার >", fontSize = 12.sp, fontWeight = FontWeight.Bold)
                }
            }
        }
    }
}
