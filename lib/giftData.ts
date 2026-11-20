// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "Abduallah",                                     // اسم مستلم الهدية
  senderName: "your love",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#38bdf8",                             // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `I honestly don’t think words will ever be enough to describe how happy I am to have you in my life. Sometimes I find myself looking at you and thinking that you’re literally everything I never knew I was waiting for. You’re so much of what I’ve always wished for, and somehow, I get to experience all of that with you.

There are so many things I love about you, and I don’t think you realize how much I admire them. I love your ambition, the way you work hard for the things you want, your determination, and the way you never give up easily. I love your mind, your intelligence, your passion, and the way you carry yourself. But beyond all of that, I love your heart. Your kindness, your tenderness, the way you care, the little details you notice, and the way you make me feel loved without even trying.

I love how we get to share the most random parts of our days, from supermarket shopping to little adventures, late-night walks, silly conversations, and all the ordinary things that somehow become my favorite memories when they’re with you. I love that I get to share my life with you, even in its most uninteresting and chaotic moments.

I wish I could make you see yourself through my eyes, even for a moment, so you could understand how special you are to me and how much I appreciate having you around.

And more than anything, I hope we never lose this. I hope the little spark between us never fades, that we never stop being excited about each other, that we always find new reasons to fall in love, and that we never take the little things for granted. I hope life stays kind to us and gives us countless moments worth remembering.

I wish you a year full of everything you’ve been working for, every dream you’ve been chasing, and all the happiness your heart deserves. I hope I get to stand beside you, celebrate your victories, support you through the difficult days, and witness you becoming everything you’ve always wanted to be.

I’m so grateful that it’s you. And if there’s one thing I wish for today, it’s that this is only the beginning of many beautiful birthdays, memories, and chapters we’ll get to share together.

Happy birthday, my love. I love you, and I love us. ❤️`,
};

const giftData: Record<string, GiftData> = {
  ahmed: defaultGift,
  aya: defaultGift,
};

export default giftData;