package com.deenlibrary.app.ui.navigation

import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.navArgument
import com.deenlibrary.app.ui.bookmark.BookmarkScreen
import com.deenlibrary.app.ui.hadith.HadithDetailScreen
import com.deenlibrary.app.ui.hadith.HadithScreen
import com.deenlibrary.app.ui.home.HomeScreen
import com.deenlibrary.app.ui.quran.QuranScreen
import com.deenlibrary.app.ui.quran.SurahDetailScreen
import com.deenlibrary.app.ui.settings.SettingsScreen

@Composable
fun AppNavigation(
    navController: NavHostController,
    paddingValues: PaddingValues,
    modifier: Modifier = Modifier
) {
    NavHost(
        navController = navController,
        startDestination = Screen.Home.route,
        modifier = modifier.padding(paddingValues),
        enterTransition = { fadeIn() },
        exitTransition = { fadeOut() },
        popEnterTransition = { fadeIn() },
        popExitTransition = { fadeOut() }
    ) {
        // 1. Home Tab
        composable(Screen.Home.route) {
            HomeScreen(
                onNavigateToQuran = {
                    navController.navigate(Screen.Quran.route)
                },
                onNavigateToHadith = {
                    navController.navigate(Screen.Hadith.route)
                },
                onNavigateToBookmarks = {
                    navController.navigate(Screen.Bookmark.route)
                },
                onNavigateToSearch = {
                    navController.navigate(Screen.Quran.route)
                },
                onNavigateToSurah = { surahNumber ->
                    navController.navigate(Screen.SurahDetail.createRoute(surahNumber))
                }
            )
        }

        // 2. Quran List Tab
        composable(Screen.Quran.route) {
            QuranScreen(
                onSurahClick = { surahNumber ->
                    navController.navigate(Screen.SurahDetail.createRoute(surahNumber))
                }
            )
        }

        // 3. Surah Detail Reader Screen
        composable(
            route = Screen.SurahDetail.route,
            arguments = listOf(
                navArgument("surahNumber") { type = NavType.IntType }
            )
        ) { backStackEntry ->
            val surahNumber = backStackEntry.arguments?.getInt("surahNumber") ?: 1
            SurahDetailScreen(
                surahNumber = surahNumber,
                onNavigateBack = {
                    navController.popBackStack()
                }
            )
        }

        // 4. Hadith Books Tab
        composable(Screen.Hadith.route) {
            HadithScreen(
                onBookClick = { bookId ->
                    navController.navigate(Screen.HadithDetail.createRoute(bookId))
                }
            )
        }

        // 5. Hadith Detail Reader Screen
        composable(
            route = Screen.HadithDetail.route,
            arguments = listOf(
                navArgument("hadithId") { type = NavType.IntType }
            )
        ) { backStackEntry ->
            val bookId = backStackEntry.arguments?.getInt("hadithId") ?: 1
            HadithDetailScreen(
                bookId = bookId,
                onNavigateBack = {
                    navController.popBackStack()
                }
            )
        }

        // 6. Bookmarks Tab
        composable(Screen.Bookmark.route) {
            BookmarkScreen()
        }

        // 7. Settings Tab
        composable(Screen.Settings.route) {
            SettingsScreen()
        }
    }
}
