package com.deenlibrary.app.ui.navigation

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Bookmark
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.MenuBook
import androidx.compose.material.icons.filled.Mosque
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material.icons.outlined.BookmarkBorder
import androidx.compose.material.icons.outlined.Home
import androidx.compose.material.icons.outlined.MenuBook
import androidx.compose.material.icons.outlined.Mosque
import androidx.compose.material.icons.outlined.Settings
import androidx.compose.ui.graphics.vector.ImageVector

sealed class Screen(
    val route: String,
    val titleBangla: String,
    val titleEnglish: String,
    val selectedIcon: ImageVector? = null,
    val unselectedIcon: ImageVector? = null
) {
    // Bottom Navigation Destinations
    object Home : Screen(
        route = "home",
        titleBangla = "হোম",
        titleEnglish = "Home",
        selectedIcon = Icons.Filled.Home,
        unselectedIcon = Icons.Outlined.Home
    )

    object Quran : Screen(
        route = "quran",
        titleBangla = "কুরআন",
        titleEnglish = "Quran",
        selectedIcon = Icons.Filled.MenuBook,
        unselectedIcon = Icons.Outlined.MenuBook
    )

    object Hadith : Screen(
        route = "hadith",
        titleBangla = "হাদিস",
        titleEnglish = "Hadith",
        selectedIcon = Icons.Filled.Mosque,
        unselectedIcon = Icons.Outlined.Mosque
    )

    object Bookmark : Screen(
        route = "bookmark",
        titleBangla = "বুকমার্ক",
        titleEnglish = "Bookmark",
        selectedIcon = Icons.Filled.Bookmark,
        unselectedIcon = Icons.Outlined.BookmarkBorder
    )

    object Settings : Screen(
        route = "settings",
        titleBangla = "সেটিংস",
        titleEnglish = "Settings",
        selectedIcon = Icons.Filled.Settings,
        unselectedIcon = Icons.Outlined.Settings
    )

    // Secondary / Detail Routes (Prepared for subsequent steps)
    object Splash : Screen(route = "splash", titleBangla = "স্বাগতম", titleEnglish = "Splash")
    object SurahDetail : Screen(route = "surah_detail/{surahNumber}", titleBangla = "সূরা পাঠ", titleEnglish = "Surah Reading") {
        fun createRoute(surahNumber: Int) = "surah_detail/$surahNumber"
    }
    object HadithChapterList : Screen(route = "hadith_chapters/{bookId}", titleBangla = "অধ্যায় তালিকা", titleEnglish = "Hadith Chapters") {
        fun createRoute(bookId: Int) = "hadith_chapters/$bookId"
    }
    object HadithDetail : Screen(route = "hadith_detail/{hadithId}", titleBangla = "হাদিস পাঠ", titleEnglish = "Hadith Reading") {
        fun createRoute(hadithId: Int) = "hadith_detail/$hadithId"
    }
    object Search : Screen(route = "search", titleBangla = "অনুসন্ধান", titleEnglish = "Search")
    object AudioPlayer : Screen(route = "audio_player", titleBangla = "অডিও প্লেয়ার", titleEnglish = "Audio Player")
}

val bottomNavItems = listOf(
    Screen.Home,
    Screen.Quran,
    Screen.Hadith,
    Screen.Bookmark,
    Screen.Settings
)