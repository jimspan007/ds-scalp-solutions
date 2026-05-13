export type Locale = "el" | "en";

export const LOCALES: Locale[] = ["el", "en"];
export const DEFAULT_LOCALE: Locale = "el";

type Dict = Record<string, any>;

export const translations: Record<Locale, Dict> = {
  el: {
    nav: {
      home: "Αρχική",
      about: "Σχετικά",
      services: "Υπηρεσίες",
      gallery: "Πριν & Μετά",
      faq: "Συχνές Ερωτήσεις",
      contact: "Επικοινωνία",
      bookCta: "Κλείσε Ραντεβού",
      menu: "Μενού",
      languageLabel: "Γλώσσα",
    },
    meta: {
      home: {
        title: "DS Scalp Micropigmentation - Premium SMP για άνδρες",
        description:
          "Επανάφερε τη γραμμή των μαλλιών σου με ρεαλιστικό, μη ανιχνεύσιμο scalp micropigmentation. Πιστοποιημένος ειδικός. Κλείσε την ιδιωτική συνεδρία γνωριμίας σου σήμερα.",
      },
      about: {
        title: "Σχετικά - DS Scalp Micropigmentation",
        description:
          "Γνώρισε τον πιστοποιημένο ειδικό πίσω από το DS Scalp Micropigmentation. Πολυετής εμπειρία και προσέγγιση με γνώμονα την τέχνη.",
      },
      services: {
        title: "Υπηρεσίες - Θεραπείες Scalp Micropigmentation | DS",
        description:
          "Αποκατάσταση γραμμής, θεραπείες πυκνότητας, κάλυψη ουλών. Ανακάλυψε ποια υπηρεσία SMP είναι ιδανική για σένα.",
      },
      gallery: {
        title: "Πριν & Μετά - DS Scalp Micropigmentation",
        description:
          "Πραγματικά, χωρίς επεξεργασία αποτελέσματα πριν και μετά από πελάτες μας scalp micropigmentation.",
      },
      faq: {
        title: "Συχνές Ερωτήσεις - Scalp Micropigmentation | DS",
        description:
          "Πόνος, διάρκεια, ανάρρωση, συντήρηση - κάθε ερώτηση που κάνουν οι άνδρες πριν κλείσουν SMP, απαντημένη ειλικρινά.",
      },
      contact: {
        title: "Κλείσε Συνεδρία - DS Scalp Micropigmentation",
        description:
          "Κλείσε δωρεάν, ιδιωτική συνεδρία γνωριμίας SMP. Επικοινώνησε με φόρμα, WhatsApp ή επισκέψου το studio μας.",
      },
    },
    home: {
      hero: {
        eyebrow: "Scalp Micropigmentation",
        title: "Η ιδανική λύση για αραίωση με φυσικό αποτέλεσμα",
        intro:
          "Το SMP ή αλλιώς παραϊατρική δερματοστιξία κεφαλής είναι μια εξειδικευμένη, μη επεμβατική τεχνική που δημιουργεί την όψη φυσικών θυλάκων τρίχας.",
        ctaPrimary: "Δωρεάν Συνεδρία Γνωριμίας",
        ctaSecondary: "Δες Αποτελέσματα",
        imgAlt: "Άνδρας με ολοκληρωμένο αποτέλεσμα scalp micropigmentation",
      },
      promise: {
        eyebrow: "Η υπόσχεσή μας",
        title: "Φυσικό και άμεσο αποτέλεσμα",
        titleAccent: "σε 3 συνεδρίες",
        body:
          "Κάθε εφαρμογή προσαρμόζεται στις δικές σας ανάγκες, με προσοχή στη λεπτομέρεια που αναδεικνύει την εικόνα σας χωρίς υπερβολές. Δίνουμε έμφαση στην υγιεινή, την ασφάλεια και την ποιότητα, ώστε να νιώθετε σιγουριά σε κάθε στάδιο της διαδικασίας. Στόχος μας είναι μια διακριτική αλλά ουσιαστική αλλαγή που ενισχύει την αυτοπεποίθησή σας.",
        cards: [
          {
            title: "Μη ανιχνεύσιμο",
            body:
              "Pigments προσαρμοσμένα στον τόνο του δέρματός σου και στο φυσικό μοτίβο των τριχοθυλακίων. Ακόμα και από κοντά, κανείς δεν το καταλαβαίνει.",
          },
          {
            title: "Ανώδυνο πρωτόκολλο",
            body:
              "Εξειδικευμένη και επιμελημένη τεχνική κάνουν τους περισσότερους πελάτες να περιγράφουν την αίσθηση ως ένα ελαφρύ τσίμπημα.",
          },
          {
            title: "Διάρκεια",
            body:
              "Μόνιμα αποτελέσματα με ελαφριά συντήρηση μετά από 4–5 χρόνια. Πάντα στον δικό σου έλεγχο.",
          },
        ],
      },
      process: {
        eyebrow: "Η διαδικασία",
        steps: [
          {
            t: "Συνεδρία γνωριμίας",
            b: "Δωρεάν, ιδιωτική και χωρίς πίεση. Αξιολογούμε την περίπτωσή σου, ακούμε τις ανάγκες σου και καθορίζουμε μαζί τη γραμμή που θα ακολουθήσουμε.",
          },
          {
            t: "Συνεδρία 01",
            b: "Σχεδιασμός hairline (αν χρειάζεται), επιλογή κατάλληλου Pigment και διαμέτρου βελόνας. Τοποθετούμε τη βασική στρώση των microdots, χτίζοντας την πρώτη βάση.",
          },
          {
            t: "Συνεδρία 02",
            b: "Στη δεύτερη συνεδρία αξιολογούμε την απορρόφηση του χρώματος και την εξέλιξη της πρώτης εφαρμογής και συνεχίζουμε με περαιτέρω ενίσχυση της πυκνότητας για ένα πιο ομοιόμορφο και φυσικό αποτέλεσμα.",
          },
          {
            t: "Συνεδρία 03",
            b: "Στην τελευταία συνεδρία ολοκληρώνουμε το αποτέλεσμα, πραγματοποιώντας τυχόν διορθώσεις και blending όπου χρειάζεται. Στόχος μας είναι η απόλυτη ομοιομορφία και φυσικότητα, ώστε να τελειοποιηθεί πλήρως το τελικό αποτέλεσμα.",
          },
        ],
      },
      testimonials: {
        eyebrow: "Λόγια των πελατών μας",
        items: [
          {
            q: "Αρχικά ήμουν διστακτικός για την εμπειρία του SMP. Μόλις όμως ο Δημήτρης μου εξήγησε το πόσο εύκολη είναι η διαδικασία, επιβεβαιώνοντας το πόσο αποδίδει στην αραίωση, έμεινα θετικά έκπληκτος. Το συστήνω ανεπιφύλακτα για όσους θέλουν γρήγορα, φυσικά, και αρκετά προσιτά σε τιμή αποτελέσματα!",
            n: "Πάνος Τ.",
            d: "Προγραμματιστής · 33",
          },
          {
            q: "Έμεινα ενθουσιασμένος με το αποτέλεσμα και το πόσο φυσικό δείχνει. Υπέροχος άνθρωπος και επαγγελματίας!",
            n: "Βασίλης Σ.",
            d: "Αρχιτέκτονας · 46",
          },
          {
            q: "Φοβερό αποτέλεσμα μετά από μερικές μόνο συνεδρίες! Ο Δημήτρης μου εξήγησε την διαδικασία βήμα βήμα και μου έλυσε όλες τις απορίες. Η όλη διαδικασία ήταν πανεύκολη, τον συνιστώ ανεπιφύλακτα.",
            n: "Σωτήρης Ρ.",
            d: "Φυσιοθεραπευτής · 29",
          },
        ],
      },
      finalCta: {
        eyebrow: "Κάνε το πρώτο βήμα",
        title: "Μια κουβέντα 30 λεπτών μπορεί να αλλάξει τα επόμενα",
        titleAccent: "30 χρόνια",
        body:
          "Δωρεάν, εμπιστευτική, χωρίς δέσμευση. Θα συζητήσουμε τους στόχους σου και θα σου προτείνουμε τι είναι εφικτό και καλύτερο για σένα.",
        ctaPrimary: "Κλείσε τη Συνεδρία σου",
        ctaSecondary: "Στείλε μήνυμα στο WhatsApp",
      },
    },
    about: {
      hero: {
        eyebrow: "Ο ειδικός",
        title: "Μια τέχνη χτισμένη γύρω από ένα πράγμα - την αυτοπεποίθησή σου.",
        intro:
          "Το DS Scalp Micropigmentation καθοδηγείται από τον Σπανούδη Δημήτρη, πιστοποιημένο SMP artist με πολυετή εμπειρία στο χώρο του Scalp Micropigmentation.",
      },
      eyebrow: "Δημήτρης Σπανούδης · Ιδρυτής",
      title: "Γιατί ξεκίνησα το DS SMP.",
      paragraphs: [
        "Είμαι βιοϊατρικός επιστήμονας, με ενεργή παρουσία στον παραϊατρικό τομέα. Η επαγγελματική μου πορεία με έχει φέρει κοντά στην επιστήμη της υγείας και της ανθρώπινης φροντίδας, δίνοντάς μου μια βαθύτερη κατανόηση της ακρίβειας, της ασφάλειας και της σημασίας της λεπτομέρειας. Παράλληλα, η προσωπική μου εμπειρία με την τριχόπτωση - ως άτομο που έχει βιώσει την απώλεια μαλλιών - με έκανε να κατανοήσω σε βάθος όχι μόνο το ιατρικό, αλλά και το ψυχολογικό κομμάτι αυτού του ζητήματος.",
        "Το DS Scalp Micropigmentation δημιουργήθηκε από αυτή ακριβώς την ανάγκη: να προσφέρω μια σύγχρονη, ασφαλή και φυσική λύση για όσους αντιμετωπίζουν αραίωση ή απώλεια μαλλιών. Στόχος μου είναι να συνδυάσω την επιστημονική μου κατάρτιση με την προσωπική εμπειρία, ώστε να προσφέρω 100% φυσικά αποτελέσματα, με διάρκεια και αντοχή στον χρόνο, προσαρμοσμένα απόλυτα στις ανάγκες και τα χαρακτηριστικά του κάθε ανθρώπου.",
      ],
      credentials: [
        "Εκπαίδευση στην Scalp Academy Greece",
        "Πιστοποιημένος Master SMP Artist",
        "Πλήρως ασφαλισμένος · Αδειοδοτημένος",
      ],
      cta: "Κλείσε Συνεδρία",
      imgAlt: "Δημήτρης Σπανούδης, ιδρυτής του DS Scalp Micropigmentation",
    },
    services: {
      hero: {
        eyebrow: "Υπηρεσίες",
        title: "",
        intro:
          "Το Scalp micropigmentation είναι μια εξειδικευμένη, μη επεμβατική τεχνική που δημιουργεί την όψη φυσικών θυλάκων τρίχας. Δες παρακάτω τις υπηρεσίες μας.",
      },
      items: [
        {
          title: "Πλήρες Buzzcut Effect",
          body:
            "Το χαρακτηριστικό look-μια απόλυτα καθαρή, κοντοκουρεμένη-ξυρισμένη εμφάνιση για άτομα με ολική απώλεια μαλλιών.",
          bullets: ["Ολική μεταμόρφωση", "Ομοιόμορφη κάλυψη σε όλη την περιοχή", "Φυσικό Hairline", "3 συνεδρίες"],
        },
        {
          title: "Density - Πύκνωση",
          body: "Αύξηση πυκνότητας σε αραιωμένες περιοχές της κεφαλής, χωρίς να επηρεάζει τα υπάρχοντα μαλλιά.",
          bullets: ["Συνδυάζεται με τα υπάρχοντα μαλλιά", "Εξαλείφει την αραίωση", "2–3 συνεδρίες"],
        },
        {
          title: "Κάλυψη Ουλών",
          body:
            "Καλύπτουμε ουλές από μεταμόσχευση FUT/FUE, ατυχήματα και περιοχές αλωπεκίας με ακριβές pigmentation.",
          bullets: [
            "Κάλυψη strip scar",
            "Κάλυψη ουλών από FUE",
            "Ουλές από δερματικές παθήσεις",
            "Ουλές από ιατρικές αιτίες",
            "2–3 συνεδρίες",
          ],
        },
      ],
      faqSection: {
        eyebrow: "Απαντάμε στους φόβους",
        title: "Αλήθειες, απορίες και απαντήσεις για όλους.",
        items: [
          { q: "Πονάει;", a: "Όχι, η αίσθηση είναι αρκετά ήπια. Οι περισσότεροι το περιγράφουν ως ελαφρύ τσίμπημα." },
          {
            q: "Θα δείχνει ψεύτικο;",
            a: "Όχι. Όταν η εφαρμογή γίνεται σωστά, το αποτέλεσμα είναι απόλυτα φυσικό και διακριτικό. Τηρούμε αυστηρά όλα τα πρωτόκολλα, χρησιμοποιούμε κορυφαίας ποιότητας pigments και εφαρμόζουμε με ακρίβεια την τεχνική, ώστε να εξασφαλίσουμε το καλύτερο δυνατό αποτέλεσμα.",
          },
          {
            q: "Είναι πραγματικά μόνιμο;",
            a: "Τα pigments κρατούν 4–6 χρόνια, ενώ με μία συνεδρία μπορούμε να επαναφέρουμε το αρχικό αποτέλεσμα όποτε χρειαστεί.",
          },
        ],
        cta: "Συζήτησε τη Θεραπεία σου",
      },
      processImgAlt: "Macro λήψη βελόνας SMP στο κεφάλι",
    },
    gallery: {
      hero: {
        eyebrow: "Πριν & Μετά",
        title: "Πραγματικά αποτελέσματα. Χωρίς φίλτρα.",
        intro:
          "Κάθε φωτογραφία πάρθηκε στο studio μας υπό κανονικό φωτισμό - χωρίς επεξεργασία, χωρίς ρετουσάρισμα. Η δουλειά μιλά από μόνη της.",
      },
      items: [
        { treatment: "Buzzcut Effect - Πύκνωση" },
        { treatment: "Πυκνότητα - Density" },
        { treatment: "Πυκνότητα - Density" },
        { treatment: "Buzzcut Effect" },
      ],
      ctaEyebrow: "ΕΙΝΑΙ Η ΣΕΙΡΑ ΣΟΥ",
      ctaTitle: "Φαντάσου το δικό σου",
      ctaTitleAccent: "πριν & μετά",
      ctaButton: "Κλείσε Συνεδρία",
    },
    faq: {
      hero: {
        eyebrow: "Ερωτήσεις",
        title: "Απαντάμε σε όλες σου τις ερωτήσεις.",
        intro:
          "Τα έχουμε ακούσει όλα. Παρακάτω είναι απαντημένες οι πιο συχνές ερωτήσεις και απορίες των πελατών.",
      },
      sections: [
        {
          title: "Ερωτήσεις",
          items: [
            { q: "Πονάει το scalp micropigmentation;", a: "Όχι, η αίσθηση είναι αρκετά ήπια. Οι περισσότεροι το περιγράφουν ως ελαφρύ τσίμπημα." },
            { q: "Πόσο διαρκεί κάθε συνεδρία;", a: "Οι συνεδρίες διαρκούν συνήθως 2-4 ώρες, εξαρτάται από τον τύπο δέρματος και από την έκταση της περιοχής που πρέπει να καλυφθεί." },
            { q: "Πόσες συνεδρίες θα χρειαστώ;", a: "2-3 συνεδρίες, ανάλογα με το κάθε περιστατικό." },
          ],
        },
        {
          title: "",
          items: [
            { q: "Είναι μόνο για άντρες;", a: "Όχι, το SMP εφαρμόζεται πολύ συχνά και στις γυναίκες, οι οποίες έχουν αραίωση λόγω γυναικείας αλωπεκίας, είτε λόγω στρες ή ορμονών." },
            { q: "Πόσο διαρκεί το SMP;", a: "Το SMP διαρκεί 5-6 χρόνια, ενώ με ένα απλό refresh μπορούμε να επαναφέρουμε το αποτέλεσμα όποτε χρειαστεί." },
            { q: "Είναι ίδιο με το τατουάζ;", a: "Παρότι μοιάζει εξωτερικά στη διαδικασία δεν είναι τατουάζ. Είναι μια εξειδικευμένη μέθοδος στην οποία χρησιμοποιείται ειδική τεχνική και διαφορετικές χρωστικές." },
          ],
        },
        {
          title: "",
          items: [
            { q: "Πώς είναι η ανάρρωση;", a: "Ελάχιστη. Το κεφάλι σου μπορεί να είναι ελαφρώς κόκκινο για 24–48 ώρες. Πρέπει να μείνει στεγνό για 4 ημέρες και να αποφύγεις έντονη εφίδρωση, ήλιο και πισίνες για 7 ημέρες. Αυτό είναι όλο." },
            { q: "Υπάρχει περίπτωση να αλλάξει το χρώμα;", a: "Όταν χρησιμοποιούνται οι σωστές χρωστικές και εφαρμόζεται σωστά η τεχνική, το αποτέλεσμα παραμένει σε φυσικούς τόνους και δεν αλλάζει το χρώμα." },
            { q: "Μπορεί να συνδυαστεί με μεταμόσχευση;", a: "Φυσικά και μπορεί, ειδικά όταν υπάρχει ακόμα έλλειψη πυκνότητας μετά τη μεταμόσχευση, αλλά και για να καλυφθούν πιθανές ουλές που μπορούν να προκύψουν στη δότρια περιοχή." },
          ],
        },
      ],
      ctaTitle: "Έχεις ακόμα ερώτηση; Ρώτα μας απευθείας.",
      ctaButton: "Επικοινώνησε",
    },
    contact: {
      hero: {
        eyebrow: "Επικοινωνία",
        title: "Κλείσε δωρεάν αξιολόγηση.",
        intro:
          "Παρέχουμε δωρεάν, χωρίς καμία δέσμευση αξιολόγηση, είτε δια ζώσης είτε τηλεφωνικά, προσαρμοσμένη στις ανάγκες και τη διαθεσιμότητά σας.",
      },
      success: {
        title: "Το μήνυμά σου ελήφθη",
        body: "Σ' ευχαριστούμε. Θα επικοινωνήσουμε μαζί σου εντός μιας εργάσιμης ημέρας.",
      },
      form: {
        name: "Όνομα",
        email: "Email",
        phone: "Τηλέφωνο",
        message: "Πες μας για τους στόχους σου",
        messagePlaceholder: "Λίγες γραμμές για το τι θέλεις να πετύχεις...",
        submit: "Αποστολή Μηνύματος",
        submitting: "Αποστολή...",
        errors: {
          name: "Συμπλήρωσε το όνομά σου",
          email: "Δώσε ένα έγκυρο email",
          message: "Πες μας λίγα λόγια για τους στόχους σου",
          submitFailed:
            "Η αποστολή απέτυχε. Δοκίμασε ξανά ή στείλε μας email στο info@dssmp.gr.",
          notConfigured:
            "Η φόρμα δεν είναι διαθέσιμη αυτή τη στιγμή. Στείλε μας email στο info@dssmp.gr.",
        },
      },
      whatsapp: {
        title: "Στείλε μας στο WhatsApp",
        sub: "Ταχύτερη απάντηση · εντός 30 λεπτών στις ώρες λειτουργίας",
      },
      info: {
        studio: "Studio",
        studioCity: "Θεσσαλονίκη",
        studioCountry: "Ελλάδα",
        phone: "Τηλέφωνο",
        email: "Email",
        hours: "Ώρες",
        hoursValue: "Δε – Σα · 09:00 – 20:00",
        hoursNote: "Μόνο με ραντεβού",
      },
      mapEyebrow: "Βρες μας",
      mapTitle: "Τοποθεσία studio DS Scalp Micropigmentation",
    },
    footer: {
      tagline: "Επανακτώντας την αυτοπεποίθηση",
      about:
        "Premium scalp micropigmentation από πιστοποιημένο ειδικό. Ρεαλιστικά και φυσικά αποτελέσματα, σχεδιασμένα για άνδρες και γυναίκες.",
      navTitle: "Πλοήγηση",
      studioTitle: "Studio",
      city: "Θεσσαλονίκη, Ελλάδα",
      copyright: "Με την επιφύλαξη παντός δικαιώματος.",
      certified: "Πιστοποιημένος · Αδειοδοτημένος · Πλήρως Ασφαλισμένος",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      gallery: "Before & After",
      faq: "FAQ",
      contact: "Contact",
      bookCta: "Book Appointment",
      menu: "Menu",
      languageLabel: "Language",
    },
    meta: {
      home: {
        title: "DS Scalp Micropigmentation - Premium SMP for Men",
        description:
          "Restore your hairline with realistic, undetectable scalp micropigmentation. Certified specialist. Book your private consultation today.",
      },
      about: {
        title: "About - DS Scalp Micropigmentation",
        description:
          "Meet the certified specialist behind DS Scalp Micropigmentation. Years of experience and an artistic approach to every treatment.",
      },
      services: {
        title: "Services - Scalp Micropigmentation Treatments | DS",
        description:
          "Hairline restoration, density treatments, scar coverage. Discover which SMP service is right for you.",
      },
      gallery: {
        title: "Before & After - DS Scalp Micropigmentation",
        description:
          "Real, unedited before-and-after results from our scalp micropigmentation clients.",
      },
      faq: {
        title: "FAQ - Scalp Micropigmentation | DS",
        description:
          "Pain, longevity, recovery, maintenance — every question men ask before booking SMP, answered honestly.",
      },
      contact: {
        title: "Book a Consultation - DS Scalp Micropigmentation",
        description:
          "Book a free, private SMP consultation. Reach us by form, WhatsApp, or visit our studio.",
      },
    },
    home: {
      hero: {
        eyebrow: "Scalp Micropigmentation",
        title: "The ideal solution for hair thinning, with a natural result",
        intro:
          "SMP, also known as paramedical scalp pigmentation, is a specialized, non-invasive technique that recreates the appearance of natural hair follicles.",
        ctaPrimary: "Free Consultation",
        ctaSecondary: "View Results",
        imgAlt: "Man with completed scalp micropigmentation result",
      },
      promise: {
        eyebrow: "Our promise",
        title: "A natural, immediate result",
        titleAccent: "in 3 sessions",
        body:
          "Every treatment is tailored to your needs, with attention to detail that elevates your look without overdoing it. We prioritize hygiene, safety, and quality so you feel confident at every stage. Our goal is a subtle yet meaningful change that boosts your self-confidence.",
        cards: [
          {
            title: "Undetectable",
            body:
              "Pigments matched to your skin tone and the natural pattern of your follicles. Even up close, no one can tell.",
          },
          {
            title: "Pain-free protocol",
            body:
              "A specialized, refined technique means most clients describe the sensation as nothing more than a light pinch.",
          },
          {
            title: "Long-lasting",
            body:
              "Permanent results with a light touch-up after 4–5 years. Always on your terms.",
          },
        ],
      },
      process: {
        eyebrow: "The process",
        steps: [
          {
            t: "Consultation",
            b: "Free, private, and pressure-free. We assess your case, listen to your needs, and define together the direction we'll take.",
          },
          {
            t: "Session 01",
            b: "Hairline design (if needed), selection of the right pigment and needle diameter. We place the base layer of microdots, building the foundation.",
          },
          {
            t: "Session 02",
            b: "We evaluate pigment retention and the evolution of the first session, then continue building density for a more uniform, natural result.",
          },
          {
            t: "Session 03",
            b: "In the final session we complete the result, performing any corrections and blending where needed. The goal is full uniformity and a perfectly natural finish.",
          },
        ],
      },
      testimonials: {
        eyebrow: "What our clients say",
        items: [
          {
            q: "I was hesitant about SMP at first. But once Dimitris explained how easy the process is, and how much it does for thinning hair, I was pleasantly surprised. I highly recommend him for anyone who wants fast, natural and reasonably priced results!",
            n: "Panos T.",
            d: "Developer · 33",
          },
          {
            q: "I'm thrilled with the result and how natural it looks. A wonderful person and a true professional!",
            n: "Vassilis S.",
            d: "Architect · 46",
          },
          {
            q: "Incredible result after just a few sessions! Dimitris walked me through the process step by step and answered every question. The whole experience was effortless — I wholeheartedly recommend him.",
            n: "Sotiris R.",
            d: "Physiotherapist · 29",
          },
        ],
      },
      finalCta: {
        eyebrow: "Take the first step",
        title: "A 30-minute conversation can change the next",
        titleAccent: "30 years",
        body:
          "Free, confidential, no commitment. We'll discuss your goals and recommend what's possible and best for you.",
        ctaPrimary: "Book Your Consultation",
        ctaSecondary: "Message us on WhatsApp",
      },
    },
    about: {
      hero: {
        eyebrow: "The specialist",
        title: "An art built around one thing — your self-confidence.",
        intro:
          "DS Scalp Micropigmentation is led by Dimitris Spanoudis, a certified SMP artist with years of experience in scalp micropigmentation.",
      },
      eyebrow: "Dimitris Spanoudis · Founder",
      title: "Why I started DS SMP.",
      paragraphs: [
        "I'm a biomedical scientist with active experience in the paramedical field. My career has brought me close to health science and patient care, giving me a deeper understanding of precision, safety, and the importance of detail. At the same time, my own experience with hair loss — as someone who has lived it — gave me a deep understanding of the medical and the psychological side of this issue.",
        "DS Scalp Micropigmentation was born exactly out of that need: to offer a modern, safe, and natural solution for those facing thinning or hair loss. My goal is to combine my scientific background with my personal experience to deliver 100% natural results — durable, time-resistant, and tailored to each person's needs and characteristics.",
      ],
      credentials: [
        "Trained at Scalp Academy Greece",
        "Certified Master SMP Artist",
        "Fully insured · Licensed",
      ],
      cta: "Book a Consultation",
      imgAlt: "Dimitris Spanoudis, founder of DS Scalp Micropigmentation",
    },
    services: {
      hero: {
        eyebrow: "Services",
        title: "",
        intro:
          "Scalp micropigmentation is a specialized, non-invasive technique that creates the appearance of natural hair follicles. Explore our services below.",
      },
      items: [
        {
          title: "Full Buzzcut Effect",
          body:
            "The signature look — a perfectly clean, close-shaved appearance for those with complete hair loss.",
          bullets: ["Full transformation", "Even coverage across the entire area", "Natural hairline", "3 sessions"],
        },
        {
          title: "Density",
          body: "Increased density across thinning areas of the scalp, without affecting your existing hair.",
          bullets: ["Blends with your existing hair", "Eliminates the look of thinning", "2–3 sessions"],
        },
        {
          title: "Scar Coverage",
          body:
            "We cover scars from FUT/FUE transplants, accidents, and alopecia areas with precise pigmentation.",
          bullets: [
            "Strip scar coverage",
            "FUE scar coverage",
            "Scars from skin conditions",
            "Scars from medical procedures",
            "2–3 sessions",
          ],
        },
      ],
      faqSection: {
        eyebrow: "Addressing your concerns",
        title: "Honest answers to the questions everyone has.",
        items: [
          { q: "Does it hurt?", a: "No — the sensation is quite mild. Most clients describe it as a light pinch." },
          {
            q: "Will it look fake?",
            a: "No. When applied correctly, the result is completely natural and discreet. We follow strict protocols, use top-quality pigments, and apply the technique with precision to ensure the best possible result.",
          },
          {
            q: "Is it really permanent?",
            a: "Pigments last 4–6 years; a single touch-up session restores the original result whenever needed.",
          },
        ],
        cta: "Discuss Your Treatment",
      },
      processImgAlt: "Macro shot of an SMP needle on the scalp",
    },
    gallery: {
      hero: {
        eyebrow: "Before & After",
        title: "Real results. No filters.",
        intro:
          "Every photo was taken in our studio under normal lighting — no editing, no retouching. The work speaks for itself.",
      },
      items: [
        { treatment: "Buzzcut Effect - Density" },
        { treatment: "Density" },
        { treatment: "Density" },
        { treatment: "Buzzcut Effect" },
      ],
      ctaEyebrow: "IT'S YOUR TURN",
      ctaTitle: "Imagine your own",
      ctaTitleAccent: "before & after",
      ctaButton: "Book a Consultation",
    },
    faq: {
      hero: {
        eyebrow: "Questions",
        title: "We answer all your questions.",
        intro:
          "We've heard them all. Below are honest answers to the most common questions our clients ask.",
      },
      sections: [
        {
          title: "Questions",
          items: [
            { q: "Does scalp micropigmentation hurt?", a: "No — the sensation is quite mild. Most clients describe it as a light pinch." },
            { q: "How long does each session take?", a: "Sessions usually last 2–4 hours, depending on skin type and the size of the area to be covered." },
            { q: "How many sessions will I need?", a: "2–3 sessions, depending on each individual case." },
          ],
        },
        {
          title: "",
          items: [
            { q: "Is it only for men?", a: "No — SMP is also frequently applied to women experiencing thinning due to female pattern alopecia, stress, or hormones." },
            { q: "How long does SMP last?", a: "SMP lasts 5–6 years, and a simple refresh restores the result whenever needed." },
            { q: "Is it the same as a tattoo?", a: "Although it looks similar in process, it's not a tattoo. It's a specialized method that uses a different technique and different pigments." },
          ],
        },
        {
          title: "",
          items: [
            { q: "What is recovery like?", a: "Minimal. Your scalp may be slightly red for 24–48 hours. Keep it dry for 4 days and avoid heavy sweating, sun, and pools for 7 days. That's it." },
            { q: "Could the color change?", a: "When the right pigments are used and the technique is applied correctly, the result stays in natural tones and the color does not change." },
            { q: "Can it be combined with a hair transplant?", a: "Absolutely — especially when there's still a lack of density after the transplant, or to cover possible scarring in the donor area." },
          ],
        },
      ],
      ctaTitle: "Still have a question? Ask us directly.",
      ctaButton: "Get in Touch",
    },
    contact: {
      hero: {
        eyebrow: "Contact",
        title: "Book a free assessment.",
        intro:
          "We offer a free, no-obligation assessment, either in person or by phone, tailored to your needs and availability.",
      },
      success: {
        title: "Your message has been received",
        body: "Thank you. We'll get back to you within one business day.",
      },
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Tell us about your goals",
        messagePlaceholder: "A few lines about what you'd like to achieve...",
        submit: "Send Message",
        submitting: "Sending...",
        errors: {
          name: "Please enter your name",
          email: "Enter a valid email address",
          message: "Tell us a bit about your goals",
          submitFailed:
            "Sending failed. Please try again or email us at info@dssmp.gr.",
          notConfigured:
            "The form is currently unavailable. Please email us at info@dssmp.gr.",
        },
      },
      whatsapp: {
        title: "Message us on WhatsApp",
        sub: "Fastest reply · within 30 minutes during business hours",
      },
      info: {
        studio: "Studio",
        studioCity: "Thessaloniki",
        studioCountry: "Greece",
        phone: "Phone",
        email: "Email",
        hours: "Hours",
        hoursValue: "Mon – Sat · 09:00 – 20:00",
        hoursNote: "By appointment only",
      },
      mapEyebrow: "Find us",
      mapTitle: "DS Scalp Micropigmentation studio location",
    },
    footer: {
      tagline: "Restoring confidence",
      about:
        "Premium scalp micropigmentation from a certified specialist. Realistic, natural results, designed for men and women.",
      navTitle: "Navigation",
      studioTitle: "Studio",
      city: "Thessaloniki, Greece",
      copyright: "All rights reserved.",
      certified: "Certified · Licensed · Fully Insured",
    },
  },
};

export function getByPath(obj: any, path: string): any {
  return path.split(".").reduce((acc, k) => (acc == null ? acc : acc[k]), obj);
}