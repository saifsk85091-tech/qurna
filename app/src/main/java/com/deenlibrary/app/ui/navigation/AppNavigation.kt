package com.deenlibrary.app.ui.navigation

import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.deenlibrary.app.ui.bookmark.BookmarkScreen
import com.deenlibrary.app.ui.hadith.HadithScreen
import com.deenlibrary.app.ui.home.HomeScreen
import com.deenlibrary.app.ui.quran.QuranScreen
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
                    // Ready for Step 4
                }
            )
        }

        composable(Screen.Quran.route) {
            QuranScreen(
                onSurahClick = { surahNumber ->
                    // Ready for Step 3
                }
            )
        }

        composable(Screen.Hadith.route) {
            HadithScreen(
                onBookClick = { bookId ->
                    // Ready for Step 8
                }
            )
        }

        composable(Screen.Bookmark.route) {
            BookmarkScreen()
        }

        composable(Screen.Settings.route) {
            SettingsScreen()
        }
    }
}