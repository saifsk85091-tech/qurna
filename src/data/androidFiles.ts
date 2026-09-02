import { CodeFile } from '../types';

export const ANDROID_FILES: CodeFile[] = [
  {
    id: 'gradle-properties',
    name: 'gradle.properties',
    path: 'gradle.properties',
    category: 'gradle',
    language: 'properties',
    description: 'Gradle properties configuring AndroidX and JVM options',
    content: `org.gradle.jvmargs=-Xmx2048m -Dfile.encoding=UTF-8
android.useAndroidX=true
android.enableJetifier=true
kotlin.code.style=official
android.nonTransitiveRClass=true`
  },
  {
    id: 'gradle-wrapper-properties',
    name: 'gradle-wrapper.properties',
    path: 'gradle/wrapper/gradle-wrapper.properties',
    category: 'gradle',
    language: 'properties',
    description: 'Gradle wrapper configuration specifying distribution URL',
    content: `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-8.9-all.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists`
  },
  {
    id: 'settings-gradle',
    name: 'settings.gradle.kts',
    path: 'settings.gradle.kts',
    category: 'gradle',
    language: 'kotlin',
    description: 'Root project settings and plugin/dependency repositories configuration',
    content: `pluginManagement {
    repositories {
        google {
            content {
                includeGroupByRegex("com\\\\.android.*")
                includeGroupByRegex("com\\\\.google.*")
                includeGroupByRegex("androidx.*")
            }
        }
        mavenCentral()
        gradlePluginPortal()
    }
}
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
    }
}

rootProject.name = "Deen Library"
include(":app")`
  },
  {
    id: 'root-build-gradle',
    name: 'build.gradle.kts (Project)',
    path: 'build.gradle.kts',
    category: 'gradle',
    language: 'kotlin',
    description: 'Top-level build configuration file with Android, Kotlin, and KSP plugins',
    content: `// Top-level build file where you can add configuration options common to all sub-projects/modules.
plugins {
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.kotlin.android) apply false
    alias(libs.plugins.kotlin.compose) apply false
    alias(libs.plugins.ksp) apply false
}`
  },
  {
    id: 'libs-versions-toml',
    name: 'libs.versions.toml',
    path: 'gradle/libs.versions.toml',
    category: 'gradle',
    language: 'toml',
    description: 'Version catalog for managing all dependencies and plugins',
    content: `[versions]
agp = "8.7.3"
kotlin = "2.0.21"
coreKtx = "1.15.0"
lifecycleRuntimeKtx = "2.8.7"
activityCompose = "1.9.3"
composeBom = "2024.12.01"
navigationCompose = "2.8.5"
material3 = "1.3.1"
materialIconsExtended = "1.7.6"
room = "2.6.1"
ksp = "2.0.21-1.0.28"
coroutines = "1.9.0"

[libraries]
androidx-core-ktx = { group = "androidx.core", name = "core-ktx", version.ref = "coreKtx" }
androidx-lifecycle-runtime-ktx = { group = "androidx.lifecycle", name = "lifecycle-runtime-ktx", version.ref = "lifecycleRuntimeKtx" }
androidx-lifecycle-viewmodel-compose = { group = "androidx.lifecycle", name = "lifecycle-viewmodel-compose", version.ref = "lifecycleRuntimeKtx" }
androidx-activity-compose = { group = "androidx.activity", name = "activity-compose", version.ref = "activityCompose" }
androidx-compose-bom = { group = "androidx.compose", name = "compose-bom", version.ref = "composeBom" }
androidx-ui = { group = "androidx.compose.ui", name = "ui" }
androidx-ui-graphics = { group = "androidx.compose.ui", name = "ui-graphics" }
androidx-ui-tooling = { group = "androidx.compose.ui", name = "ui-tooling" }
androidx-ui-tooling-preview = { group = "androidx.compose.ui", name = "ui-tooling-preview" }
androidx-material3 = { group = "androidx.compose.material3", name = "material3", version.ref = "material3" }
androidx-material-icons-extended = { group = "androidx.compose.material", name = "material-icons-extended", version.ref = "materialIconsExtended" }
androidx-navigation-compose = { group = "androidx.navigation", name = "navigation-compose", version.ref = "navigationCompose" }

# Room Database (Prepared for Steps 3-18)
androidx-room-runtime = { group = "androidx.room", name = "room-runtime", version.ref = "room" }
androidx-room-ktx = { group = "androidx.room", name = "room-ktx", version.ref = "room" }
androidx-room-compiler = { group = "androidx.room", name = "room-compiler", version.ref = "room" }

# Coroutines
kotlinx-coroutines-android = { group = "org.jetbrains.kotlinx", name = "kotlinx-coroutines-android", version.ref = "coroutines" }

[plugins]
android-application = { id = "com.android.application", version.ref = "agp" }
kotlin-android = { id = "org.jetbrains.kotlin.android", version.ref = "kotlin" }
kotlin-compose = { id = "org.jetbrains.kotlin.plugin.compose", version.ref = "kotlin" }
ksp = { id = "com.google.devtools.ksp", version.ref = "ksp" }`
  },
  {
    id: 'app-build-gradle',
    name: 'build.gradle.kts (App)',
    path: 'app/build.gradle.kts',
    category: 'gradle',
    language: 'kotlin',
    description: 'App-level build configuration with Compose, Material 3, Navigation & Room setup',
    content: `plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    alias(libs.plugins.kotlin.compose)
    alias(libs.plugins.ksp)
}

android {
    namespace = "com.deenlibrary.app"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.deenlibrary.app"
        minSdk = 24
        targetSdk = 35
        versionCode = 1
        versionName = "1.0.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        vectorDrawables {
            useSupportLibrary = true
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
    buildFeatures {
        compose = true
    }
    packaging {
        resources {
            excludes += "/META-INF/{AL2.0,LGPL2.1}"
        }
    }
}

dependencies {
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.lifecycle.runtime.ktx)
    implementation(libs.androidx.lifecycle.viewmodel.compose)
    implementation(libs.androidx.activity.compose)
    
    // Compose BOM & UI
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.ui)
    implementation(libs.androidx.ui.graphics)
    implementation(libs.androidx.ui.tooling.preview)
    implementation(libs.androidx.material3)
    implementation(libs.androidx.material.icons.extended)
    
    // Navigation Compose
    implementation(libs.androidx.navigation.compose)
    
    // Room Database
    implementation(libs.androidx.room.runtime)
    implementation(libs.androidx.room.ktx)
    ksp(libs.androidx.room.compiler)
    
    // Coroutines
    implementation(libs.kotlinx.coroutines.android)

    debugImplementation(libs.androidx.ui.tooling)
}`
  },
  {
    id: 'android-manifest',
    name: 'AndroidManifest.xml',
    path: 'app/src/main/AndroidManifest.xml',
    category: 'manifest',
    language: 'xml',
    description: 'Android application manifest declaration with theme and activity configuration',
    content: `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android">

    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.DeenLibrary">
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:theme="@style/Theme.DeenLibrary">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>`
  },
  {
    id: 'color-kt',
    name: 'Color.kt',
    path: 'app/src/main/java/com/deenlibrary/app/ui/theme/Color.kt',
    category: 'theme',
    language: 'kotlin',
    description: 'Material 3 Islamic Color Palette: Deep Emerald Green, Radiant Gold, Off-White & Deep Night',
    content: `package com.deenlibrary.app.ui.theme

import androidx.compose.ui.graphics.Color

// Light Mode Islamic Palette
val EmeraldPrimaryLight = Color(0xFF0D5C3A)
val OnEmeraldPrimaryLight = Color(0xFFFFFFFF)
val EmeraldPrimaryContainerLight = Color(0xFFD4EEDF)
val OnEmeraldPrimaryContainerLight = Color(0xFF002111)

val GoldSecondaryLight = Color(0xFFB58E22)
val OnGoldSecondaryLight = Color(0xFFFFFFFF)
val GoldSecondaryContainerLight = Color(0xFFFFF0C7)
val OnGoldSecondaryContainerLight = Color(0xFF261900)

val SageTertiaryLight = Color(0xFF386650)
val OnSageTertiaryLight = Color(0xFFFFFFFF)

val BackgroundLight = Color(0xFFF8FAF7)
val OnBackgroundLight = Color(0xFF191C1A)
val SurfaceLight = Color(0xFFFFFFFF)
val OnSurfaceLight = Color(0xFF191C1A)
val SurfaceVariantLight = Color(0xFFDEE5DD)
val OnSurfaceVariantLight = Color(0xFF424943)
val OutlineLight = Color(0xFF727973)

// Dark Mode Islamic Palette
val EmeraldPrimaryDark = Color(0xFF86D7A5)
val OnEmeraldPrimaryDark = Color(0xFF003920)
val EmeraldPrimaryContainerDark = Color(0xFF005230)
val OnEmeraldPrimaryContainerDark = Color(0xFFA5F4C1)

val GoldSecondaryDark = Color(0xFFE9C35E)
val OnGoldSecondaryDark = Color(0xFF3F2E00)
val GoldSecondaryContainerDark = Color(0xFF5A4300)
val OnGoldSecondaryContainerDark = Color(0xFFFFDF94)

val SageTertiaryDark = Color(0xFFA0D0B6)
val OnSageTertiaryDark = Color(0xFF013824)

val BackgroundDark = Color(0xFF0F1511)
val OnBackgroundDark = Color(0xFFE1E3DF)
val SurfaceDark = Color(0xFF141D17)
val OnSurfaceDark = Color(0xFFE1E3DF)
val SurfaceVariantDark = Color(0xFF223027)
val OnSurfaceVariantDark = Color(0xFFC2C9C1)
val OutlineDark = Color(0xFF8C938C)

// Custom Accent Highlights
val IslamicGoldAccent = Color(0xFFD4AF37)
val AyahCardBgLight = Color(0xFFF1F8F4)
val AyahCardBgDark = Color(0xFF17251E)`
  },
  {
    id: 'type-kt',
    name: 'Type.kt',
    path: 'app/src/main/java/com/deenlibrary/app/ui/theme/Type.kt',
    category: 'theme',
    language: 'kotlin',
    description: 'Material 3 Typography configuration for English, Bangla, and Arabic Quranic display',
    content: `package com.deenlibrary.app.ui.theme

import androidx.compose.material3.Typography
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp

val Typography = Typography(
    headlineLarge = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Bold,
        fontSize = 28.sp,
        lineHeight = 36.sp,
        letterSpacing = 0.sp
    ),
    headlineMedium = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.SemiBold,
        fontSize = 24.sp,
        lineHeight = 32.sp,
        letterSpacing = 0.sp
    ),
    titleLarge = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.SemiBold,
        fontSize = 20.sp,
        lineHeight = 26.sp,
        letterSpacing = 0.sp
    ),
    titleMedium = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Medium,
        fontSize = 16.sp,
        lineHeight = 22.sp,
        letterSpacing = 0.15.sp
    ),
    bodyLarge = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Normal,
        fontSize = 16.sp,
        lineHeight = 24.sp,
        letterSpacing = 0.5.sp
    ),
    bodyMedium = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Normal,
        fontSize = 14.sp,
        lineHeight = 20.sp,
        letterSpacing = 0.25.sp
    ),
    labelLarge = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Medium,
        fontSize = 14.sp,
        lineHeight = 20.sp,
        letterSpacing = 0.1.sp
    ),
    labelSmall = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Normal,
        fontSize = 11.sp,
        lineHeight = 16.sp,
        letterSpacing = 0.5.sp
    )
)`
  },
  {
    id: 'theme-kt',
    name: 'Theme.kt',
    path: 'app/src/main/java/com/deenlibrary/app/ui/theme/Theme.kt',
    category: 'theme',
    language: 'kotlin',
    description: 'Material 3 Theme setup with custom ColorScheme and dynamic system bar support',
    content: `package com.deenlibrary.app.ui.theme

import android.app.Activity
import android.os.Build
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.dynamicDarkColorScheme
import androidx.compose.material3.dynamicLightColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.SideEffect
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalView
import androidx.core.view.WindowCompat

private val DarkColorScheme = darkColorScheme(
    primary = EmeraldPrimaryDark,
    onPrimary = OnEmeraldPrimaryDark,
    primaryContainer = EmeraldPrimaryContainerDark,
    onPrimaryContainer = OnEmeraldPrimaryContainerDark,
    secondary = GoldSecondaryDark,
    onSecondary = OnGoldSecondaryDark,
    secondaryContainer = GoldSecondaryContainerDark,
    onSecondaryContainer = OnGoldSecondaryContainerDark,
    tertiary = SageTertiaryDark,
    onTertiary = OnSageTertiaryDark,
    background = BackgroundDark,
    onBackground = OnBackgroundDark,
    surface = SurfaceDark,
    onSurface = OnSurfaceDark,
    surfaceVariant = SurfaceVariantDark,
    onSurfaceVariant = OnSurfaceVariantDark,
    outline = OutlineDark
)

private val LightColorScheme = lightColorScheme(
    primary = EmeraldPrimaryLight,
    onPrimary = OnEmeraldPrimaryLight,
    primaryContainer = EmeraldPrimaryContainerLight,
    onPrimaryContainer = OnEmeraldPrimaryContainerLight,
    secondary = GoldSecondaryLight,
    onSecondary = OnGoldSecondaryLight,
    secondaryContainer = GoldSecondaryContainerLight,
    onSecondaryContainer = OnGoldSecondaryContainerLight,
    tertiary = SageTertiaryLight,
    onTertiary = OnSageTertiaryLight,
    background = BackgroundLight,
    onBackground = OnBackgroundLight,
    surface = SurfaceLight,
    onSurface = OnSurfaceLight,
    surfaceVariant = SurfaceVariantLight,
    onSurfaceVariant = OnSurfaceVariantLight,
    outline = OutlineLight
)

@Composable
fun DeenLibraryTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    // Set dynamicColor to false to maintain the signature Islamic Green & Gold branding
    dynamicColor: Boolean = false,
    content: @Composable () -> Unit
) {
    val colorScheme = when {
        dynamicColor && Build.VERSION.SDK_INT >= Build.VERSION_CODES.S -> {
            val context = LocalContext.current
            if (darkTheme) dynamicDarkColorScheme(context) else dynamicLightColorScheme(context)
        }
        darkTheme -> DarkColorScheme
        else -> LightColorScheme
    }

    val view = LocalView.current
    if (!view.isInEditMode) {
        SideEffect {
            val window = (view.context as Activity).window
            window.statusBarColor = colorScheme.background.toArgb()
            WindowCompat.getInsetsController(window, view).isAppearanceLightStatusBars = !darkTheme
        }
    }

    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        content = content
    )
}`
  },
  {
    id: 'screen-kt',
    name: 'Screen.kt',
    path: 'app/src/main/java/com/deenlibrary/app/ui/navigation/Screen.kt',
    category: 'navigation',
    language: 'kotlin',
    description: 'Type-safe sealed class defining navigation routes, titles, and icons for all screens',
    content: `package com.deenlibrary.app.ui.navigation

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
)`
  },
  {
    id: 'bottom-navbar-kt',
    name: 'BottomNavBar.kt',
    path: 'app/src/main/java/com/deenlibrary/app/ui/navigation/BottomNavBar.kt',
    category: 'navigation',
    language: 'kotlin',
    description: 'Material 3 NavigationBar with Islamic green and gold active indicators',
    content: `package com.deenlibrary.app.ui.navigation

import androidx.compose.animation.animateColorAsState
import androidx.compose.foundation.layout.size
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.NavigationBarItemDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.compose.currentBackStackEntryAsState
import com.deenlibrary.app.ui.theme.IslamicGoldAccent

@Composable
fun DeenBottomNavBar(navController: NavController) {
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentRoute = navBackStackEntry?.destination?.route

    NavigationBar(
        containerColor = MaterialTheme.colorScheme.surface,
        tonalElevation = 8.dp
    ) {
        bottomNavItems.forEach { screen ->
            val isSelected = currentRoute == screen.route
            val icon = if (isSelected) screen.selectedIcon else screen.unselectedIcon

            NavigationBarItem(
                selected = isSelected,
                onClick = {
                    if (currentRoute != screen.route) {
                        navController.navigate(screen.route) {
                            popUpTo(navController.graph.findStartDestination().id) {
                                saveState = true
                            }
                            launchSingleTop = true
                            restoreState = true
                        }
                    }
                },
                icon = {
                    icon?.let {
                        Icon(
                            imageVector = it,
                            contentDescription = screen.titleEnglish,
                            modifier = Modifier.size(24.dp)
                        )
                    }
                },
                label = {
                    Text(
                        text = screen.titleBangla,
                        fontSize = 12.sp,
                        fontWeight = if (isSelected) FontWeight.SemiBold else FontWeight.Normal
                    )
                },
                colors = NavigationBarItemDefaults.colors(
                    selectedIconColor = MaterialTheme.colorScheme.primary,
                    selectedTextColor = MaterialTheme.colorScheme.primary,
                    indicatorColor = MaterialTheme.colorScheme.primaryContainer,
                    unselectedIconColor = MaterialTheme.colorScheme.onSurfaceVariant,
                    unselectedTextColor = MaterialTheme.colorScheme.onSurfaceVariant
                )
            )
        }
    }
}`
  },
  {
    id: 'app-navigation-kt',
    name: 'AppNavigation.kt',
    path: 'app/src/main/java/com/deenlibrary/app/ui/navigation/AppNavigation.kt',
    category: 'navigation',
    language: 'kotlin',
    description: 'NavHost setup with transition animations connecting all 5 main modules & detail screens',
    content: `package com.deenlibrary.app.ui.navigation

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
}`
  },
  {
    id: 'main-screen-kt',
    name: 'MainScreen.kt',
    path: 'app/src/main/java/com/deenlibrary/app/ui/MainScreen.kt',
    category: 'ui',
    language: 'kotlin',
    description: 'Root scaffold composable managing top bars, bottom navigation bar, and screen content',
    content: `package com.deenlibrary.app.ui

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
}`
  },
  {
    id: 'home-screen-kt',
    name: 'HomeScreen.kt',
    path: 'app/src/main/java/com/deenlibrary/app/ui/home/HomeScreen.kt',
    category: 'ui',
    language: 'kotlin',
    description: 'Complete Step 1 Home Screen with Assalamu Alaikum greeting, Hijri date, Continue Reading & Daily Ayah cards',
    content: `package com.deenlibrary.app.ui.home

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
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.deenlibrary.app.ui.theme.IslamicGoldAccent

@Composable
fun HomeScreen(
    onNavigateToQuran: () -> Unit,
    onNavigateToHadith: () -> Unit,
    onNavigateToBookmarks: () -> Unit,
    onNavigateToSearch: () -> Unit
) {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background),
        contentPadding = PaddingValues(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        // 1. Header with Islamic Greeting & Hijri Date
        item {
            IslamicHeaderSection()
        }

        // 2. Continue Reading Card
        item {
            ContinueReadingCard(onContinueClick = onNavigateToQuran)
        }

        // 3. Quick Access Grid
        item {
            QuickAccessSection(
                onQuranClick = onNavigateToQuran,
                onHadithClick = onNavigateToHadith,
                onBookmarkClick = onNavigateToBookmarks,
                onSearchClick = onNavigateToSearch
            )
        }

        // 4. Daily Ayah Card
        item {
            DailyAyahCard()
        }

        // 5. Daily Hadith Card
        item {
            DailyHadithCard()
        }
    }
}

@Composable
private fun IslamicHeaderSection() {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 8.dp)
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Text(
                    text = "السلام عليكم",
                    fontSize = 20.sp,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.primary
                )
                Text(
                    text = "Assalamu Alaikum",
                    fontSize = 16.sp,
                    fontWeight = FontWeight.Medium,
                    color = MaterialTheme.colorScheme.onBackground
                )
            }
            
            // Mosque / Islamic Badge
            Box(
                modifier = Modifier
                    .size(44.dp)
                    .clip(CircleShape)
                    .background(MaterialTheme.colorScheme.primaryContainer),
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    imageVector = Icons.Filled.Mosque,
                    contentDescription = "Deen Library",
                    tint = MaterialTheme.colorScheme.primary,
                    modifier = Modifier.size(24.dp)
                )
            }
        }

        Spacer(modifier = Modifier.height(6.dp))

        // Date & Hijri calendar row
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Text(
                text = "আজকের তারিখ: আজ",
                fontSize = 13.sp,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
            Text(
                text = "১৪৪৬ হিজরি",
                fontSize = 13.sp,
                fontWeight = FontWeight.Medium,
                color = IslamicGoldAccent
            )
        }
    }
}

@Composable
private fun ContinueReadingCard(onContinueClick: () -> Unit) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.primary
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
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Icon(
                        imageVector = Icons.Filled.MenuBook,
                        contentDescription = null,
                        tint = IslamicGoldAccent,
                        modifier = Modifier.size(20.dp)
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(
                        text = "সর্বশেষ পঠিত (Last Read)",
                        fontSize = 13.sp,
                        fontWeight = FontWeight.Medium,
                        color = Color.White.copy(alpha = 0.85f)
                    )
                }
            }

            Spacer(modifier = Modifier.height(12.dp))

            Text(
                text = "সূরা আল-ফাতিহা (Al-Fatihah)",
                fontSize = 18.sp,
                fontWeight = FontWeight.Bold,
                color = Color.White
            )

            Text(
                text = "আয়াত নং: ১",
                fontSize = 14.sp,
                color = Color.White.copy(alpha = 0.9f)
            )

            Spacer(modifier = Modifier.height(14.dp))

            Button(
                onClick = onContinueClick,
                colors = ButtonDefaults.buttonColors(
                    containerColor = IslamicGoldAccent,
                    contentColor = Color(0xFF261900)
                ),
                shape = RoundedCornerShape(10.dp),
                contentPadding = PaddingValues(horizontal = 16.dp, vertical = 8.dp)
            ) {
                Text(
                    text = "পড়া চালিয়ে যান (Continue)",
                    fontSize = 13.sp,
                    fontWeight = FontWeight.SemiBold
                )
            }
        }
    }
}

@Composable
private fun QuickAccessSection(
    onQuranClick: () -> Unit,
    onHadithClick: () -> Unit,
    onBookmarkClick: () -> Unit,
    onSearchClick: () -> Unit
) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(10.dp)
    ) {
        QuickAccessItem(
            title = "কুরআন",
            icon = Icons.Filled.MenuBook,
            modifier = Modifier.weight(1f),
            onClick = onQuranClick
        )
        QuickAccessItem(
            title = "হাদিস",
            icon = Icons.Filled.Mosque,
            modifier = Modifier.weight(1f),
            onClick = onHadithClick
        )
        QuickAccessItem(
            title = "বুকমার্ক",
            icon = Icons.Filled.Bookmark,
            modifier = Modifier.weight(1f),
            onClick = onBookmarkClick
        )
        QuickAccessItem(
            title = "খুঁজুন",
            icon = Icons.Filled.Search,
            modifier = Modifier.weight(1f),
            onClick = onSearchClick
        )
    }
}

@Composable
private fun QuickAccessItem(
    title: String,
    icon: ImageVector,
    modifier: Modifier = Modifier,
    onClick: () -> Unit
) {
    Card(
        modifier = modifier.clickable { onClick() },
        shape = RoundedCornerShape(12.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surface
        ),
        elevation = CardDefaults.cardElevation(defaultElevation = 1.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(vertical = 12.dp, horizontal = 4.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Icon(
                imageVector = icon,
                contentDescription = title,
                tint = MaterialTheme.colorScheme.primary,
                modifier = Modifier.size(24.dp)
            )
            Spacer(modifier = Modifier.height(6.dp))
            Text(
                text = title,
                fontSize = 12.sp,
                fontWeight = FontWeight.Medium,
                color = MaterialTheme.colorScheme.onSurface
            )
        }
    }
}

@Composable
private fun DailyAyahCard() {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surface
        ),
        elevation = CardDefaults.cardElevation(defaultElevation = 1.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "🌙 আজকের আয়াত (Daily Ayah)",
                    fontSize = 15.sp,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.primary
                )
                Text(
                    text = "সূরা আল-ফাতিহা: ১",
                    fontSize = 12.sp,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }

            Spacer(modifier = Modifier.height(12.dp))

            Text(
                text = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                fontSize = 20.sp,
                fontWeight = FontWeight.Bold,
                textAlign = TextAlign.Center,
                modifier = Modifier.fillMaxWidth(),
                color = MaterialTheme.colorScheme.onSurface
            )

            Spacer(modifier = Modifier.height(10.dp))

            Text(
                text = "উচ্চারণ: বিসমিল্লাহির রাহমানির রাহিম",
                fontSize = 13.sp,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            Spacer(modifier = Modifier.height(4.dp))

            Text(
                text = "অর্থ: পরম করুণাময়, অতি দয়ালু আল্লাহর নামে।",
                fontSize = 13.sp,
                fontWeight = FontWeight.Medium,
                color = MaterialTheme.colorScheme.onSurface
            )
        }
    }
}

@Composable
private fun DailyHadithCard() {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surface
        ),
        elevation = CardDefaults.cardElevation(defaultElevation = 1.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "📜 আজকের হাদিস (Daily Hadith)",
                    fontSize = 15.sp,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.primary
                )
                Text(
                    text = "সহীহ বুখারী: ১",
                    fontSize = 12.sp,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }

            Spacer(modifier = Modifier.height(10.dp))

            Text(
                text = "সকল কাজের ফলাফল নিয়তের উপর নির্ভরশীল।",
                fontSize = 14.sp,
                fontWeight = FontWeight.Medium,
                color = MaterialTheme.colorScheme.onSurface
            )

            Spacer(modifier = Modifier.height(6.dp))

            Text(
                text = "বর্ণনাকারী: উমর ইবনুল খাত্তাব (রা.)",
                fontSize = 12.sp,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}`
  },
  {
    id: 'quran-screen-kt',
    name: 'QuranScreen.kt',
    path: 'app/src/main/java/com/deenlibrary/app/ui/quran/QuranScreen.kt',
    category: 'ui',
    language: 'kotlin',
    description: 'Quran Surah list view placeholder with search bar and Surah card template',
    content: `package com.deenlibrary.app.ui.quran

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
}`
  },
  {
    id: 'hadith-screen-kt',
    name: 'HadithScreen.kt',
    path: 'app/src/main/java/com/deenlibrary/app/ui/hadith/HadithScreen.kt',
    category: 'ui',
    language: 'kotlin',
    description: 'Hadith Book collection grid view placeholder (Bukhari, Muslim, Abu Dawood, etc.)',
    content: `package com.deenlibrary.app.ui.hadith

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
}`
  },
  {
    id: 'bookmark-screen-kt',
    name: 'BookmarkScreen.kt',
    path: 'app/src/main/java/com/deenlibrary/app/ui/bookmark/BookmarkScreen.kt',
    category: 'ui',
    language: 'kotlin',
    description: 'Bookmark tab with category filters for Quran and Hadith bookmarks',
    content: `package com.deenlibrary.app.ui.bookmark

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Bookmark
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun BookmarkScreen() {
    var selectedTab by remember { mutableStateOf(0) }
    val tabs = listOf("কুরআন বুকমার্ক", "হাদিস বুকমার্ক")

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background)
    ) {
        TopAppBar(
            title = {
                Text(
                    text = "বুকমার্ক (Bookmarks)",
                    fontWeight = FontWeight.Bold,
                    fontSize = 18.sp
                )
            },
            colors = TopAppBarDefaults.topAppBarColors(
                containerColor = MaterialTheme.colorScheme.surface,
                titleContentColor = MaterialTheme.colorScheme.primary
            )
        )

        TabRow(
            selectedTabIndex = selectedTab,
            containerColor = MaterialTheme.colorScheme.surface,
            contentColor = MaterialTheme.colorScheme.primary
        ) {
            tabs.forEachIndexed { index, title ->
                Tab(
                    selected = selectedTab == index,
                    onClick = { selectedTab = index },
                    text = {
                        Text(
                            text = title,
                            fontWeight = if (selectedTab == index) FontWeight.Bold else FontWeight.Normal
                        )
                    }
                )
            }
        }

        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(24.dp),
            contentAlignment = Alignment.Center
        ) {
            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                Icon(
                    imageVector = Icons.Filled.Bookmark,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.primary.copy(alpha = 0.4f),
                    modifier = Modifier.size(64.dp)
                )
                Spacer(modifier = Modifier.height(12.dp))
                Text(
                    text = if (selectedTab == 0) "কোনো কুরআন আয়াত বুকমার্ক করা নেই" else "কোনো হাদিস বুকমার্ক করা নেই",
                    fontSize = 15.sp,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }
}`
  },
  {
    id: 'settings-screen-kt',
    name: 'SettingsScreen.kt',
    path: 'app/src/main/java/com/deenlibrary/app/ui/settings/SettingsScreen.kt',
    category: 'ui',
    language: 'kotlin',
    description: 'Settings screen for Appearance (Dark Mode), Quran font sizes, Notifications & Audio',
    content: `package com.deenlibrary.app.ui.settings

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SettingsScreen() {
    var isDarkMode by remember { mutableStateOf(false) }
    var showPronunciation by remember { mutableStateOf(true) }
    var showMeaning by remember { mutableStateOf(true) }
    var dailyNotification by remember { mutableStateOf(true) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background)
    ) {
        TopAppBar(
            title = {
                Text(
                    text = "সেটিংস (Settings)",
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
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            item {
                Text(
                    text = "থিম ও ডিসপ্লে (Appearance)",
                    fontWeight = FontWeight.Bold,
                    fontSize = 14.sp,
                    color = MaterialTheme.colorScheme.primary
                )
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(top = 8.dp),
                    shape = RoundedCornerShape(12.dp),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Column {
                                Text(text = "ডার্ক মোড (Dark Mode)", fontWeight = FontWeight.Medium)
                                Text(
                                    text = "চোখের সুরক্ষার জন্য ডার্ক থিম",
                                    fontSize = 12.sp,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant
                                )
                            }
                            Switch(
                                checked = isDarkMode,
                                onCheckedChange = { isDarkMode = it }
                            )
                        }
                    }
                }
            }

            item {
                Text(
                    text = "কুরআন রিডিং সেটিংস (Quran Settings)",
                    fontWeight = FontWeight.Bold,
                    fontSize = 14.sp,
                    color = MaterialTheme.colorScheme.primary
                )
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(top = 8.dp),
                    shape = RoundedCornerShape(12.dp),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
                ) {
                    Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(14.dp)) {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Text(text = "বাংলা উচ্চারণ দেখান", fontWeight = FontWeight.Medium)
                            Switch(
                                checked = showPronunciation,
                                onCheckedChange = { showPronunciation = it }
                            )
                        }
                        Divider()
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Text(text = "বাংলা অর্থ দেখান", fontWeight = FontWeight.Medium)
                            Switch(
                                checked = showMeaning,
                                onCheckedChange = { showMeaning = it }
                            )
                        }
                    }
                }
            }

            item {
                Text(
                    text = "নোটিফিকেশন (Notifications)",
                    fontWeight = FontWeight.Bold,
                    fontSize = 14.sp,
                    color = MaterialTheme.colorScheme.primary
                )
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(top = 8.dp),
                    shape = RoundedCornerShape(12.dp),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
                ) {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(16.dp),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Column {
                            Text(text = "দৈনিক আয়াত ও হাদিস নোটিফিকেশন", fontWeight = FontWeight.Medium)
                            Text(
                                text = "প্রতিদিন সকালে আয়াত ও হাদিস পাবেন",
                                fontSize = 12.sp,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                        Switch(
                            checked = dailyNotification,
                            onCheckedChange = { dailyNotification = it }
                        )
                    }
                }
            }
        }
    }
}`
  },
  {
    id: 'splash-screen-kt',
    name: 'SplashScreen.kt',
    path: 'app/src/main/java/com/deenlibrary/app/ui/splash/SplashScreen.kt',
    category: 'ui',
    language: 'kotlin',
    description: 'Splash screen with elegant Islamic green, gold badge, Arabic bismillah, and smooth delay',
    content: `package com.deenlibrary.app.ui.splash

import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Mosque
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.deenlibrary.app.ui.theme.EmeraldPrimaryLight
import com.deenlibrary.app.ui.theme.IslamicGoldAccent
import kotlinx.coroutines.delay

@Composable
fun SplashScreen(onSplashFinished: () -> Unit) {
    val scale = remember { Animatable(0f) }

    LaunchedEffect(key1 = true) {
        scale.animateTo(
            targetValue = 1f,
            animationSpec = tween(durationMillis = 800)
        )
        delay(1500)
        onSplashFinished()
    }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(EmeraldPrimaryLight),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier.scale(scale.value)
        ) {
            Icon(
                imageVector = Icons.Filled.Mosque,
                contentDescription = null,
                tint = IslamicGoldAccent,
                modifier = Modifier.size(80.dp)
            )

            Spacer(modifier = Modifier.height(16.dp))

            Text(
                text = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                fontSize = 22.sp,
                fontWeight = FontWeight.Bold,
                color = Color.White
            )

            Spacer(modifier = Modifier.height(12.dp))

            Text(
                text = "Deen Library",
                fontSize = 28.sp,
                fontWeight = FontWeight.ExtraBold,
                color = IslamicGoldAccent
            )

            Text(
                text = "Quran & Hadith",
                fontSize = 16.sp,
                fontWeight = FontWeight.Medium,
                color = Color.White.copy(alpha = 0.9f)
            )
        }
    }
}`
  },
  {
    id: 'main-activity-kt',
    name: 'MainActivity.kt',
    path: 'app/src/main/java/com/deenlibrary/app/MainActivity.kt',
    category: 'ui',
    language: 'kotlin',
    description: 'Main activity entry point of the Android application running Jetpack Compose DeenLibraryTheme and MainScreen',
    content: `package com.deenlibrary.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Surface
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import com.deenlibrary.app.ui.MainScreen
import com.deenlibrary.app.ui.splash.SplashScreen
import com.deenlibrary.app.ui.theme.DeenLibraryTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            DeenLibraryTheme {
                var showSplash by remember { mutableStateOf(true) }

                Surface(modifier = Modifier.fillMaxSize()) {
                    if (showSplash) {
                        SplashScreen(
                            onSplashFinished = {
                                showSplash = false
                            }
                        )
                    } else {
                        MainScreen()
                    }
                }
            }
        }
    }
}`
  },
  {
    id: 'strings-xml',
    name: 'strings.xml',
    path: 'app/src/main/res/values/strings.xml',
    category: 'res',
    language: 'xml',
    description: 'String resources defining application name and labels',
    content: `<resources>
    <string name="app_name">Deen Library</string>
    <string name="app_tagline">Quran &amp; Hadith</string>
</resources>`
  }
];
