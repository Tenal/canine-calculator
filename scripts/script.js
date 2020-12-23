// APP NAMESPACE OBJECT
const dogApp = {};

// APPENDED IMAGE & BREED INFORMATION OBJECT
dogApp.dogSize = {
    small: [
        {
            activityLevel: 'high',
            attentionLevel: 'low',
            trainingLevel: 'high',
            image: './assets/parson-russell-terrier.jpg',
            alt: 'A parson russell terrier with its mouth open.',
            breed: 'Parson Russell Terrier',
            temperament: ['Independent', 'Athletic', 'Clever'],
            lifeExpectancy: '13-15 years',
            group: 'Terrier Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/russell-terrier/">Jack Russell Terrier</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/smooth-fox-terrier/">Smooth Fox Terrier</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/parson-russell-terrier/">Parson Russell Terrier</a>'
        },
        {
            activityLevel: 'high',
            attentionLevel: 'low',
            trainingLevel: 'low',
            image: './assets/miniature-pinscher.jpg',
            alt: 'A miniature pinscher tilting its head.',
            breed: 'Miniature Pinscher',
            temperament: ['Fearless', 'Energetic', 'Friendly'],
            lifeExpectancy: '12-16 years',
            group: 'Toy Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/manchester-terrier-toy/">Manchester Terrier</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/rat-terrier/">Rat Terrier</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/miniature-pinscher/">Miniature Pinscher</a>'
        },
        {
            activityLevel: 'high',
            attentionLevel: 'high',
            trainingLevel: 'low',
            image: './assets/corgi.jpg',
            alt: 'A pembrooke welsh corgi sitting down.',
            breed: 'Pembrooke Welsh Corgi',
            temperament: ['Affectionate', 'Playful', 'Alert'],
            lifeExpectancy: '12-13 years',
            group: 'Herding Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/shih-tzu/">Shih Tzu</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/pomeranian/">Pomeranian</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/pembroke-welsh-corgi/">Pembrooke Welsh Corgi</a>'
        },
        {
            activityLevel: 'high',
            attentionLevel: 'high',
            trainingLevel: 'high',
            image: './assets/border-terrier.jpg',
            alt: 'A border terrier sitting down.',
            breed: 'Border Terrier',
            temperament: ['Intelligent', 'Obedient', 'Affectionate'],
            lifeExpectancy: '12-15 years',
            group: 'Terrier Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/australian-terrier/">Australian Terrier</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/cairn-terrier/">Cairn Terrier</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/border-terrier/">Border Terrier</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'high',
            trainingLevel: 'low',
            image: './assets/pug.jpg',
            alt: 'A pug sitting down.',
            breed: 'Pug',
            temperament: ['Loving', 'Mischievous', 'Charming'],
            lifeExpectancy: '13-15 years',
            group: 'Toy Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/pekingese/">Pekingese</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/brussels-griffon/">Brussels Griffon</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/pug/">Pug</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'high',
            trainingLevel: 'high',
            image: './assets/dachshund.jpg',
            alt: 'A dachshund sitting down.',
            breed: 'Dachshund',
            temperament: ['Friendly', 'Playful', 'Devoted'],
            lifeExpectancy: '12-16 years',
            group: 'Hound Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/poodle-miniature/">Miniature Poodle</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/papillon/">Papillon</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/dachshund/">Dachshund</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'low',
            trainingLevel: 'high',
            image: './assets/french-bulldog.jpg',
            alt: 'A french bulldog sitting down.',
            breed: 'French Bulldog',
            temperament: ['Adaptable', 'Playful', 'Alert'],
            lifeExpectancy: '10-12 years',
            group: 'Non-sporting Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/boston-terrier/">Boston Terrier</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/havanese/">Havanese</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/french-bulldog/">French Bulldog</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'low',
            trainingLevel: 'low',
            blurb: 'sounds like a cat would be a better fit, furriend!',
            image: './assets/cat.jpg',
            alt: 'A domestic shorthair cat sitting down.',
            breed: 'Domestic Shorthair Cat',
            temperament: ['Insolent', 'Demanding', 'Vocal'],
            lifeExpectancy: '10-20 years',
            group: 'Non-canine Group',
            similarBreeds: ['<a target="_blank" href="https://www.thesprucepets.com/why-cats-are-better-than-dogs-554880">Looks like a cat would be a better match for you, furriend!</a>'],
            breedLink: '<a target="_blank" href="https://www.catological.com/5-best-cat-breeds-lazy-people/">Domestic Shorthair Cat</a>'
        }
    ],
    medium: [
        {
            activityLevel: 'high',
            attentionLevel: 'low',
            trainingLevel: 'high',
            image: './assets/basenji.jpg',
            alt: 'A besenji tilting its head to the side.',
            breed: 'Basenji',
            temperament: ['Independent', 'Athletic', 'Intelligent'],
            lifeExpectancy: '13-14 years',
            group: 'Hound Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/ibizan-hound/">Ibizan Hound</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/american-foxhound/">American Foxhound</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/parson-russell-terrier/">Basenji</a>'
        },
        {
            activityLevel: 'high',
            attentionLevel: 'low',
            trainingLevel: 'low',
            image: './assets/podengo.jpg',
            alt: 'A Portuguese Podengo sitting down.',
            breed: 'Portuguese Podengo',
            temperament: ['Alert', 'Athletic', 'Independent'],
            lifeExpectancy: '10-12 years',
            group: 'Miscellaneous Class',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/portuguese-podengo-pequeno/">Podenco Canario</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/pharaoh-hound/">Pharaoh Hound</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/portuguese-podengo/">Portuguese Podengo</a>'
        },
        {
            activityLevel: 'high',
            attentionLevel: 'high',
            trainingLevel: 'low',
            image: './assets/beagle-2.jpg',
            alt: 'A beagle sitting down.',
            breed: 'Beagle',
            temperament: ['Friendly', 'Determined', 'Gentle'],
            lifeExpectancy: '10-15 years',
            group: 'Hound Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/english-foxhound/">English Foxhound</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/harrier/">Harrier</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/beagle/">Beagle</a>'
        },
        {
            activityLevel: 'high',
            attentionLevel: 'high',
            trainingLevel: 'high',
            image: './assets/sheltie.jpg',
            alt: 'A Shetland Sheepdog sitting down.',
            breed: 'Shetland Sheepdog',
            temperament: ['Playful', 'Intelligent', 'Energetic'],
            lifeExpectancy: '12-14 years',
            group: 'Herding Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/collie/">Rough Collie</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/belgian-sheepdog/">Belgian Sheepdog</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/shetland-sheepdog/">Shetland Sheepdog</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'high',
            trainingLevel: 'low',
            image: './assets/english-bulldog.jpg',
            alt: 'An english bulldog sitting down.',
            breed: 'English Bulldog',
            temperament: ['Friendly', 'Gregarious', 'Calm'],
            lifeExpectancy: '13-15 years',
            group: 'Non-Sporting Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/bullmastiff/">Bullmastiff</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/american-bulldog/">American Bulldog</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/bulldog/">English Bulldog</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'high',
            trainingLevel: 'high',
            image: './assets/staffordshire-bull-terrier.jpg',
            alt: 'A Staffordshire Bull Terrier with its mouth open.',
            breed: 'Staffordshire Bull Terrier',
            temperament: ['Affectionate', 'Clever', 'Courageous'],
            lifeExpectancy: '12-14 years',
            group: 'Terrier Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/boxer/">Boxer</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/perro-de-presa-canario/">Presa Canario</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/staffordshire-bull-terrier/">Staffordshire Bull Terrier</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'low',
            trainingLevel: 'low',
            image: './assets/basset-hound.jpg',
            alt: 'A basset hound sitting down.',
            breed: 'Basset Hound',
            temperament: ['Patient', 'Sweet-Tempered', 'Gentle'],
            lifeExpectancy: '12-13 years',
            group: 'Hound Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/bloodhound/">Bloodhound</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/american-foxhound/">American Foxhound</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/basset-hound/">Basset Hound</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'low',
            trainingLevel: 'high',
            image: './assets/bull-terrier.jpg',
            alt: 'A Bull Terrier sitting down.',
            breed: 'Bull Terrier',
            temperament: ['Mischievous', 'Keen', 'Protective'],
            lifeExpectancy: '12-13 years',
            group: 'Terrier Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/bedlington-terrier/">Bedlington Terrier</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/airedale-terrier/">Airedale Terrier</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/bull-terrier/">Bull Terrier</a>'
        }
    ],
    large: [
        {
            activityLevel: 'high',
            attentionLevel: 'low',
            trainingLevel: 'high',
            image: './assets/australian-cattle-dog.jpg',
            alt: 'An australian cattle dog with its mouth open.',
            breed: 'Australian Cattle Dog',
            temperament: ['Alert', 'Energetic', 'Obedient'],
            lifeExpectancy: '12-16 years',
            group: 'Herding Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/belgian-tervuren/">Belgian Tervuren</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/australian-shepherd/">Australian Shepherd</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/australian-cattle-dog/">Australian Cattle Dog</a>'
        },
        {
            activityLevel: 'high',
            attentionLevel: 'low',
            trainingLevel: 'low',
            image: './assets/pointer.jpg',
            alt: 'A German Shorthaired Pointer sitting down.',
            breed: 'German Shorthaired Pointer',
            temperament: ['Boisterous', 'Smart', 'Bold'],
            lifeExpectancy: '10-12 years',
            group: 'Sporting Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/gordon-setter/">Gordon Setter</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/brittany/">Brittany</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/german-shorthaired-pointer/">German Shorthaired Pointer</a>'
        },
        {
            activityLevel: 'high',
            attentionLevel: 'high',
            trainingLevel: 'low',
            image: './assets/husky.jpg',
            alt: 'A husky sitting down.',
            breed: 'Siberian Husky',
            temperament: ['Mischievous', 'Friendly', 'Outgoing'],
            lifeExpectancy: '12-14 years',
            group: 'Working Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/akita/">Akita</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/alaskan-malamute/">Alaskan Malamute</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/siberian-husky/">Siberian Husky</a>'
        },
        {
            activityLevel: 'high',
            attentionLevel: 'high',
            trainingLevel: 'high',
            image: './assets/labrador.jpg',
            alt: 'A Labrador Retriever with its mouth open.',
            breed: 'Labrador Retriever',
            temperament: ['Active', 'Friendly', 'Intelligent'],
            lifeExpectancy: '10-12 years',
            group: 'Sporting Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/golden-retriever/">Golden Retriever</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/border-collie/">Border Collie</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/labrador-retriever/">Labrador Retriever</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'high',
            trainingLevel: 'low',
            image: './assets/great-dane.jpg',
            alt: 'A great dane sitting down.',
            breed: 'Great Dane',
            temperament: ['Friendly', 'Loving', 'Patient'],
            lifeExpectancy: '7-10 years',
            group: 'Working Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/neapolitan-mastiff/">Neapolitan Mastiff</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/st-bernard/">Saint Bernard</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/great-dane/">Great Dane</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'high',
            trainingLevel: 'high',
            image: './assets/vizsla.jpg',
            alt: 'A Vizsla sitting down.',
            breed: 'Vizsla',
            temperament: ['Gentle', 'Affectionate', 'Quiet'],
            lifeExpectancy: '12-14 years',
            group: 'Sporting Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/weimaraner/">Weimaraner</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/redbone-coonhound/">Redbone Coonhound</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/vizsla/">Vizsla</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'low',
            trainingLevel: 'low',
            image: './assets/greyhound.jpg',
            alt: 'A greyhound sitting down.',
            breed: 'Greyhound',
            temperament: ['Quiet', 'Independent', 'Gentle'],
            lifeExpectancy: '10-13 years',
            group: 'Hound Group',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/irish-wolfhound/">Irish Wolfhound</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/afghan-hound/">Afghan Hound</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/greyhound/">Greyhound</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'low',
            trainingLevel: 'high',
            image: './assets/catahoula-leopard.jpg',
            alt: 'A Catahoula Leopard Dog sitting down.',
            breed: 'Catahoula Leopard Dog',
            temperament: ['Inquisitive', 'Independent', 'Protective'],
            lifeExpectancy: '10-14 years',
            group: 'Foundation Stock Service',
            similarBreeds: ['<a target="_blank" href="https://www.akc.org/dog-breeds/rhodesian-ridgeback/">Rhodesian Ridgeback</a>', '<a target="_blank" href="https://www.akc.org/dog-breeds/black-and-tan-coonhound/">Black and Tan Coonhound</a>'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/catahoula-leopard-dog/">Catahoula Leopard Dog</a>'
        }
    ]
}


// (3) SELECTORS (selectors that will be used 2+ times)
    const results = document.querySelector('#results');
    const breedName = document.querySelector('#results-heading');
    const image = document.querySelector('#results-image');
    const temperament = document.querySelector('#temperament-list');
    const lifeExpec = document.querySelector('#life-expec');
    const group = document.querySelector('#group');
    const similarBreeds = document.querySelector('#similar-breed-list');
    const differentTraitsButton = document.querySelector('#different-traits-button');
    const titles = document.getElementsByClassName('results-title');


// (4) NEXT QUESTION EVENT LISTENER (a function that brings the user to the following question when the user clicks the 'first question' or 'next question' (arrow icons) links)
dogApp.nextQuestionEventListener = function () {
    // select all elements with a class of 'scroll'
    const links = document.querySelectorAll('.scroll');

    // apply the scroll on user click (ie: nextQuestion function) to each link that has the 'scroll' class
    for (const link of links) {
        link.addEventListener('click', nextQuestion);
    }

    // a function that scrolls to the next question
    function nextQuestion(event) {
        event.preventDefault();
        // grab the href attribute value from the link that was clicked on
        const href = this.getAttribute('href');
        // bring the user to the element with the corresponding ID (ie: the next question)
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    }
}


// (5) RANDOM BREED EVENT LISTENER (a function that runs the function that generates random trait choices when the user clicks the 'random breed' button)
dogApp.randomBreedEventListener = () => {
    // listen for when the user clicks the button
    document.querySelector('#random-breed').addEventListener('click', function () {
        // run the function that generates random trait choices
        dogApp.randomTraitChoices();
    });
}


// (6) RANDOM TRAIT CHOICES (a function that uses a random integer generator function to choose random trait choices for size, activity, attention, and training, then runs the function that will choose a breed based on the traits)
dogApp.randomTraitChoices = () => {
    // a function that will return a random integer between a designated minimum and maximum number
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // choose a random dog size by a) choosing a random integer between 0 and 2 (0, 1 or 2), then b) defining the 'size' variable based on that random integer
    let size = randomInteger(0, 2);
    randomSizeChoice = (size === 0) ? "small" : (size === 1) ? "medium" : "large";
    
    // choose a random activity level using the same logic as above
    let activity = randomInteger(0, 1);
    randomActivityChoice = (activity === 0) ? "low" : "high";

    // choose a random attention level using the same logic as above
    let attention = randomInteger(0, 1);
    randomAttentionChoice = (attention === 0) ? "low" : "high";

    // choose a random training level using the same logic as above
    let training = randomInteger(0, 1);
    randomTrainingChoice = (training === 0) ? "low" : "high";

    // run the function to find the dog breed object that corresponds to the random choices
    dogApp.generateBreed(randomSizeChoice, randomActivityChoice, randomAttentionChoice, randomTrainingChoice);
}


// (7) FORM SUBMIT EVENT LISTENER (a function that runs the function that stores the user's trait choices when the user submits the form)
dogApp.formSubmitEventListener = () => {
    // listen for when the user submits the form
    document.querySelector('form').addEventListener('submit', function (event) {
        // prevent default form behaviour (page refresh)
        event.preventDefault();
        // run the function that error handles & stores the user's choices
        dogApp.usersTraitChoices();
    });
}


// (8) USERS TRAIT CHOICES (a function that alerts the user if they have made under 4 selections. else, it stores their selections and runs the function that chooses a breed based on the traits)
dogApp.usersTraitChoices = () => {
    const radioInputs = document.querySelectorAll('input:checked').length;

    // IF all form fields have not been filled out, then alert the user
    if (radioInputs < 4) {
        alert(`Oh no! Looks like you haven't answered all of the questions, furriend! Please complete all of the questions to find your perfect dog breed!`);
    } else {
        // ELSE store the users selections in variables
        const usersSizeChoice = document.querySelector('input[name=size]:checked').value;
        const usersActivityChoice = document.querySelector('input[name=activity]:checked').value;
        const usersAttentionChoice = document.querySelector('input[name=attention]:checked').value;
        const usersTrainingChoice = document.querySelector('input[name=training]:checked').value;

        // run the function to find the dog breed object that corresponds to the users choices
        dogApp.generateBreed(usersSizeChoice, usersActivityChoice, usersAttentionChoice, usersTrainingChoice);
    }
}


// (9) GENERATE DOG BREED (a function that takes the trait choices passed in as arguments and filters through the dog object to find a matching breed)
dogApp.generateBreed = (size, activity, attention, training) => {
    // find the dog size array that matches the user's size choice
    const dogSizeOptions = dogApp.dogSize[size];

    // filter through that dog size array and find the dog breed with activity, attention, and training traits that match the trait choices passed in
    dogSizeOptions.filter((dogSizeOption) => {
        
        if (activity === dogSizeOption.activityLevel && attention === dogSizeOption.attentionLevel && training === dogSizeOption.trainingLevel) {
            // store the breed's information in variables
            const usersBreedImage = dogSizeOption.image;
            const usersBreedImageAlt = dogSizeOption.alt;
            const usersBreedTemperament = dogSizeOption.temperament;
            const usersBreedLifeExpect = dogSizeOption.lifeExpectancy;
            const usersBreedGroup = dogSizeOption.group;
            const usersSimilarBreeds = dogSizeOption.similarBreeds;
            const usersBreedLink = dogSizeOption.breedLink;

            // remove appended content if user makes new choices when submitting the form again
            dogApp.resetResults();

            // run the functions to display the breed information & automatically bring the user to the displayed results
            dogApp.displayBreed(usersBreedImage, usersBreedImageAlt, usersBreedTemperament, usersBreedLifeExpect, usersBreedGroup, usersSimilarBreeds, usersBreedLink);
            dogApp.differentTraitsEventListener();
            dogApp.scrollToResults();
        };
    });
}


// (10) DISPLAY DOG BREED (a function that takes the stored breed information and displays the associated image and text in the results section)
dogApp.displayBreed = (imageSource, imageAlt, temperamentTraits, lifeExpectancy, breedGroup, similarBreed, breedLink) => {
    // display hidden results titles & make results section 100vh
    for (let i = 0; i < titles.length; i++) {
        titles[i].style.visibility = 'visible'
    }
    results.classList.add('result-height');

    // style & append breed photo to the results section
    const imageChild = document.createElement('img');
    imageChild.src = `${imageSource}`;
    imageChild.alt = `${imageAlt}`;
    imageChild.classList.add('dynamic-image');
    image.appendChild(imageChild);

    // style & append breed name to the results section
    const breedNameChild = document.createElement('h2');
    breedNameChild.classList.add('dynamic-heading');
    breedNameChild.innerHTML = `Your perfect breed is: <span class="dynamic-breed">${breedLink}</span>`;
    breedName.appendChild(breedNameChild);

    // style & append breed traits to the results section
    temperamentTraits.forEach((trait) => {
        const temperamentChild = document.createElement('li');
        temperamentChild.classList.add('dynamic-text');
        temperamentChild.textContent = `${trait}`;
        temperament.appendChild(temperamentChild);
    });

    // style & append life expectancy to the results section
    const lifeExpecChild = document.createElement('p');
    lifeExpecChild.classList.add('dynamic-text');
    lifeExpecChild.textContent = `${lifeExpectancy}`;
    lifeExpec.appendChild(lifeExpecChild);

    // style & append breed group to the results section
    const groupChild = document.createElement('p');
    groupChild.classList.add('dynamic-text');
    groupChild.textContent = `${breedGroup}`;
    group.appendChild(groupChild);

    // style & append similar breeds to the results section
    similarBreed.forEach((breed) => {
        const similarBreedsChild = document.createElement('li');
        similarBreedsChild.classList.add('dynamic-text');
        similarBreedsChild.classList.add('dynamic-links');
        similarBreedsChild.innerHTML = `${breed}`;
        similarBreeds.appendChild(similarBreedsChild);
    });

    // append a 'choose different traits' button beneath displayed image and text
    const button = document.createElement('button');
    button.textContent = 'Choose Different Traits';
    button.classList.add('generator-button');
    button.classList.add('dynamic-button');
    differentTraitsButton.appendChild(button);
}


// (11) SCROLL TO RESULTS (a function that automatically brings user to their displayed results) 
dogApp.scrollToResults = () => {
    document.querySelector('#results').scrollIntoView({
        behavior: 'smooth'
    });
}


// (12) TRY AGAIN (a function that removes all appended breed information and scrolls to the top of the page when the user clicks the 'choose different traits' button)
dogApp.differentTraitsEventListener = () => {
    // when the 'choose different traits' button is clicked:
    differentTraitsButton.addEventListener('click', function () {
        // (a) remove all appended content
        dogApp.resetResults();
        // (b) scroll to the top of the page to allow user to choose new traits
        dogApp.scrollToTop();
    });
}


// (13) RESET RESULTS (a function that removes all appended breed information in the results section)
dogApp.resetResults = () => {
    while (breedName.firstChild) breedName.removeChild(breedName.firstChild);
    while (image.firstChild) image.removeChild(image.firstChild);
    while (temperament.firstChild) temperament.removeChild(temperament.firstChild);
    while (lifeExpec.firstChild) lifeExpec.removeChild(lifeExpec.firstChild);
    while (group.firstChild) group.removeChild(group.firstChild);
    while (similarBreeds.firstChild) similarBreeds.removeChild(similarBreeds.firstChild);
    while (differentTraitsButton.firstChild) differentTraitsButton.removeChild(differentTraitsButton.firstChild);
    for (let i = 0; i < titles.length; i++) {
        titles[i].style.visibility = 'hidden'
    }
    results.classList.remove('result-height');
}


// (14) SCROLL TO TOP OF PAGE (a function that automatically brings the user to the top of the page)
dogApp.scrollToTop = () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}


// (2) INITIALIZATION (a function that initializes the app)
dogApp.init = () => {
    // upon app initialization, run the event listener functions
    dogApp.randomBreedEventListener();
    dogApp.formSubmitEventListener();
    dogApp.nextQuestionEventListener();
}


// (1) DOCUMENT READY (a function that waits for the document to load)
document.addEventListener('DOMContentLoaded', function () {
    // once the DOM has loaded, initialize the app
    dogApp.init();
})