const gameData = {
    "1": {
        "text": "Apa yang kamu bakal lakuin kalau pasangan nggak bales chat berjam?",
        "image": "smaller_images/snackies.png",
        "choices": {
            "Ngechat buat nanya dia lagi ngapain": [2, ["Broccoli"]],
            "Biarin aja, nanti juga bales": [2, ["Broccoli"]],
            'Ngechat "kamu marah yaa sama aku?"': [2, ["Broccoli"]],
            "Ngechat buat update hari kamu": [2, ["Broccoli"]],
            "Lupa kalau pernah ngechat": [2, ["Broccoli"]]
        }
    },
    "2": {
        "text": "Apa date yang paling ideal buat kamu?",
        "image": "smaller_images/snackies.png",
        "choices": {
            "Hangout di rumah, nonton, makan": [3, ["Cuek"]],
            "Jalan-jalan ke tempat baru": [3, ["Overthinking"]],
            "Makan malem romantis sambil deep talk": [3, ["Bucin"]],
            "Yang simpel aja. Ke mall, makan, dsb.": [3, ["Mandiri"]],
            "Apapun yang bikin pasangan bahagia": [3, ["Clingy"]]
        }
    },
    "3": {
        "text": "Apa yang kamu biasanya lakukan kalau berantem sama pasangan?",
        "image": "smaller_images/snackies.png",
        "choices": {
            "Kirim chat panjang lebar tentang perasaan aku": [4, ["Overthinking"]],
            "Biarin dulu, kasih dia waktu dan ruang": [4, ["Mandiri"]],
            "Ajak aktivitas seru biar ketegangan ilang": [4, ["Bucin"]],
            "Berusaha ajak ngomong pelan-pelan": [4, ["Cuek"]],
            "Langsung minta maaf, padahal bukan salah aku": [4, ["Clingy"]]
        }
    },
    "4": {
        "text": "Apa love language yang kamu paling suka?",
        "image": "smaller_images/snackies.png",
        "choices": {
            "Pakai kata-kata (Words of affirmation)": [5, ["Overthinking"]],
            "Menghabiskan waktu bareng (quality time)": [5, ["Bucin"]],
            "Pegangan tangan (physical thouch)": [5, ["Clingy"]],
            "Ngebantuin pasangan (act of service)": [5, ["Mandiri"]],
            "Dikasih kado sama pasangan (Receiving Gifts)": [5, ["Clingy"]]
        }
    },
    "5": {
        "text": "Cara favoritmu menunjukkan cinta?",
        "image": "smaller_images/snackies.png",
        "choices": {
            "Pujian-pujian dan kirim chat manis": [6, ["Bucin"]],
            "Selalu ada saat mereka butuh": [6, ["Cuek"]],
            "Rencanain jalan spontan bareng pasangan": [6, ["Clingy"]],
            "Bantu menyelesaikan masalah mereka": [6, ["Mandiri"]],
            'Selalu iseng nanya "kamu sayang aku ngga?"': [6, ["Overthinking"]]
        }
    },
    "6": {
        "text": 'Seberapa sering kamu bilang "I love you" dalam hubungan?',
        "image": "smaller_images/snackies.png",
        "choices": {
            "Setiap hari, setiap jam": [7, ["Clingy"]],
            "Waktu-waktu spesial aja (valentines day, ultah, dsb)": [7, ["Mandiri"]],
            "Kalau momennya pas": [7, ["Bucin"]],
            "Jarang, tapi aku nunjukkin dengan cara lain": [7, ["Cuek"]],
            "Kalau dia mulai menjauh": [7, ["Overthinking"]]
        }
    },
    "7": {
        "text": 'Kalau pasanganmu lupa ulang tahunmu, apa reaksimu?',
        "image": "smaller_images/snackies.png",
        "choices": {
            "Marah, nangis, mikir mereka ga peduli": [8, ["Overthinking"]],
            "Kesel diem-diem tapi nggak ngomong apa apa": [8, ["Clingy"]],
            "Ketawa aja, nggak masalah kok": [8, ["Cuek"]],
            "Langsung ghosting seminggu": [8, ["Mandiri"]],
            "Ngomel tapi langsung rayain sama pasangan": [8, ["Bucin"]]
        }
    },
    "8": {
        "text": 'Pasangan yang ideal menurutmu adalah pasangan yang...',
        "image": "smaller_images/snackies.png",
        "choices": {
            "Cocok dengan energiku suka eksplor ke tempat/pengalaman baru": [9, ["Bucin"]],
            "Yang ngasih perhatian penuh": [9, ["Clingy"]],
            "Yang menghormati kebebasan/ruang personal aku": [9, ["Mandiri"]],
            "Yang stabil dan bisa diandalkan": [9, ["Cuek"]],
            "Yang sering kasih afirmasi": [9, ["Overthinking"]]
        }
    },
    "9": {
        "text": 'Apa pandangan kamu tentang PDA? Atau bucin di tempat umum?',
        "image": "smaller_images/snackies.png",
        "choices": {
            "Suka banget!!! pegangan tangan, pelukan, semuanya": [10, ["Clingy"]],
            "Ya, sekali-sekali gapapa deh": [10, ["Cuek"]],
            "Tergantung suasana": [10, ["Overthinking"]],
            "Nggak suka sama sekali": [10, ["Mandiri"]],
            "Kalau dia suka, aku suka": [10, ["Bucin"]]
        }
    },
    "10": {
        "text": 'Apa prioritasmu dalam hubungan?',
        "image": "smaller_images/snackies.png",
        "choices": {
            "Yang bisa nyambung secara emosional, dan deep talk": [0, ["Bucin"]],
            "Yang bisa punya pengalaman seru dan petualangan bareng": [0, ["Overthinking"]],
            "Yang menghormati ruang personal aku": [0, ["Mandiri"]],
            "Yang konsisten, nyaman dan tenang": [0, ["Cuek"]],
            "Yang kasih sayang dan perhatian terus-menerus": [0, ["Clingy"]]
        }
    }
};

