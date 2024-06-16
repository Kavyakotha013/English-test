
// script.js

// ... (unchanged functions)

function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('main > section, main > div.container').forEach(section => {
      section.style.display = 'none';
  });
  var selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
      selectedSection.style.display = 'flex';
  }
  var aboutUsSection = document.getElementById('aboutUsSection');
  var contactSection = document.getElementById('contactSection');
  if (aboutUsSection && contactSection) {
      aboutUsSection.style.display = 'none';
      contactSection.style.display = 'none';
  }
  // Additional actions based on the section
  if (sectionId === 'userDetailsContainer') {
      displayUserDetails();
  } else if (sectionId === 'registrationFormContainer') {
      resetRegistrationForm();
  } else if (sectionId === 'aboutUsSection') {
      // Add logic to display content for the 'About Us' section
      document.getElementById('aboutUsSection').style.display = 'block';
      window.scrollTo(0, 0); // Scroll to the top
      
  }
  else if (sectionId === 'testContainer') {
    // Additional logic for the test container
    displayQuestionWithTimer();
}

  // Display the selected section
  document.getElementById(sectionId).style.display = 'block';
}


function handleRegistration() {
    // Capture entered email and username
    var enteredEmail = document.getElementById('newEmail').value;
    var enteredUsername = document.getElementById('newUsername').value;

    // Display email and username in User Details
    var userDetails = document.getElementById('userDetails');
    userDetails.innerText = 'Username: ' + enteredUsername + ', Email: ' + enteredEmail;

    // Display the User Details section
    showSection('userDetailsContainer');

    // Display the success message
    document.getElementById('registrationSuccessMessage').style.display = 'block';

    // Prevent the form from submitting (for demonstration purposes)
    return false;
}
function startQuestionTimer() {
  let timerSeconds = 30;
  const timerElement = document.getElementById('timer');

  function updateTimer() {
      timerElement.innerText = timerSeconds;
      if (timerSeconds > 0) {
          timerSeconds--;
          setTimeout(updateTimer, 1000);
      } else {
          // Handle timeout (e.g., move to the next question)
          submitTest();
      }
  }

  // Start the timer
  updateTimer();
}

function displayUserDetails() {
    // Check if the user is registered
    var userDetailsMessage = document.getElementById('userMessage');
    var userDetails = document.getElementById('userDetails');
    if (userDetails.innerText.trim() !== '') {
        userDetailsMessage.style.display = 'none';
    } else {
        userDetailsMessage.style.display = 'block';
    }
}

function logout() {
    // Clear user details
    var userDetails = document.getElementById('userDetails');
    userDetails.innerText = '';

    // Hide the success message
    document.getElementById('registrationSuccessMessage').style.display = 'none';

    // Show the registration form
    showSection('registrationFormContainer');
}

function resetRegistrationForm() {
    // Reset the registration form
    document.getElementById('registrationForm').reset();

    // Hide the success message
    document.getElementById('registrationSuccessMessage').style.display = 'none';
}

function selectTopic(topic) {
    // Handle topic selection (you can add your logic here)
    alert('Selected Topic: ' + topic);
}

