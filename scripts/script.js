// APP NAMESPACE OBJECT
const dogBreedApp = {};

// APPENDED IMAGE & BREED INFORMATION OBJECT
dogBreedApp.dogSize = {
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
            similarBreeds: ['Jack Russell Terrier', 'Smooth Fox Terrier'],
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
            similarBreeds: ['Manchester Terrier', 'Rat Terrier'],
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
            similarBreeds: ['Shih Tzu', 'Pomeranian'],
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
            similarBreeds: ['Australian Terrier', 'Cairn Terrier'],
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
            similarBreeds: ['Pekingese', 'Brussels Griffon'],
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
            similarBreeds: ['Miniature Poodle', 'Papillon'],
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
            similarBreeds: ['Boston Terrier', 'Havanese'],
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
            similarBreeds: ['British Shorthair', 'Bengal'],
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
            similarBreeds: ['Ibizan Hound', 'American Foxhound'],
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
            similarBreeds: ['Podenco Canario', 'Ibizan Hound'],
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
            similarBreeds: ['English Foxhound', 'Harrier'],
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
            similarBreeds: ['Rough Collie', 'Belgian Sheepdog'],
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
            similarBreeds: ['Bullmastiff', 'American Bulldog'],
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
            similarBreeds: ['Boxer', 'Presa Canario'],
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
            similarBreeds: ['Bloodhound', 'American Foxhound'],
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
            similarBreeds: ['Dandie Dinmont Terrier', 'Airedale Terrier'],
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
            similarBreeds: ['Belgian Sheepdog', 'Australian Shepherd'],
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
            similarBreeds: ['Gordon Setter', 'Brittany'],
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
            similarBreeds: ['Akita Inu', 'Alaskan Malamute'],
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
            similarBreeds: ['Golden Retriever', 'Border Collie'],
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
            similarBreeds: ['Neapolitan Mastiff', 'Saint Bernard'],
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
            similarBreeds: ['Weimaraner', 'Redbone Coonhound'],
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
            similarBreeds: ['Irish Wolfhound', 'Afghan Hound'],
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
            similarBreeds: ['Rhodesian Ridgeback', 'Black and Tan Coonhound'],
            breedLink: '<a target="_blank" href="https://www.akc.org/dog-breeds/catahoula-leopard-dog/">Catahoula Leopard Dog</a>'
        }
    ]
};


// (3) CACHED SELECTORS (caching selectors that will be used 2+ times)
const $results = $('#results');
const $breed = $('#results-heading');
const $image = $('#results-image');
const $temperament = $('#temperament-list');
const $lifeExpec = $('#life-expec');
const $group = $('#group');
const $similarBreeds = $('#similar-breed-list');
const $differentTraitsButton = $('#different-traits-button');
const $titles = $('.results-title');


// (4) NEXT QUESTION EVENT LISTENER (a function that brings the user to the following question when the user clicks the 'first question' or 'next question' links)
dogBreedApp.nextQuestionEventListener = function () {
    // listen for when the user clicks the link
    $('.scroll').on('click', function (event) {
        event.preventDefault();
        // bring the user to the following question
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    });
};


// (5) RANDOM BREED EVENT LISTENER (a function that runs the function that generates random trait choices when the user clicks the 'random breed' button)
dogBreedApp.randomBreedEventListener = () => {
    // listen for when the user clicks the button
    $('#random-breed').on('click', function () {
        // run the function to generate random trait choices
        dogBreedApp.randomTraitChoices();
    });
};


// (6) CHOOSE RANDOM TRAIT CHOICES (a function that uses a random integer generator function to choose random trait choices for size, activity, attention, and training, then runs the function that will choose a breed based on the traits)
dogBreedApp.randomTraitChoices = () => {
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
    dogBreedApp.generatedBreed(randomSizeChoice, randomActivityChoice, randomAttentionChoice, randomTrainingChoice);
};


// (7) FORM SUBMIT EVENT LISTENER (a function that runs the function that stores the user's trait choices when the user submits the form)
dogBreedApp.formSubmitEventListener = () => {
    // listen for when the user submits the form
    $('form').on('submit', function (event) {
        // prevent default form behaviour (page refresh)
        event.preventDefault();
        // run the function that error handles & stores the user's choices
        dogBreedApp.usersTraitChoices();
    });
};


