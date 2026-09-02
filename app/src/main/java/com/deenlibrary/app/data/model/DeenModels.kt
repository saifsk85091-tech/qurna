package com.deenlibrary.app.data.model

data class Surah(
    val id: Int,
    val number: Int,
    val arabicName: String,
    val banglaName: String,
    val englishName: String,
    val meaning: String,
    val totalAyah: Int,
    val revelationType: String,
    val bismillahPre: Boolean = true
)

data class Ayah(
    val id: Int,
    val surahNumber: Int,
    val surahName: String,
    val ayahNumber: Int,
    val arabicText: String,
    val banglaPronunciation: String,
    val banglaTranslation: String,
    val englishTranslation: String = "",
    val audioUrl: String = ""
)

data class HadithBook(
    val id: Int,
    val nameBangla: String,
    val nameArabic: String,
    val nameEnglish: String,
    val totalHadith: Int,
    val author: String,
    val description: String,
    val colorHex: Long = 0xFF0D5C3A
)

data class Hadith(
    val id: Int,
    val bookId: Int,
    val bookName: String,
    val hadithNumber: Int,
    val chapterName: String,
    val arabicText: String,
    val banglaTranslation: String,
    val narrator: String,
    val grade: String = "সহীহ (Sahih)",
    val reference: String
)

data class BookmarkItem(
    val id: String,
    val title: String,
    val subtitle: String,
    val type: String, // "quran" or "hadith"
    val referenceId: Int,
    val subReferenceId: Int? = null,
    val timestamp: Long = System.currentTimeMillis()
)