// Remaining Scripts
const topics = [
    {
     name: 'Parts of speech',
        questions: [
  
  {
    question: '(Q)  What part of speech describes a verb, adjective, or adverb and answers when? where? how? and to what extent?',
    choices: ['Verb', 'Adjective', 'Adverb', 'Preposition', 'Noun'],
    correctAnswer: 2,
  },
  {
    question: '(Q)  What part of speech connects words or groups of words? Examples are for, and, nor, but, or, yet, and so?',
    choices: ['Preposition', 'Adverb', 'Conjunction', 'Interjection', 'Pronoun'],
    correctAnswer: 2,
  },
  {
    question: '(Q)  What part of speech substitutes for a noun or pronoun? Examples are we, they, him, I, you, me, she...',
    choices: ['Pronoun', 'Verb', 'Conjunction', 'Noun', 'Interjection'],
    correctAnswer: 0,
  },
  {
    question: '(Q)  What part of speech describes a noun or pronoun and answers the questions which one(s)? how many/much? or what kind(s)',
    choices: ['Verb', 'Adverb', 'Adjective', 'Preposition', 'Noun'],
    correctAnswer: 2,
  },
  {
    question: '(Q)  Which part of speech expresses a mild or sudden burst of emotion? Examples are wow! or no,',
    choices: ['Adverb', 'Noun', 'Interjection', 'Preposition', 'Adjective'],
    correctAnswer: 2,
  },
  {
    question: '(Q)  Which part of speech describes the distance/placement/proximity of one word and another word in a sentence? Examples are on, to, behind, with...',
    choices: ['Adverb', 'Preposition', 'Interjection', 'Noun', 'Conjunction'],
    correctAnswer: 1,
  },
  {
    question: '(Q)  What part of speech describes a person, place, thing, or idea? Examples are house, jury, determination.',
    choices: ['Noun', 'Pronoun', 'Adjective', 'Interjection', 'Conjunction'],
    correctAnswer: 0,
  },
  {
    question: '(Q)  What type of pronouns are I, we, she, they, him, and us? They refer to "people."',
    choices: ['Personal pronoun', 'Reflexive pronoun', 'Relative pronoun', 'Reciprocal pronoun'],
    correctAnswer: 0,
  },
  {
    question: '(Q)  Robert was an unwise king; he was the king of seven kingdoms. What type of pronoun is found in this sentence?',
    choices: ['Subject', 'Object', 'Not clear', 'None'],
    correctAnswer: 0,
  },
  {
    question: '(Q)  The verbs seem, is, was and had when used alone are what kind of verbs?',
    choices: ['Linking', 'Action', 'Helping', 'None'],
    correctAnswer: 0,
  },
  {
    question: '(Q)  What type of pronouns are me, them her, him, us? They usually belong in the predicate.',
    choices: ['Object', 'Subject', 'Both', 'None'],
    correctAnswer: 0,
  },
  {
    question: '(Q)  A verb that describes physical or mental action is called what type of verb?',
    choices: ['Linking verb', 'Action verb', 'Helping verb', 'None'],
    correctAnswer: 1,
  },
  {
    question: '(Q)  A noun that names a group of things is called what type of noun? It rarely ends in "s."',
    choices: ['Collective', 'Proper', 'Uncountable', 'Concrete'],
    correctAnswer: 0,
  },
  {
    question: '(Q)  What type of noun is always capitalized? (John, Arizona, France...)',
    choices: ['Proper', 'Common', 'Countable', 'Collective'],
    correctAnswer: 0,
  },
  {
    question:'(Q)  What type of noun can be perceived by the five senses? (table, bird, school, beach...)',
    choices: ['Proper', 'Concrete', 'Collective', 'None'],
    correctAnswer: 1,
  },
  {
    question: '(Q)  What type of noun is made up of two or more words? (policeman, father-in-law, real estate...)',
    choices: ['Proper', 'Compound', 'Collective', 'None'],
    correctAnswer: 1,
  },
  {
    question: '(Q)  What type of noun cannot be perceived by the senses? (love, ambition, liberty..)',
    choices: ['Abstract', 'Proper', 'Common', 'Collective'],
    correctAnswer: 0,
  },
  {
    question: '(Q)  The words a, an, and, the are called what',
    choices: ['Articles', 'Comparative', 'Superlative', 'None'],
    correctAnswer: 0,
  },
  {
    question: '(Q)  What kind of article is "the"? (it indicates something specific)',
    choices: ['Definite', 'Indefinite', 'Not clear', 'None'],
    correctAnswer: 0,
  },
  {
    question: '(Q)  What is the name of the word that the pronoun stands for or refers to in a sentence? (Mary took her friend with her. "Mary" is the _____________" for the pronoun "her".',
    choices: ['Antecedent', 'Personal', 'Not clear', 'None'],
    correctAnswer: 0,
  },
  {
    question: '(Q)  Which word must be able to be switched with the word "because" for it to be a conjunction? (otherwise, it\'s a preposition)',
    choices: ['But', 'Or', 'Because', 'For', 'Yet'],
    correctAnswer: 3,
  },
  {
    question: '(Q)  Conjunctions used in pairs are called what kind of conjunctions? (both...and/either...or/neither...nor...) EX: I want both pizza and hot dogs.',
    choices: ['Correlative', 'Complex', 'Compound', 'None'],
    correctAnswer: 0,
  },
  {
    question: '(Q)  (She, Her) and Sara went to the store. Which is the correct pronoun to use?',
    choices: ['She', 'Her', 'Him', 'None'],
    correctAnswer: 0,
  },
  {
    question: '(Q)   I went camping with John and (he, him).',
    choices: ['Him', 'He', 'Not clear', 'None'],
    correctAnswer: 0,
  },
  {
    question: '(Q)   Which verb phrase is used in the following sentence: They did not go running very far.',
    choices: ['Not go', 'Did not go running', 'Running', 'None'],
    correctAnswer: 1,
  },
  {
    question: '(Q)  Which adjective is the word "American" in the following sentence? The soldiers saluted the American flag.',
    choices: ['Demonstrative adjective', 'Quantitative Adjective', 'Possessive Adjective', 'Interrogative Adjective'],
    correctAnswer: 0,
  },
  {
    question: '(Q)  What word is described by the adverb "inside" in this sentence? A warm fire beckoned the weary travelers inside.',
    choices: ['Beckoned', 'Travelers', 'Fire', 'None'],
    correctAnswer: 0,
  },
  {
    question: '(Q)  There is always a ______at the beginning of prepositional phrases, and it ends with a noun or pronoun.',
    choices: ['Preposition', 'Conjunction', 'Adverb', 'None'],
    correctAnswer: 0,
  },
  {
    question: '(Q)  Which part of speech is this underlined word? The boys went inside to eat dinner.',
    choices: ['Adverb', 'Preposition', 'Noun', 'Conjunction'],
    correctAnswer: 0,
  },
  {
    question: '(Q)  Which word is a preposition when it is substituted with the word "except," otherwise it is a coordinating conjunction?',
    choices: ['But', 'So', 'However', 'And'],
    correctAnswer: 0,
  }, 
                 
        ]
    },

/////////////////////////////////////////////////////////////////////////////////
    {
        name: 'Word Formation',
        questions: [
          // quiz.js (add these questions to the 'Word Formation' section)

          {
            "question": "(Q)  He escaped from __________ by playing video games every afternoon.",
            "choices": ["Realism", "Realistic", "Real", "Reality", "Really"],
            "correctAnswer": 3
          },
          
          {
            "question": "(Q)  He argued ________________ .",
            "choices": ["Convinced", "Convince", "Convincingly", "Convincing", "Conviction"],
            "correctAnswer": 2
          },
          
          {
            "question": "(Q)  The rain will _______________ soon.",
            "choices": ["Weak", "Weakly", "Weaken", "Weakness"],
            "correctAnswer": 2
          },
          
          {
            "question": "(Q)  He's been having treatment for two months now without any ___________________",
            "choices": ["Improvement", "Improve", "Improved"],
            "correctAnswer": 1
          },
          
          {
            "question": "(Q)  Ella complained that the company never gave her any ___________________ for her work.",
            "choices": ["Recognise", "Recognition", "Recognisable", "Recognisably"],
            "correctAnswer": 1
          },
          
          {
            "question": "(Q)  He´s very sensitive, he can´t accept any ________________.",
            "choices": ["Criticise", "Critically", "Criticism", "Critised"],
            "correctAnswer": 3
          },
          
          {
            "question": "(Q)  I can´t take care of the children alone. It´s too much _______________.",
            "choices": ["Responsible", "Responsibly", "Responsibility", "Responsability"],
            "correctAnswer": 2
          },
          
          {
            "question": "(Q)  He got a prize for costume _________________. His costumes were very creative.",
            "choices": ["Originality", "Original", "Originally", "Origin"],
            "correctAnswer": 0
          },
          
          {
            "question": "(Q)  I _____________dancing to eating out.",
            "choices": ["Preference", "Prefer", "Preferably", "Preferable"],
            "correctAnswer": 1
          },
          
          {
            "question": "(Q)  Staying at home is ____________to going out.",
            "choices": ["Prefer", "Preferably", "Preference", "Preferable"],
            "correctAnswer": 3
          },
          
          {
            "question": "(Q)  Choose the correct prefix for the word \"happen.\"",
            "choices": ["Re-", "Un-", "Pre-", "Dis-"],
            "correctAnswer": 1
          },
          
          {
            "question": "(Q)  Choose the correct word formation for \"decide.\"",
            "choices": ["Decision", "Deciding", "Decided", "Decideful"],
            "correctAnswer": 0
          },
          
          {
            "question": "(Q)  Select the correct prefix for the word \"connect.\"",
            "choices": ["Re-", "Un-", "Pre-", "In-"],
            "correctAnswer": 0
          },
          
          {
            "question": "(Q)  What is the noun form of the verb \"analyze\"?",
            "choices": ["Analyzing", "Analyst", "Analytical", "Analyzeful"],
            "correctAnswer": 1
          },
          
          {
            "question": "(Q)  What is the suffix in the word \"helpful\"?",
            "choices": ["-ly", "-ness", "-ful", "-ing"],
            "correctAnswer": 2
          },
          

]
 },
 ///////////////////////////////////////////////////
    {
        name: 'Tenses',
        questions: [
          {
            question: ' (Q)   What is the present simple tense of the verb "to eat"?',
            choices: ['Eat', 'Eats', 'Ate', 'Eaten'],
            correctAnswer: 0,
        },
        {
            question: ' (Q)   Which sentence is in the past continuous tense?',
            choices: [
                'She will bake a cake tomorrow.',
                'They are playing basketball now.',
                'I was studying when the phone rang.',
                'He has already finished his homework.',
            ],
            correctAnswer: 2,
        },
        {
            question: ' (Q)   What is the future perfect tense of the verb "to write"?',
            choices: ['Will write', 'Writes', 'Has written', 'Will have written'],
            correctAnswer: 3,
        },
        {
            question: ' (Q)   Identify the sentence in the present perfect continuous tense.',
            choices: [
                'They will have arrived by noon.',
                'She is dancing at the party.',
                'I have been waiting for an hour.',
                'We played soccer yesterday.',
            ],
            correctAnswer: 2,
        },
        {
            question: ' (Q)   Choose the correct form ?',
            choices: ['She had already left.', 'She already left.'],
            correctAnswer: 0,
        },
        {
            question: ' (Q)   What is the past perfect continuous tense of the verb "to study"?',
            choices: [
                'Had studied',
                'Was studying',
                'Had been studying',
                'Will have studied',
            ],
            correctAnswer: 2,
        },
        {
            question: ' (Q)   Which sentence is in the future continuous tense?',
            choices: [
                'I have visited that museum.',
                'They will be eating dinner at 7 PM.',
                'He sings beautifully.',
                'We were playing cards last night.',
            ],
            correctAnswer: 1,
        },
        {
            question: ' (Q)   What is the present perfect tense of the verb "to travel"?',
            choices: [
                'Will travel',
                'Travels',
                'Has traveled',
                'Is traveling',
            ],
            correctAnswer: 2,
        },
        {
            question: ' (Q)   Identify the sentence in the past simple tense.',
            choices: [
                'She has read that book already.',
                'They were singing at the concert.',
                'I am going to the store.',
                'We will be arriving shortly.',
            ],
            correctAnswer: 1,
        },
        {
            question: ' (Q)   Choose the correct form ? ',
            choices: ['I will finish my work.', 'I will finished my work.'],
            correctAnswer: 0,
        },
 {
  question: ' (Q)   Choose the sentence in the past perfect tense:',
  choices: [
      'She will finish her work by 5 PM.',
      'They are playing basketball.',
      'He had already eaten when I arrived.',
      'I will visit the museum tomorrow.',
  ],
  correctAnswer: 2
},

{
  question: ' (Q)   Identify the correct sentence in the present continuous tense:',
  choices: [
      'She reads a book every night.',
      'They will visit us next week.',
      'I am studying for my exam at the moment.',
      'He had completed the task by noon.',
  ],
  correctAnswer: 2
},

{
  question: ' (Q)   What is the future perfect tense of the verb "eat"?',
  choices: [
      'Will eat',
      'Has eaten',
      'Will have eaten',
      'Eating',
  ],
  correctAnswer: 2
},

{
  question: ' (Q)   Choose the sentence in the past continuous tense:',
  choices: [
      'They visit the zoo every summer.',
      'I have already finished my homework.',
      'She was reading a novel yesterday.',
      'He will go to the party tomorrow.',
  ],
  correctAnswer: 2
},

{
  question: ' (Q)   Identify the sentence in the present perfect continuous tense:',
  choices: [
      'I will cook dinner tonight.',
      'She has visited that museum.',
      'We have been waiting for an hour.',
      'He sings beautifully.',
  ],
  correctAnswer: 2
},

// Difficult difficulty
{
  question: ' (Q)   What is the future perfect continuous tense of the verb "run"?',
  choices: [
      'Will run',
      'Will be running',
      'Will have run',
      'Running',
  ],
  correctAnswer: 2
},

{
  question: ' (Q)   Choose the sentence in the past perfect continuous tense:',
  choices: [
      'She has lived here for ten years.',
      'He has completed the project.',
      'They had been working on the assignment.',
      'I will be studying tomorrow.',
  ],
  correctAnswer: 2
},

{
  question: ' (Q)   Identify the correct sentence in the present perfect continuous tense:',
  choices: [
      'They have arrived just now.',
      'I am going to the store.',
      'We have been watching a movie for two hours.',
      'She had painted the wall.',
  ],
  correctAnswer: 2
},

{
  question: ' (Q)   What is the past perfect continuous tense of the verb "swim"?',
  choices: [
      'Had swam',
      'Had been swimming',
      'Swam',
      'Swimming',
  ],
  correctAnswer: 1
},

{
  question: ' (Q)   Choose the sentence in the future continuous tense:',
  choices: [
      'He played the guitar yesterday.',
      'I will be sleeping at 10 PM.',
      'She has written a novel.',
      'They are singing a song.',
  ],
  correctAnswer: 1
    },
 ]
    },
  //////  /////////////////////////////////////////////////////////////////////////////////////////////////////
   {
      name: 'Noun-Pronoun Agreement',
      questions: [
        {
          question: '(Q)  Neither Paul nor Stephen should forget to mention personal stories about ________ subject.',
          choices: ['His', 'Their', 'They', 'Them'],
          correctAnswer: 1,
        },
        {
          question: '(Q)  Neither Paul nor Dennis will have trouble finding information for _______ report.',
          choices: ['Their', 'His', 'Them', 'None of the above'],
          correctAnswer: 1,
        },
        {
          question: '(Q)  Dennis, the class topper, has chosen Shakespeare as ______ topic.',
          choices: ['Her', 'His', 'Their', 'None of the above'],
          correctAnswer: 1,
        },
        {
          question: '(Q)  Everyone must know that __________must gather facts, not opinions.',
          choices: ['He or she', 'They', 'Their', 'None of the above'],
          correctAnswer: 1,
        },
        {
          question: '(Q)  Several other classmates have also chosen __________ topic.',
          choices: ['Their', 'His', 'Theys', 'Her'],
          correctAnswer: 0,
        },
        {
          question: '(Q)  Each of the boys refused help, saying that _________ would proofread the report on ________ own.',
          choices: ['He, his', 'They, their', 'We, our', 'She, her'],
          correctAnswer: 0,
        },
        {
          question: '(Q)  Nobody likes to discover that ___________ have just read a dull report about an interesting subject.',
          choices: ['He or she', 'They', 'Them', 'Their'],
          correctAnswer: 1,
        },
        {
          question: '(Q)  Martin has just chosen George Washington as _________ topic for his research paper.',
          choices: ['Their', 'His', 'Her', 'Them'],
          correctAnswer: 1,
        },
        {
          question: '(Q)  Either Maggie or Sadie offered ________ help with proofreading.',
          choices: ['Their', 'Her', 'His', 'None of the above'],
          correctAnswer: 1,
        },
        {
          question: '(Q)  Each of these founding fathers is known to have left ________ mark on the world.',
          choices: ['Their', 'His', 'Her', 'None of the above'],
          correctAnswer: 1,
        },
      ]
  },
  {
    name: 'Antonym and Synonyms',
    questions: [
      {
        "question": "………..is the synonym of ‘Denial’",
        "choices": ["Rejection", "Acceptance", "Thoughtful", "Pretend"],
        "correctAnswer": 0
      },
      {
        "question": "The antonym of ‘Compulsory’ is …………………",
        "choices": ["Voluntary", "Permissible", "Absolutely", "Happily"],
        "correctAnswer": 0
      },
      {
        "question": "…………….is synonym for ‘Futile’",
        "choices": ["Possible", "Impossible", "Probable", "Interesting"],
        "correctAnswer": 1
      },
      {
        "question": "…………… is the synonym of ‘Ambitious’",
        "choices": ["Problematic", "Kind", "Determined", "Hard working"],
        "correctAnswer": 2
      },
      {
        "question": "The antonym of ‘Artificial’ is ………………",
        "choices": ["Tailored", "Ordinary", "Possible", "Natural"],
        "correctAnswer": 3
      },
      {
        "question": "Choose the best expression for the meaning of the underlined word.\n\nHe refused to ‘kow tow’ to the government’s wishes on this issue.",
        "choices": ["Be helpful", "Be defensive", "Be supportive", "Be submissive"],
        "correctAnswer": 1
      },
      {
        "question": "………..is the synonym of ‘Contemplate’",
        "choices": ["Circle", "Think about", "Pattern", "Model"],
        "correctAnswer": 1
      },
      {
        "question": "The antonym of ‘Reveal’ is …………….",
        "choices": ["Disclose", "Tell", "Hide", "Show"],
        "correctAnswer": 2
      },
      {
        "question": "Choose the best expression for the meaning of the underlined word.\n\nIt was a ‘perilous’ journey across the mountain.",
        "choices": ["Tiring", "Thrilling", "Deadly", "Risky"],
        "correctAnswer": 3
      },
      {
        "question": "………..is the synonym of ‘Assignment’",
        "choices": ["Task", "Leave", "Quit", "Resign"],
        "correctAnswer": 0
      },
      {
        "question": "The antonyms of ‘Conflict’",
        "choices": [
          "Collision",
          "Competition",
          "War",
          "Peace"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Select the best expresses opposite meaning of the underlined word.\nWe have made ‘tentative’ plans for a holiday.",
        "choices": [
          "Permanent",
          "Careful",
          "Elaborate",
          "Definite"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Choose the opposite of the word ‘Denial’",
        "choices": [
          "Acceptance",
          "Pretend",
          "Rejection",
          "Thoughtful"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Choose the correct opposite meaning of the word ‘Saturnine’",
        "choices": [
          "Awkward",
          "Cheerful",
          "Formative",
          "None of the above"
        ],
        "correctAnswer": 1
      },
      {
        "question": "The antonym of the word ‘Misapprehend’",
        "choices": [
          "Anticipate",
          "Defame",
          "Understand",
          "None of the above"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Choose the opposite of the word ‘Awkward’",
        "choices": [
          "Graceless",
          "Clumsy",
          "Easy",
          "Rustic"
        ],
        "correctAnswer": 2
      },
      {
        "question": "………is the synonym of ‘Pardon’",
        "choices": [
          "Excuse",
          "Produce",
          "Sell",
          "Develop"
        ],
        "correctAnswer": 0
      },
      {
        "question": "‘Mandatory’ is synonym word for …………",
        "choices": [
          "Real",
          "Required",
          "Bravery",
          "Discovery"
        ],
        "correctAnswer": 1
      },
      {
        "question": "Select the best expresses opposite word for underlined word.\nSome democratic countries believe in racial ‘segregation’.",
        "choices": [
          "Subordination",
          "Demination",
          "Integration",
          "Inferiority"
        ],
        "correctAnswer": 2
      },
      {
        "question": "Choose the option that expresses the meaning of the given word.\n‘Annoy’",
        "choices": [
          "Suppress",
          "Hatred",
          "Effective",
          "Bother"
        ],
        "correctAnswer": 3
      }
        
    ]
},
{
  name: 'Adjectives and Adverbs',
  questions: [
      
  ]
},
    
    // Add more topics with questions
];
let currentTopic = null;
let currentQuestionIndex = 0;
let userScore = 0;
let timer; // Variable to store the timer
let timerSeconds; // Variable to store the remaining time for the current question

function selectTopic(topicName) {
    // Check if the user is registered
    const userDetails = document.getElementById('userDetails');
    if (userDetails.innerText.trim() === '') {
        // User is not registered, display a message or take appropriate action
        alert('Not registered. Please register to take the test.');
        return;
    }

    // Find the selected topic
    currentTopic = topics.find(topic => topic.name === topicName);

    // Generate a random order for the questions and choices
    currentTopic.questions = generateRandomTestOrder(currentTopic);

    // Set up initial test state
    currentQuestionIndex = 0;
    userScore = 0;

    // Show the test container
    showSection('testContainer');

    // Display the first question
    displayQuestionWithTimer();
}

function startQuestionTimer() {
    timerSeconds = 30;
    const timerDisplay = document.getElementById('timer');
    const timerButton = document.getElementById('timerButton');

    function updateTimer() {
        timerDisplay.innerText = timerSeconds;
        timerButton.innerText = `Submit Answer (${timerSeconds}s)`;

        if (timerSeconds > 0) {
            timerSeconds--;
            timer = setTimeout(updateTimer, 1000);
        } else {
            // Move to the next question after 30 seconds
            submitTest();
        }
    }

    // Start the timer
    updateTimer();
}

function displayQuestionWithTimer() {
    // Display the current question and choices
    displayQuestion();

    // Start the timer for 30 seconds
    clearTimeout(timer); // Clear any existing timer
    startQuestionTimer();
}

function submitTest() {
  // Check if the user is registered
  const userDetails = document.getElementById('userDetails');
  if (userDetails.innerText.trim() === '') {
      alert('Not registered. Please register to take the test.');
      return;
  }

  // Check the selected answer
  const selectedChoice = document.querySelector('input[name="choice"]:checked');
  if (selectedChoice || timerSeconds === 0) {
      // If the user selected an answer or the timer ran out

      if (selectedChoice) {
          // If the user selected an answer within the time limit
          const selectedAnswer = parseInt(selectedChoice.value, 10);

          // Check if the answer is correct
          if (selectedAnswer === currentTopic.questions[currentQuestionIndex].correctAnswer) {
              userScore++;
          }
      }

      // Move to the next question
      currentQuestionIndex++;

      // Check if the test is complete
      if (currentQuestionIndex < currentTopic.questions.length) {
          // Display the next question with a timer
          displayQuestionWithTimer();
      } else {
          // Show the score container
          showSection('scoreContainer');

          // Display the user's score
          document.getElementById('scoreMessage').innerText = `You scored ${userScore} out of ${currentTopic.questions.length}.`;
      }
  } else {
      // If the user didn't select an answer and the timer is still running
      alert('Please select an answer before submitting.');
  }
}


function displayQuestion() {
    // Display the current question and choices
    const questionContainer = document.getElementById('questionContainer');
    const currentQuestion = currentTopic.questions[currentQuestionIndex];

    questionContainer.innerHTML = `
        <p>${currentQuestion.question}</p>
        <ul>
            ${currentQuestion.choices.map((choice, index) => `
                <li>
                    <input type="radio" name="choice" value="${index}" id="choice${index}">
                    <label for="choice${index}">${choice}</label>
                </li>
            `).join('')}
        </ul>
    
        <button id="timerButton" onclick="submitTest()">Submit Answer</button>
    `;
}

function goBackToTopics() {
    // Show the topics container
    showSection('topicsContainer');
}

// ... (previous code)

// Function to generate a random order of questions and shuffle choices
function generateRandomTestOrder(topic) {
    // Shuffle the order of questions for the selected topic
    shuffleArray(topic.questions);

    // Shuffle the order of choices for each question
    topic.questions.forEach(question => shuffleArray(question.choices));

    return topic.questions;
}

function selectTopic(topicName) {
    // Find the selected topic
    currentTopic = topics.find(topic => topic.name === topicName);

    // Generate a random order for the questions and choices
    currentTopic.questions = generateRandomTestOrder(currentTopic);

    // Set up initial test state
    currentQuestionIndex = 0;
    userScore = 0;

    // Show the test container
    showSection('testContainer');

    // Display the first question
    displayQuestionWithTimer();
}

// Function to shuffle array elements
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ... (remaining code)