// (8) USERS TRAIT CHOICES (a function that alerts the user if they have made under 4 selections. else, it stores their selections and runs the function that chooses a breed based on the traits)
dogBreedApp.usersTraitChoices = () => {
    const radioInputs = $('input:checked').length;

    // IF all form fields have not been filled out, then alert the user
    if (radioInputs < 4) {
        alert(`Oh no! Looks like you haven't answered all of the questions, furriend! Please complete all of the questions to find your perfect dog breed!`);
    } else {
        //ELSE store the users selections in variables
        const usersSizeChoice = $('input[name=size]:checked').val();
        const usersActivityChoice = $('input[name=activity]:checked').val();
        const usersAttentionChoice = $('input[name=attention]:checked').val();
        const usersTrainingChoice = $('input[name=training]:checked').val();

        // run the function to find the dog breed object that corresponds to the users choices
        dogBreedApp.generatedBreed(usersSizeChoice, usersActivityChoice, usersAttentionChoice, usersTrainingChoice);
    }
};


// (9) GENERATE A BREED (a function that takes the trait choices passed in as arguments and filters through the dog object to find a matching breed)
dogBreedApp.generatedBreed = (size, activity, attention, training) => {
    // find the dog size array that matches the user's size choice
    const dogSizeOptions = dogBreedApp.dogSize[size];

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
            $breed.empty();
            $image.empty();
            $temperament.empty();
            $lifeExpec.empty();
            $group.empty();
            $lifeExpec.empty();
            $group.empty();
            $similarBreeds.empty();
            $differentTraitsButton.empty();
            $titles.css({ visibility: 'hidden' });
            $results.removeClass('result-height');

            // run the functions to display the breed information & automatically bring the user to the displayed results
            dogBreedApp.displayBreedInfo(usersBreedImage, usersBreedImageAlt, usersBreedTemperament, usersBreedLifeExpect, usersBreedGroup, usersSimilarBreeds, usersBreedLink);
            dogBreedApp.chooseDifferentTraits();
            dogBreedApp.scrollToResults();
        };
    });
};


// (10) DISPLAY DOG BREED INFORMATION (a function that takes the stored breed information and displays the associated image and text in the results section)
dogBreedApp.displayBreedInfo = (imageSource, imageAlt, temperament, lifeExpec, group, similarBreeds, breedLink) => {
    // display hidden results titles & make results section 100vh
    $titles.css({visibility: 'visible'});
    $results.addClass('result-height');

    // style & append breed photo to the results section
    const breedImage = $('<img>').attr('src', imageSource).attr('alt', imageAlt).css({ border: '1px solid black', padding: '10px'}).addClass('dynamic-image');
    $image.append(breedImage);

    // style & append breed name and information to the results section
    $breed.append(`<h2 class="dynamic-heading">Your perfect breed is: <span class="dynamic-breed">${breedLink}</span></h2>`);

    temperament.forEach((trait) => {
        $temperament.append(`<li class="dynamic-text">${trait}</li>`)
    });

    $lifeExpec.append(`<p class="dynamic-text">${lifeExpec}</p>`);

    $group.append(`<p class="dynamic-text">${group}</p>`);

    similarBreeds.forEach((breed) => {
        $similarBreeds.append(`<li class="dynamic-text">${breed}</li>`)
    });
};


// (11) SCROLL TO RESULTS SECTION (a function that automatically brings user to their displayed results) 
dogBreedApp.scrollToResults = () => {
    $('html').animate({
        scrollTop: $('#results').offset().top
    }, 1000);
};


// (12) RESET RESULTS (a function that removes all appended breed information and scrolls to the top of the page so the user can starts again & select different traits)
dogBreedApp.chooseDifferentTraits = () => {
    // append a 'choose different traits' button beneath displayed image and text
    const chooseDifferentTraits = $('<button>').text('Choose Different Traits').addClass('generator-button dynamic-button');
    $differentTraitsButton.append(chooseDifferentTraits);

    // when the 'choose different traits' button is clicked:
    $differentTraitsButton.on('click', () => {

        // (a) remove all appended content
        $breed.empty();
        $image.empty();
        $temperament.empty();
        $lifeExpec.empty();
        $group.empty();
        $similarBreeds.empty();
        $differentTraitsButton.empty();
        $titles.css({ visibility: 'hidden' });
        $results.removeClass('result-height');

        // (b) scroll to the top of the page to allow user to choose new traits
        dogBreedApp.scrollToTop();
    });
};


// (13) SCROLL TO TOP OF PAGE (a function that automatically brings the user to the top of the page)
dogBreedApp.scrollToTop = () => {
    $('html, body').animate({
        scrollTop: $('header').offset().top
    }, 1000);
};


// (2) INITIALIZATION (a function that initializes the app)
dogBreedApp.init = () => {
    // upon app initialization, run the event listener functions
    dogBreedApp.randomBreedEventListener();
    dogBreedApp.formSubmitEventListener();
    dogBreedApp.nextQuestionEventListener();
};


// (1) DOCUMENT READY (a function that waits for the document to load)
$(function () {
    // once the DOM has loaded, initialize the app
    dogBreedApp.init();
});