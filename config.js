// Configuration des informations personnelles

const profileConfig = {
    // Informations de base


    name: "Mérite voyage",
    bio: "لأسفاركم ورحلاتكم الحل الأمثل",
    profileImage: "https://scontent.falg6-2.fna.fbcdn.net/v/t39.30808-6/448524710_122154300824211169_3777626010354869069_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hxWRVBoYIccQ7kNvwEn1_At&_nc_oc=Adm2QpcKwjzPOPxMBzMNCaahPe_zVNjHLoS9heGY8R9og1u9-uR0lkg2d0DeBAsuDo4&_nc_zt=23&_nc_ht=scontent.falg6-2.fna&_nc_gid=E9Jgj_ltgMEjbftRpXj5XA&oh=00_AfmdyvfS1-6HBvrEsweefDG4fqAnJhsjrRBMigTk19ij0Q&oe=69599D14",
    





    // Réseaux sociaux
    socialLinks: {
        facebook: "https://www.facebook.com/share/1H9doLYku1/",
        instagram: "https://www.instagram.com/merite_voyage?igsh=YWNjd3VpZm9wMXJ4",
        tiktok: "https://www.tiktok.com/@merite.voyage?_r=1&_t=ZS-92RKGF6y21Y",
        whatsapp: "+213550331341",
        telegram: "+213 562 33 14 08",
        linkedin: "daisyparkhouse",
        snapchat: "https://www.snapchat.com/@sheikh_tidiane?sender_web_id=792b2a4d-05d3-4e8f-a5e0-1aeb89eba722&device_type=desktop&is_copy_url=true",
        email: "meritevoyage@gmail.com",
        website: "https://www.youtube.com/",
        maps: "https://goo.gl/maps/qxugj9RE4qxnDRpu7?g_st=aw",
        phone: "+213550331341"
    },
    






    // Activation des icônes (mettre true pour afficher, false pour masquer)
    enabledIcons: {
        facebook: true,      // Afficher Facebook
        instagram: true,     // Afficher Instagram
        tiktok: true,        // Afficher TikTok
        whatsapp: true,      // Afficher WhatsApp
        telegram: false,      // Afficher Telegram
        linkedin: false,     // Afficher LinkedIn (mettre true pour l'activer)
        website: false,       // Afficher Site Web
        maps: true,          // Afficher Maps
        phone: true,         // Afficher Téléphone
        snapchat: false,      // Afficher Snapchat
        email: true,         // Afficher Email
    },
    
};



























// Ne pas modifier ci-dessous
if (typeof module !== 'undefined' && module.exports) {
    module.exports = profileConfig;
} else {
    window.profileConfig = profileConfig;
}

