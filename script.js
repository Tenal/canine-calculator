// APP NAMESPACE OBJECT
const dogBreedApp = {};

// APPENDED IMAGE & BREED INFORMATION OBJECT
dogBreedApp.dogSize = {
    small: [
        {
            activityLevel: 'high',
            attentionLevel: 'low',
            trainingLevel: 'high',
            image: './assets/parson-russel-terrier.jpg',
            alt: 'A parson russell terrier with its mouth open.',
            breed: 'Parson Russell Terrier',
            temperament: 'Independent || Athletic || Clever',
            lifeExpectancy: '13-15 years',
            group: 'Terrier Group',
            similarBreeds: 'Jack Russell Terrier || Smooth Fox Terrier ',
            learnMore: '<a href="https://www.akc.org/dog-breeds/parson-russell-terrier/">Learn More</a>'
        },
        {
            activityLevel: 'high',
            attentionLevel: 'low',
            trainingLevel: 'low',
            image: './assets/miniature-pinscher.jpg',
            alt: 'A miniature pinscher tilting its head.',
            breed: 'Miniature Pinscher',
            temperament: 'Fearless || Energetic || Friendly',
            lifeExpectancy: '12-16 years',
            group: 'Toy Group',
            similarBreeds: 'Manchester Terrier || Rat Terrier ',
            learnMore: '<a href="https://www.akc.org/dog-breeds/miniature-pinscher/">Learn More</a>'
        },
        {
            activityLevel: 'high',
            attentionLevel: 'high',
            trainingLevel: 'low',
            image: './assets/corgi.jpg',
            alt: 'A pembrooke welsh corgi sitting down.',
            breed: 'Pembrooke Welsh Corgi',
            temperament: 'Affectionate || Playful || Alert',
            lifeExpectancy: '12-13 years',
            group: 'Herding Group',
            similarBreeds: 'Shih Tzu || Pomeranian ',
            learnMore: '<a href="https://www.akc.org/dog-breeds/pembroke-welsh-corgi/">Learn More</a>'
        },
        {
            activityLevel: 'high',
            attentionLevel: 'high',
            trainingLevel: 'high',
            image: './assets/border-terrier.jpg',
            alt: 'A border terrier sitting down.',
            breed: 'Border Terrier',
            temperament: 'Intelligent || Obedient || Affectionate',
            lifeExpectancy: '12-15 years',
            group: 'Terrier Group',
            similarBreeds: 'Australian Terrier || Cairn Terrier ',
            learnMore: '<a href="https://www.akc.org/dog-breeds/border-terrier/">Learn More</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'high',
            trainingLevel: 'low',
            image: './assets/parson-russel-terrier.jpg',
            alt: 'A pug sitting down.',
            breed: 'Pug',
            temperament: 'Loving || Mischievous || Charming',
            lifeExpectancy: '13-15 years',
            group: 'Toy Group',
            similarBreeds: 'Pekingese || Brussels Griffon ',
            learnMore: '<a href="https://www.akc.org/dog-breeds/pug/">Learn More</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'high',
            trainingLevel: 'high',
            image: './assets/dachshund.jpg',
            alt: 'A dachshund sitting down.',
            breed: 'Dachshund',
            temperament: 'Friendly || Playful || Devoted',
            lifeExpectancy: '12-16 years',
            group: 'Hound Group',
            similarBreeds: 'Miniature Poodle || Papillon ',
            learnMore: '<a href="https://www.akc.org/dog-breeds/dachshund/">Learn More</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'low',
            trainingLevel: 'high',
            image: './assets/french-bulldog.jpg',
            alt: 'A french bulldog sitting down.',
            breed: 'French Bulldog',
            temperament: 'Adaptable || Playful || Alert',
            lifeExpectancy: '10-12 years',
            group: 'Non-sporting Group',
            similarBreeds: 'Boston Terrier || Havanese',
            learnMore: '<a href="https://www.akc.org/dog-breeds/french-bulldog/">Learn More</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'low',
            trainingLevel: 'low',
            blurb: 'sounds like a cat would be a better fit, furriend!',
            image: './assets/cat.jpg',
            alt: 'A domestic shorthair cat sitting down.',
            breed: 'Domestic Shorthair Cat',
            temperament: 'Insolent || Demanding || Vocal',
            lifeExpectancy: '10-20 years',
            group: 'Non-canine Group',
            similarBreeds: 'British Shorthair || Bengal',
            learnMore: '<a href="https://www.akc.org/dog-breeds/french-bulldog/">Learn More</a>'
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
            temperament: 'Independent || Athletic || Intelligent',
            lifeExpectancy: '13-14 years',
            group: 'Hound Group',
            similarBreeds: 'Ibizan Hound || American Foxhound',
            learnMore: '<a href="https://www.akc.org/dog-breeds/parson-russell-terrier/">Learn More</a>'
        },
        {
            activityLevel: 'high',
            attentionLevel: 'low',
            trainingLevel: 'low',
            image: './assets/podengo.jpg',
            alt: 'A Portuguese Podengo sitting down.',
            breed: 'Portuguese Podengo',
            temperament: 'Alert || Athletic || Independent',
            lifeExpectancy: '10-12 years',
            group: 'Miscellaneous Class',
            similarBreeds: 'Podenco Canario || Ibizan Hound',
            learnMore: '<a href="https://www.akc.org/dog-breeds/portuguese-podengo/">Learn More</a>'
        },
        {
            activityLevel: 'high',
            attentionLevel: 'high',
            trainingLevel: 'low',
            image: './assets/beagle-2.jpg',
            alt: 'A beagle sitting down.',
            breed: 'Beagle',
            temperament: 'Friendly || Determined || Gentle',
            lifeExpectancy: '10-15 years',
            group: 'Hound Group',
            similarBreeds: 'English Foxhound || Harrier',
            learnMore: '<a href="https://www.akc.org/dog-breeds/beagle/">Learn More</a>'
        },
        {
            activityLevel: 'high',
            attentionLevel: 'high',
            trainingLevel: 'high',
            image: './assets/sheltie.jpg',
            alt: 'A Shetland Sheepdog sitting down.',
            breed: 'Shetland Sheepdog',
            temperament: 'Playful || Intelligent || Energetic',
            lifeExpectancy: '12-14 years',
            group: 'Herding Group',
            similarBreeds: 'Rough Collie || Belgian Sheepdog',
            learnMore: '<a href="https://www.akc.org/dog-breeds/shetland-sheepdog/">Learn More</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'high',
            trainingLevel: 'low',
            image: './assets/english-bulldog.jpg',
            alt: 'An english bulldog sitting down.',
            breed: 'English Bulldog',
            temperament: 'Friendly || Gregarious || Calm',
            lifeExpectancy: '13-15 years',
            group: 'Non-Sporting Group',
            similarBreeds: 'Bullmastiff || American Bulldog',
            learnMore: '<a href="https://www.akc.org/dog-breeds/bulldog/">Learn More</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'high',
            trainingLevel: 'high',
            image: './assets/staffordshire-bull-terrier.jpg',
            alt: 'A Staffordshire Bull Terrier with its mouth open.',
            breed: 'Staffordshire Bull Terrier',
            temperament: 'Affectionate || Clever || Courageous',
            lifeExpectancy: '12-14 years',
            group: 'Terrier Group',
            similarBreeds: 'Boxer || Presa Canario',
            learnMore: '<a href="https://www.akc.org/dog-breeds/staffordshire-bull-terrier/">Learn More</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'low',
            trainingLevel: 'low',
            image: './assets/basset-hound.jpg',
            alt: 'A basset hound sitting down.',
            breed: 'Basset Hound',
            temperament: 'Patient || Sweet-Tempered || Gentle',
            lifeExpectancy: '12-13 years',
            group: 'Hound Group',
            similarBreeds: 'Bloodhound || American Foxhound',
            learnMore: '<a href="https://www.akc.org/dog-breeds/basset-hound/">Learn More</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'low',
            trainingLevel: 'high',
            image: './assets/bull-terrier.jpg',
            alt: 'A Bull Terrier sitting down.',
            breed: 'Bull Terrier',
            temperament: 'Mischievous || Keen || Protective',
            lifeExpectancy: '12-13 years',
            group: 'Terrier Group',
            similarBreeds: 'Dandie Dinmont Terrier || Airedale Terrier',
            learnMore: '<a href="https://www.akc.org/dog-breeds/bull-terrier/">Learn More</a>'
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
            temperament: 'Alert || Energetic || Obedient',
            lifeExpectancy: '12-16 years',
            group: 'Herding Group',
            similarBreeds: 'Belgian Sheepdog || Australian Shepherd',
            learnMore: '<a href="https://www.akc.org/dog-breeds/australian-cattle-dog/">Learn More</a>'
        },
        {
            activityLevel: 'high',
            attentionLevel: 'low',
            trainingLevel: 'low',
            image: './assets/pointer.jpg',
            alt: 'A German Shorthaired Pointer sitting down.',
            breed: 'German Shorthaired Pointer',
            temperament: 'Boisterous || Smart || Bold',
            lifeExpectancy: '10-12 years',
            group: 'Sporting Group',
            similarBreeds: 'Gordon Setter || Brittany',
            learnMore: '<a href="https://www.akc.org/dog-breeds/german-shorthaired-pointer/">Learn More</a>'
        },
        {
            activityLevel: 'high',
            attentionLevel: 'high',
            trainingLevel: 'low',
            image: './assets/husky.jpg',
            alt: 'A husky sitting down.',
            breed: 'Siberian Husky',
            temperament: 'Mischievous || Friendly || Outgoing',
            lifeExpectancy: '12-14 years',
            group: 'Working Group',
            similarBreeds: 'Akita Inu || Alaskan Malamute',
            learnMore: '<a href="https://www.akc.org/dog-breeds/siberian-husky/">Learn More</a>'
        },
        {
            activityLevel: 'high',
            attentionLevel: 'high',
            trainingLevel: 'high',
            image: './assets/labrador.jpg',
            alt: 'A Labrador Retriever with its mouth open.',
            breed: 'Labrador Retriever',
            temperament: 'Active || Friendly || Intelligent',
            lifeExpectancy: '10-12 years',
            group: 'Sporting Group',
            similarBreeds: 'Golden Retriever || Border Collie',
            learnMore: '<a href="https://www.akc.org/dog-breeds/labrador-retriever/">Learn More</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'high',
            trainingLevel: 'low',
            image: './assets/grate-dane.jpg',
            alt: 'A great dane sitting down.',
            breed: 'Great Dane',
            temperament: 'Friendly || Loving || Patient',
            lifeExpectancy: '7-10 years',
            group: 'Working Group',
            similarBreeds: 'Neapolitan Mastiff || Saint Bernard',
            learnMore: '<a href="https://www.akc.org/dog-breeds/great-dane/">Learn More</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'high',
            trainingLevel: 'high',
            image: './assets/vizsla.jpg',
            alt: 'A Vizsla sitting down.',
            breed: 'Vizsla',
            temperament: 'Gentle || Affectionate || Quiet',
            lifeExpectancy: '12-14 years',
            group: 'Sporting Group',
            similarBreeds: 'Weimaraner || Redbone Coonhound',
            learnMore: '<a href="https://www.akc.org/dog-breeds/vizsla/">Learn More</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'low',
            trainingLevel: 'low',
            image: './assets/greyhound.jpg',
            alt: 'A greyhound sitting down.',
            breed: 'Greyhound',
            temperament: 'Quiet || Independent || Gentle',
            lifeExpectancy: '10-13 years',
            group: 'Hound Group',
            similarBreeds: 'Irish Wolfhound || Afghan Hound',
            learnMore: '<a href="https://www.akc.org/dog-breeds/greyhound/">Learn More</a>'
        },
        {
            activityLevel: 'low',
            attentionLevel: 'low',
            trainingLevel: 'high',
            image: './assets/catahoula-leopard.jpg',
            alt: 'A Catahoula Leopard Dog sitting down.',
            breed: 'Catahoula Leopard Dog',
            temperament: 'Inquisitive || Independent || Protective',
            lifeExpectancy: '10-14 years',
            group: 'Foundation Stock Service',
            similarBreeds: 'Rhodesian Ridgeback || Black and Tan Coonhound',
            learnMore: '<a href="https://www.akc.org/dog-breeds/catahoula-leopard-dog/">Learn More</a>'
        }
    ]
};