const personalities = {
    "Broccoli": 0,
    "Clingy": 0,
    "Mandiri": 0,
    "Overthinking": 0,
    "Bucin": 0,
    "Cuek": 0
};

let currentState = 1;

function renderState(state) {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');

    const img = new Image();
    img.src = gameData[state].image;

    img.onload = () => {
        storyImage.src = img.src;
        storyText.textContent = gameData[state].text;
        choicesContainer.innerHTML = '';

        for (const [choice, info] of Object.entries(gameData[state].choices)) {
            const button = document.createElement('button');
            button.textContent = choice;
            button.className = 'choice-button';
            let nextState = info[0];
            button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
            choicesContainer.appendChild(button);
        }
    };
}


function changeState(newState, selectedPersonalities) {
    // console.log(personalities); 
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedVegetable();
    } else {
        renderState(currentState);
    }
}
function revealMostSelectedVegetable() {
    let maxCount = 0;
    let maxVeggie = '';

    for (const [vegetable, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxVeggie = vegetable;
        }
    }

    const storyImage = document.getElementById('story-image');
    const text = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');
    const veggieImagePath = `smaller_images/id_cards/${maxVeggie}.png`;

    // Preload the image
    const img = new Image();
    img.src = veggieImagePath;
    img.className = 'responsive-image';

    // Create the share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share the game with Friends';
    shareButton.className = 'choice-button';

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';

        text.textContent = "Drumroll... here is your Veggie ID! Don't lose it! (Right click or hold the image to save)";
        text.appendChild(img);

        // Share button functionality
        shareButton.onclick = () => {
            const shareMessage = `Check out my Veggie ID! You can create yours at https://sophie006liu.github.io/vegetal/`;
            navigator.clipboard.writeText(shareMessage).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                alert('Failed to copy link. Please try again.');
            });
        };

        text.appendChild(shareButton);
    };
}


function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}
