package com.deenlibrary.app.ui

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.compose.rememberNavController
import com.deenlibrary.app.ui.navigation.AppNavigation
import com.deenlibrary.app.ui.navigation.DeenBottomNavBar

@Composable
fun MainScreen() {
    val navController = rememberNavController()

    Scaffold(
        modifier = Modifier.fillMaxSize(),
        bottomBar = {
            DeenBottomNavBar(navController = navController)
        }
    ) { innerPadding ->
        AppNavigation(
            navController = navController,
            paddingValues = innerPadding
        )
    }
}