// (1) DOCUMENT READY FUNCTION
$(function() {
    console.log('document has loaded!');

    // once the DOM has loaded, initialize the app
    dogBreedApp.init();
});

// (2) INIT FUNCTION
dogBreedApp.init = () => {
    console.log('app has been initialized!');
    
    // (3) EVENT LISTENER - listen for when the user submits the form
    $('form').on('submit', function(event) {
        event.preventDefault();
        console.log('form has been submitted!')

        // (4) ERROR HANDLING
            // IF all form fields have NOT been filled out: alert the user
            // ELSE (below):

        // upon user submit, if there are no errors, store the users selections in variables
        const usersSizeChoice = $('input[name=size]:checked').val();
        const usersActivityChoice = $('input[name=activity]:checked').val();
        const usersAttentionChoice = $('input[name=attention]:checked').val();
        const usersTrainingChoice = $('input[name=training]:checked').val();
        console.log('SIZE: ', usersSizeChoice);
        console.log('ACTIVITY: ', usersActivityChoice);
        console.log('ATTENTION: ', usersAttentionChoice);
        console.log('TRAINING: ', usersTrainingChoice);

        // run the following functions
        dogBreedApp.usersChoices(usersSizeChoice, usersActivityChoice, usersAttentionChoice, usersTrainingChoice);
    });
};

// (5) USER CHOICE --> OBJECT CHOICE FUNCTION (take the user's choices and filter through the dogSize object to find and return a match)
dogBreedApp.usersChoices = (size, activity, attention, training) => {

    // find the dog size array that matches the user's size choice
    const dogSizeOptions = dogBreedApp.dogSize[size];
    console.log('DOG SIZE ARRAY: ', dogSizeOptions);
    dogSizeOptions.filter((dogSizeOption) => {
        
        // filter through that dog size array and find the dog breed object with activity, attention, and training levels that match the user's choices
        if (activity === dogSizeOption.activityLevel && attention === dogSizeOption.attentionLevel && training === dogSizeOption.trainingLevel) {

            const usersBreed = dogSizeOption.breed;
            console.log('DOG BREED OBJECT: ', usersBreed)
        };
    });
};

// (6) DISPLAY DOG BREED ON SCREEN
    // display photo and accompanying text to the results section

// (7) BRING USER TO DISPLAY DOG BREED AUTOMATICALLY
    // upon form submit, if there are NO errors, automatically scroll the page down to the results displayed int he results section

// (8) RESET BUTTON
    // append a 'choose different traits' button underneath displayed image and text
    // add an event listener to button so that, when it's clicked, it (a) removes the appended content, (b) scrolls to the top of the page to allow user to choose new options