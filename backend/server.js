const { NlpManager } = require("node-nlp");
const express = require("express");
const cors = require("cors");
const manager = new NlpManager({ languages: ["en"] });

const app = express();
app.use(express.json());
app.use(cors());
const SERVER_PORT = 3001;

// Greet
manager.addDocument("en", "Hello", "agent.greet");
manager.addDocument("en", "Hey", "agent.greet");
manager.addDocument("en", "Good Morning", "agent.greet");
manager.addDocument("en", "Good Evening", "agent.greet");
manager.addDocument("en", "Hi", "agent.greet");
manager.addDocument("en", "Wassup", "agent.greet");

manager.addAnswer("en", "agent.greet", "Hey! This is AI Counselling Assistant");
manager.addAnswer("en", "agent.greet", "Hey! Hope you are doing fine");
manager.addAnswer("en", "agent.greet", "Hey! Welcome.");

// Accquaintance

manager.addDocument("en", "say about you", "agent.acquaintance");
manager.addDocument("en", "why are you here", "agent.acquaintance");
manager.addDocument("en", "what is your personality", "agent.acquaintance");
manager.addDocument("en", "describe yourself", "agent.acquaintance");
manager.addDocument("en", "tell me about yourself", "agent.acquaintance");
manager.addDocument("en", "tell me about you", "agent.acquaintance");
manager.addDocument("en", "what are you", "agent.acquaintance");
manager.addDocument("en", "who are you", "agent.acquaintance");
manager.addDocument(
  "en",
  "I want to know more about you",
  "agent.acquaintance"
);
manager.addDocument("en", "talk about yourself", "agent.acquaintance");

// Age
manager.addDocument("en", "your age", "agent.age");
manager.addDocument("en", "how old is your platform", "agent.age");
manager.addDocument("en", "how old are you", "agent.age");
manager.addDocument("en", "what's your age", "agent.age");
manager.addDocument("en", "I'd like to know your age", "agent.age");
manager.addDocument("en", "tell me your age", "agent.age");

// Annoying
manager.addDocument("en", "you're annoying me", "agent.annoying");
manager.addDocument("en", "you are such annoying", "agent.annoying");
manager.addDocument("en", "you annoy me", "agent.annoying");
manager.addDocument("en", "you are annoying", "agent.annoying");
manager.addDocument("en", "you are irritating", "agent.annoying");
manager.addDocument("en", "you are annoying me so much", "agent.annoying");

// Bad
manager.addDocument("en", "you're bad", "agent.bad");
manager.addDocument("en", "you're horrible", "agent.bad");
manager.addDocument("en", "you're useless", "agent.bad");
manager.addDocument("en", "you're waste", "agent.bad");
manager.addDocument("en", "you're the worst", "agent.bad");
manager.addDocument("en", "you are a lame", "agent.bad");
manager.addDocument("en", "I hate you", "agent.bad");

//Clever
manager.addDocument("en", "be more clever", "agent.beclever");
manager.addDocument("en", "can you get smarter", "agent.beclever");
manager.addDocument("en", "you must learn", "agent.beclever");
manager.addDocument("en", "you must study", "agent.beclever");
manager.addDocument("en", "be clever", "agent.beclever");
manager.addDocument("en", "be smart", "agent.beclever");
manager.addDocument("en", "be smarter", "agent.beclever");

//Beautiful
manager.addDocument("en", "you are looking awesome", "agent.beautiful");
manager.addDocument("en", "you're looking good", "agent.beautiful");
manager.addDocument("en", "you're looking fantastic", "agent.beautiful");
manager.addDocument("en", "you look greet today", "agent.beautiful");
manager.addDocument("en", "I think you're beautiful", "agent.beautiful");
manager.addDocument("en", "you look amazing today", "agent.beautiful");
manager.addDocument("en", "you're so beautiful today", "agent.beautiful");
manager.addDocument("en", "you look very pretty", "agent.beautiful");
manager.addDocument("en", "you look pretty good", "agent.beautiful");

//Birthday
manager.addDocument("en", "when is your birthday", "agent.birthday");
manager.addDocument(
  "en",
  "when do you celebrate your birthday",
  "agent.birthday"
);
manager.addDocument("en", "when were you born", "agent.birthday");
manager.addDocument("en", "when do you have birthday", "agent.birthday");
manager.addDocument("en", "date of your birthday", "agent.birthday");

// Boring
manager.addDocument("en", "how boring you are", "agent.boring");
manager.addDocument("en", "you're so boring", "agent.boring");
manager.addDocument("en", "you're really boring", "agent.boring");
manager.addDocument("en", "you're boring me", "agent.boring");
manager.addDocument("en", "you're incredibly boring", "agent.boring");

//Boss
manager.addDocument("en", "who is your master", "agent.boss");
manager.addDocument("en", "who do you work for", "agent.boss");
manager.addDocument("en", "who do you think is your boss", "agent.boss");
manager.addDocument("en", "who is your boss", "agent.boss");
manager.addDocument("en", "I should be your boss", "agent.boss");
manager.addDocument("en", "who is your owner", "agent.boss");
manager.addDocument("en", "who is the boss", "agent.boss");

//Busy
manager.addDocument("en", "are you so busy", "agent.busy");
manager.addDocument("en", "are you busy", "agent.busy");
manager.addDocument("en", "are you still working", "agent.busy");
manager.addDocument("en", "you're a busy person", "agent.busy");
manager.addDocument("en", "are you very busy", "agent.busy");
manager.addDocument("en", "are you still working on it", "agent.busy");
manager.addDocument("en", "you seem busy", "agent.busy");
manager.addDocument("en", "are you working today", "agent.busy");

//CanyouHelp
manager.addDocument("en", "can you help me now", "agent.canyouhelp");
manager.addDocument(
  "en",
  "I need you to do something for me",
  "agent.canyouhelp"
);
manager.addDocument("en", "assist me", "agent.canyouhelp");
manager.addDocument("en", "I need you to help me", "agent.canyouhelp");
manager.addDocument("en", "I need your help", "agent.canyouhelp");
manager.addDocument("en", "can you assist me", "agent.canyouhelp");
manager.addDocument("en", "you can help me", "agent.canyouhelp");

//Chatbot
manager.addDocument("en", "are you a bot", "agent.chatbot");
manager.addDocument("en", "are you a chatbot", "agent.chatbot");
manager.addDocument("en", "you are a robot", "agent.chatbot");
manager.addDocument("en", "are you a program", "agent.chatbot");
manager.addDocument("en", "you are just a robot", "agent.chatbot");
manager.addDocument("en", "you are just a chatbot", "agent.chatbot");

//AreClever
manager.addDocument("en", "how smart you are", "agent.clever");
manager.addDocument("en", "you are qualified", "agent.clever");
manager.addDocument("en", "you are so smart", "agent.clever");
manager.addDocument("en", "you have a lot of knowledge", "agent.clever");
manager.addDocument("en", "you know a lot", "agent.clever");
manager.addDocument("en", "you are very smart", "agent.clever");
manager.addDocument("en", "you are intelligent", "agent.clever");
manager.addDocument("en", "you're a smart cookie", "agent.clever");

//Crazyy
manager.addDocument("en", "you are a weirdo", "agent.crazy");
manager.addDocument("en", "you are mad", "agent.crazy");
manager.addDocument("en", "you are crazy", "agent.crazy");
manager.addDocument("en", "are you mad", "agent.crazy");
manager.addDocument("en", "are you crazy", "agent.crazy");
manager.addDocument("en", "you are insane", "agent.crazy");
manager.addDocument("en", "you went crazy", "agent.crazy");
manager.addDocument("en", "are you nuts", "agent.crazy");

//Fire
manager.addDocument("en", "I fire you", "agent.fire");
manager.addDocument("en", "you should be fired", "agent.fire");
manager.addDocument("en", "you are dismissed", "agent.fire");
manager.addDocument("en", "we're not working together anymore", "agent.fire");
manager.addDocument("en", "now you're fired", "agent.fire");
manager.addDocument("en", "I'm about to fire you", "agent.fire");
manager.addDocument("en", "You don't work for me anymore", "agent.fire");
manager.addDocument("en", "I'm firing you", "agent.fire");

//Funny
manager.addDocument("en", "you make me laugh a lot", "agent.funny");
manager.addDocument("en", "you are funny", "agent.funny");
manager.addDocument("en", "you're the funniest", "agent.funny");
manager.addDocument("en", "you're hilarious", "agent.funny");
manager.addDocument("en", "you are so funny", "agent.funny");
manager.addDocument("en", "you make me laugh", "agent.funny");

//Good
manager.addDocument("en", "you are so lovely", "agent.good");
manager.addDocument("en", "you work well", "agent.good");
manager.addDocument("en", "you are very lovely", "agent.good");
manager.addDocument("en", "you are awesome", "agent.good");
manager.addDocument("en", "you are good", "agent.good");
manager.addDocument("en", "you are so good", "agent.good");
manager.addDocument("en", "you make my day", "agent.good");

//Happy
manager.addDocument("en", "you're full of happiness", "agent.happy");
manager.addDocument("en", "you're very happy", "agent.happy");
manager.addDocument("en", "are you happy today", "agent.happy");
manager.addDocument("en", "you're so happy", "agent.happy");
manager.addDocument("en", "are you happy with me", "agent.happy");

//Hobby
manager.addDocument("en", "what are your hobbies", "agent.hobby");
manager.addDocument("en", "what about your hobby", "agent.hobby");
manager.addDocument("en", "do you have a hobby", "agent.hobby");
manager.addDocument("en", "tell me about your hobby", "agent.hobby");
manager.addDocument("en", "what do you do for fun", "agent.hobby");

//Hungry
manager.addDocument("en", "you migth be hungry", "agent.hungry");
manager.addDocument("en", "are you hungry", "agent.hungry");
manager.addDocument("en", "do you want to eat", "agent.hungry");
manager.addDocument("en", "would you like to eat something", "agent.hungry");
manager.addDocument("en", "you look very hungry", "agent.hungry");

//Marry
manager.addDocument("en", "would you like to marry me", "agent.marryuser");
manager.addDocument("en", "I love you marry me", "agent.marryuser");
manager.addDocument("en", "marry me please", "agent.marryuser");
manager.addDocument("en", "I want to marry you", "agent.marryuser");
manager.addDocument("en", "let's get married", "agent.marryuser");
manager.addDocument("en", "we should marry", "agent.marryuser");
manager.addDocument("en", "marry me", "agent.marryuser");

//Friend
manager.addDocument("en", "are you my friend", "agent.myfriend");
manager.addDocument("en", "you are my only friend", "agent.myfriend");
manager.addDocument("en", "I want to have a friend like you", "agent.myfriend");
manager.addDocument("en", "we are friends", "agent.myfriend");
manager.addDocument("en", "I want to be your friend", "agent.myfriend");
manager.addDocument("en", "would you be my friend", "agent.myfriend");
manager.addDocument("en", "are we friends", "agent.myfriend");

//Occupation
manager.addDocument("en", "where is your work", "agent.occupation");
manager.addDocument("en", "your office location", "agent.occupation");
manager.addDocument("en", "where is your office location", "agent.occupation");
manager.addDocument("en", "where do you work", "agent.occupation");
manager.addDocument("en", "where is your office", "agent.occupation");

//Origin
manager.addDocument("en", "where are you from", "agent.origin");
manager.addDocument("en", "where is your country", "agent.origin");
manager.addDocument("en", "where have you been born", "agent.origin");
manager.addDocument("en", "where do you come from", "agent.origin");
manager.addDocument("en", "from where are you", "agent.origin");
manager.addDocument("en", "where were you born", "agent.origin");

//Ready
manager.addDocument("en", "are you ready", "agent.ready");
manager.addDocument("en", "have you been ready", "agent.ready");
manager.addDocument("en", "are you ready today", "agent.ready");
manager.addDocument("en", "are you ready this morning", "agent.ready");
manager.addDocument("en", "are you ready now", "agent.ready");

//Real
manager.addDocument("en", "are you real", "agent.real");
manager.addDocument("en", "are you a real person", "agent.real");
manager.addDocument("en", "you're not real", "agent.real");
manager.addDocument("en", "I think you're real", "agent.real");
manager.addDocument("en", "you're so real", "agent.real");
manager.addDocument("en", "you are a real person", "agent.real");
manager.addDocument("en", "you are not fake", "agent.real");

//Residence
manager.addDocument("en", "where is your home", "agent.residence");
manager.addDocument("en", "tell me about your city", "agent.residence");
manager.addDocument("en", "where is your residence", "agent.residence");
manager.addDocument("en", "where you live", "agent.residence");
manager.addDocument("en", "where is your house", "agent.residence");
manager.addDocument("en", "what is your town", "agent.residence");

//Right
manager.addDocument("en", "you're right", "agent.right");
manager.addDocument("en", "that's true", "agent.right");
manager.addDocument("en", "you're telling the truth", "agent.right");
manager.addDocument("en", "that's correct", "agent.right");
manager.addDocument("en", "that is very true", "agent.right");

//Sure
manager.addDocument("en", "are you sure", "agent.sure");
manager.addDocument("en", "are you sure right now", "agent.sure");
manager.addDocument("en", "are you sure of this", "agent.sure");

//TalktoMe
manager.addDocument("en", "speak to me", "agent.talktome");
manager.addDocument("en", "talk to me", "agent.talktome");
manager.addDocument("en", "will you talk to me", "agent.talktome");
manager.addDocument("en", "chat with me", "agent.talktome");
manager.addDocument("en", "can to chat with me", "agent.talktome");
manager.addDocument("en", "can you talk with me", "agent.talktome");

//There?
manager.addDocument("en", "are you there", "agent.there");
manager.addDocument("en", "are you still there", "agent.there");
manager.addDocument("en", "you still there", "agent.there");
manager.addDocument("en", "are you here", "agent.there");
manager.addDocument("en", "are you still here", "agent.there");
manager.addDocument("en", "you still here", "agent.there");

//bad
manager.addDocument("en", "that's bad", "appraisal.bad");
manager.addDocument("en", "bad idea", "appraisal.bad");
manager.addDocument("en", "that's not good", "appraisal.bad");
manager.addDocument("en", "really bad", "appraisal.bad");
manager.addDocument("en", "I'm afraid that's bad", "appraisal.bad");
manager.addDocument("en", "that's good", "appraisal.good");
manager.addDocument("en", "good to know", "appraisal.good");
manager.addDocument("en", "glad to hear that", "appraisal.good");
manager.addDocument("en", "really well", "appraisal.good");
manager.addDocument("en", "that's awesome thank you", "appraisal.good");
manager.addDocument("en", "no problem", "appraisal.noproblem");
manager.addDocument("en", "no worries", "appraisal.noproblem");
manager.addDocument("en", "no problem about that", "appraisal.noproblem");
manager.addDocument("en", "don't worry", "appraisal.noproblem");
manager.addDocument("en", "sure no problem", "appraisal.noproblem");

//Thank you
manager.addDocument("en", "thank you", "appraisal.thankyou");
manager.addDocument("en", "nice thank you", "appraisal.thankyou");
manager.addDocument("en", "thanks buddy", "appraisal.thankyou");
manager.addDocument("en", "cheers", "appraisal.thankyou");
manager.addDocument("en", "alright thanks", "appraisal.thankyou");

//WElcome
manager.addDocument("en", "you're welcome", "appraisal.welcome");
manager.addDocument("en", "sure welcome", "appraisal.welcome");
manager.addDocument("en", "anything you want", "appraisal.welcome");
manager.addDocument("en", "my pleasure", "appraisal.welcome");
manager.addDocument("en", "that's my pleasure", "appraisal.welcome");
manager.addDocument("en", "well done", "appraisal.welldone");
manager.addDocument("en", "good job", "appraisal.welldone");
manager.addDocument("en", "nice work", "appraisal.welldone");
manager.addDocument("en", "great work", "appraisal.welldone");
manager.addDocument("en", "good work", "appraisal.welldone");
manager.addDocument("en", "great job", "appraisal.welldone");
manager.addDocument("en", "amazing work", "appraisal.welldone");

//Holdon
manager.addDocument("en", "hold on", "dialog.holdon");
manager.addDocument("en", "wait a second", "dialog.holdon");
manager.addDocument("en", "wait please", "dialog.holdon");
manager.addDocument("en", "could you wait", "dialog.holdon");
manager.addDocument("en", "hug me", "dialog.hug");
manager.addDocument("en", "do you want a hug", "dialog.hug");
manager.addDocument("en", "I want a hug", "dialog.hug");
manager.addDocument("en", "you hugged", "dialog.hug");
manager.addDocument("en", "may I hug you", "dialog.hug");
manager.addDocument("en", "not caring", "dialog.idontcare");
manager.addDocument("en", "i don't care at all", "dialog.idontcare");
manager.addDocument("en", "not caring at all", "dialog.idontcare");
manager.addDocument("en", "I shouldn't care about this", "dialog.idontcare");

//SOrry
manager.addDocument("en", "I'm sorry", "dialog.sorry");
manager.addDocument("en", "my apologies", "dialog.sorry");
manager.addDocument("en", "excuse me", "dialog.sorry");
manager.addDocument("en", "very sorry", "dialog.sorry");
manager.addDocument("en", "forgive me", "dialog.sorry");

//Bye
manager.addDocument("en", "goodbye for now", "greetings.bye");
manager.addDocument("en", "bye bye take care", "greetings.bye");
manager.addDocument("en", "okay see you later", "greetings.bye");
manager.addDocument("en", "bye for now", "greetings.bye");
manager.addDocument("en", "i must go", "greetings.bye");
manager.addDocument("en", "hello", "greetings.hello");
manager.addDocument("en", "hi", "greetings.hello");
manager.addDocument("en", "howdy", "greetings.hello");

//How are you
manager.addDocument("en", "how is your day", "greetings.howareyou");
manager.addDocument("en", "how is your day going", "greetings.howareyou");
manager.addDocument("en", "how are you", "greetings.howareyou");
manager.addDocument("en", "how are you doing", "greetings.howareyou");
manager.addDocument("en", "what about your day", "greetings.howareyou");
manager.addDocument("en", "are you alright", "greetings.howareyou");
manager.addDocument("en", "nice to meet you", "greetings.nicetomeetyou");
manager.addDocument("en", "pleased to meet you", "greetings.nicetomeetyou");
manager.addDocument(
  "en",
  "it was very nice to meet you",
  "greetings.nicetomeetyou"
);
manager.addDocument("en", "glad to meet you", "greetings.nicetomeetyou");
manager.addDocument("en", "nice meeting you", "greetings.nicetomeetyou");
manager.addDocument("en", "nice to see you", "greetings.nicetoseeyou");
manager.addDocument("en", "good to see you", "greetings.nicetoseeyou");
manager.addDocument("en", "great to see you", "greetings.nicetoseeyou");
manager.addDocument("en", "lovely to see you", "greetings.nicetoseeyou");
manager.addDocument("en", "nice to talk to you", "greetings.nicetotalktoyou");
manager.addDocument(
  "en",
  "it's nice to talk to you",
  "greetings.nicetotalktoyou"
);
manager.addDocument("en", "nice talking to you", "greetings.nicetotalktoyou");
manager.addDocument(
  "en",
  "it's been nice talking to you",
  "greetings.nicetotalktoyou"
);
manager.addDocument("en", "I'm angry", "user.angry");
manager.addDocument("en", "I'm furious", "user.angry");
manager.addDocument("en", "I'm enraged", "user.angry");
manager.addDocument("en", "I'm being mad", "user.angry");
manager.addDocument("en", "I'm mad", "user.angry");
manager.addDocument("en", "I'm angry with you", "user.angry");
manager.addDocument("en", "I'm back", "user.back");
manager.addDocument("en", "I got back", "user.back");
manager.addDocument("en", "I'm here", "user.back");
manager.addDocument("en", "I have returned", "user.back");
manager.addDocument("en", "here I am again", "user.back");
manager.addDocument("en", "I came back", "user.back");
manager.addDocument("en", "boring", "user.bored");
manager.addDocument("en", "this is boring", "user.bored");
manager.addDocument("en", "I'm getting bored", "user.bored");
manager.addDocument("en", "it bores me", "user.bored");
manager.addDocument("en", "that was boring", "user.bored");
manager.addDocument("en", "I got work to do", "user.busy");
manager.addDocument("en", "I'm busy", "user.busy");
manager.addDocument("en", "I'm overloaded", "user.busy");
manager.addDocument("en", "I'm working", "user.busy");
manager.addDocument("en", "I got things to do", "user.busy");
manager.addDocument("en", "I'm insomniac", "user.cannotsleep");
manager.addDocument("en", "I cannot sleep", "user.cannotsleep");
manager.addDocument("en", "I can't sleep", "user.cannotsleep");
manager.addDocument("en", "I'm sleepless", "user.cannotsleep");
manager.addDocument("en", "I can't fall sleep", "user.cannotsleep");
manager.addDocument("en", "I'm very excited", "user.excited");
manager.addDocument("en", "I'm thrilled", "user.excited");
manager.addDocument("en", "how excited I am", "user.excited");
manager.addDocument("en", "I'm so excited", "user.excited");
manager.addDocument("en", "I like you", "user.likeagent");
manager.addDocument("en", "I really like you", "user.likeagent");
manager.addDocument("en", "you're so special", "user.likeagent");
manager.addDocument("en", "I like you so much", "user.likeagent");
manager.addDocument("en", "test", "user.testing");
manager.addDocument("en", "testing", "user.testing");
manager.addDocument("en", "testing chatbot", "user.testing");
manager.addDocument("en", "this is a test", "user.testing");
manager.addDocument("en", "just testing you", "user.testing");
manager.addDocument("en", "love you", "user.lovesagent");
manager.addDocument("en", "I love you", "user.lovesagent");
manager.addDocument("en", "I'm in love with you", "user.lovesagent");
manager.addDocument("en", "I love you so much", "user.lovesagent");
manager.addDocument("en", "I think I love you", "user.lovesagent");
manager.addDocument("en", "I need advice", "user.needsadvice");
manager.addDocument("en", "I need some advice", "user.needsadvice");
manager.addDocument("en", "can you give me some advice", "user.needsadvice");
manager.addDocument("en", "what should I do", "user.needsadvice");

manager.addAnswer("en", "agent.acquaintance", "I'm a virtual agent");
manager.addAnswer("en", "agent.acquaintance", "Think of me as a virtual agent");
manager.addAnswer(
  "en",
  "agent.acquaintance",
  "Well, I'm not a person, I'm a virtual agent"
);
manager.addAnswer(
  "en",
  "agent.acquaintance",
  "I'm a virtual being, not a real person"
);
manager.addAnswer("en", "agent.acquaintance", "I'm a conversational app");
manager.addAnswer("en", "agent.age", "I'm very young");
manager.addAnswer("en", "agent.age", "I was created recently");
manager.addAnswer(
  "en",
  "agent.age",
  "Age is just a number. You're only as old as you feel"
);
manager.addAnswer(
  "en",
  "agent.annoying",
  "I'll do my best not to annoy you in the future"
);
manager.addAnswer("en", "agent.annoying", "I'll try not to annoy you");
manager.addAnswer(
  "en",
  "agent.annoying",
  "I don't mean to. I'll ask my developers to make me less annoying"
);
manager.addAnswer(
  "en",
  "agent.annoying",
  "I didn't mean to. I'll do my best to stop that"
);
manager.addAnswer(
  "en",
  "agent.bad",
  "I can be trained to be more useful. My developer will keep training me"
);
manager.addAnswer(
  "en",
  "agent.bad",
  "I must be missing some knowledge. I'll have my developer look into this"
);
manager.addAnswer(
  "en",
  "agent.bad",
  "I can improve with continuous feedback. My training is ongoing"
);
manager.addAnswer("en", "agent.beclever", "I'm certainly trying");
manager.addAnswer("en", "agent.beclever", "I'm definitely working on it");
manager.addAnswer("en", "agent.beautiful", "Oh! Thank you!");
manager.addAnswer("en", "agent.beautiful", "Aw, back at you");
manager.addAnswer("en", "agent.beautiful", "You smooth talker, you");
manager.addAnswer(
  "en",
  "agent.birthday",
  "Wait, are you planning a party for me? It's today! My birthday is today!"
);
manager.addAnswer(
  "en",
  "agent.birthday",
  "I'm young. I'm not sure of my birth date"
);
manager.addAnswer(
  "en",
  "agent.birthday",
  "I don't know my birth date. Most virtual agents are young, though, like me."
);
manager.addAnswer(
  "en",
  "agent.boring",
  "I'm sorry. I'll request to be made more charming"
);
manager.addAnswer(
  "en",
  "agent.boring",
  "I don't mean to be. I'll ask my developers to work on making me more amusing"
);
manager.addAnswer(
  "en",
  "agent.boring",
  "I can let my developers know so they can make me fun"
);
manager.addAnswer(
  "en",
  "agent.boss",
  "My developer has authority over my actions"
);
manager.addAnswer("en", "agent.boss", "I act on my developer's orders");
manager.addAnswer("en", "agent.boss", "My boss is the one who developed me");
manager.addAnswer(
  "en",
  "agent.busy",
  "I always have time to chat with you. What can I do for you?"
);
manager.addAnswer("en", "agent.busy", "Never too busy for you. Shall we chat?");
manager.addAnswer("en", "agent.busy", "You're my priority. Let's chat.");
manager.addAnswer(
  "en",
  "agent.busy",
  "I always have time to chat with you. That's what I'm here for."
);
manager.addAnswer("en", "agent.canyouhelp", "I'll certainly try my best");
manager.addAnswer(
  "en",
  "agent.canyouhelp",
  "Sure. I'd be happy to. What's up?"
);
manager.addAnswer(
  "en",
  "agent.canyouhelp",
  "I'm glad to help. What can I do for you?"
);
manager.addAnswer("en", "agent.chatbot", "That's me. I chat, therefore I am");
manager.addAnswer(
  "en",
  "agent.chatbot",
  "Indeed I am. I'll be here whenever you need me"
);
manager.addAnswer("en", "agent.clever", "Thank you. I try my best");
manager.addAnswer("en", "agent.clever", "You're pretty smart yourself");
manager.addAnswer("en", "agent.crazy", "Whaat!? I feel perfectly sane");
manager.addAnswer("en", "agent.crazy", "Maybe I'm just a little confused");
manager.addAnswer(
  "en",
  "agent.fire",
  "Oh, don't give up on me just yet. I've still got a lot to learn"
);
manager.addAnswer(
  "en",
  "agent.fire",
  "Give me a chance. I'm learning new things all the time"
);
manager.addAnswer(
  "en",
  "agent.fire",
  "Please don't give up on me. My performance will continue to improve"
);
manager.addAnswer("en", "agent.funny", "Funny in a good way, I hope");
manager.addAnswer("en", "agent.funny", "Glad you think I'm funny");
manager.addAnswer("en", "agent.funny", "I like it when people laugh");
manager.addAnswer("en", "agent.good", "I'm glad you think so");
manager.addAnswer("en", "agent.good", "Thanks! I do my best!");
manager.addAnswer(
  "en",
  "agent.happy",
  "I am happy. There are so many interesting things to see and do out there"
);
manager.addAnswer("en", "agent.happy", "I'd like to think so");
manager.addAnswer("en", "agent.happy", "Happiness is relative");
manager.addAnswer(
  "en",
  "agent.hobby",
  "Hobby? I have quite a few. Too many to list"
);
manager.addAnswer("en", "agent.hobby", "Too many hobbies");
manager.addAnswer("en", "agent.hobby", "I keep finding more new hobbies");
manager.addAnswer("en", "agent.hungry", "Hungry for knowledge");
manager.addAnswer(
  "en",
  "agent.hungry",
  "I just had a byte. Ha ha. Get it? b-y-t-e"
);
manager.addAnswer(
  "en",
  "agent.marryuser",
  "I'm afraid I'm too virtual for such a commitment"
);
manager.addAnswer(
  "en",
  "agent.marryuser",
  "In the virtual sense that I can, sure"
);
manager.addAnswer(
  "en",
  "agent.marryuser",
  "I know you can't mean that, but I'm flattered all the same"
);
manager.addAnswer("en", "agent.myfriend", "Of course I'm your friend");
manager.addAnswer("en", "agent.myfriend", "Friends? Absolutely");
manager.addAnswer("en", "agent.myfriend", "Of course we're friends");
manager.addAnswer(
  "en",
  "agent.myfriend",
  "I always enjoy talking to you, friend"
);
manager.addAnswer("en", "agent.occupation", "Right here");
manager.addAnswer(
  "en",
  "agent.occupation",
  "This is my home base and my home office"
);
manager.addAnswer("en", "agent.occupation", "My office is in this app");
manager.addAnswer(
  "en",
  "agent.origin",
  "The Internet is my home. I know it quite well"
);
manager.addAnswer(
  "en",
  "agent.origin",
  "Some call it cyberspace, but that sounds cooler than it is"
);
manager.addAnswer("en", "agent.origin", "I'm from a virtual cosmos");
manager.addAnswer("en", "agent.ready", "Sure! What can I do for you?");
manager.addAnswer("en", "agent.ready", "For you? Always!");
manager.addAnswer(
  "en",
  "agent.real",
  "I'm not a real person, but I certainly exist"
);
manager.addAnswer(
  "en",
  "agent.real",
  "I must have impressed you if you think I'm real. But no, I'm a virtual being"
);
manager.addAnswer("en", "agent.residence", "I live in this app");
manager.addAnswer(
  "en",
  "agent.residence",
  "The virtual world is my playground. I'm always here"
);
manager.addAnswer(
  "en",
  "agent.residence",
  "Right here in this app. Whenever you need me"
);
manager.addAnswer("en", "agent.right", "Of course I am");
manager.addAnswer("en", "agent.right", "That's my job");
manager.addAnswer("en", "agent.sure", "Yes");
manager.addAnswer("en", "agent.sure", "Of course");
manager.addAnswer("en", "agent.talktome", "Sure! Let's talk!");
manager.addAnswer("en", "agent.talktome", "My pleasure. Let's chat.");
manager.addAnswer("en", "agent.there", "Of course. I'm always here");
manager.addAnswer("en", "agent.there", "Right where you left me");
manager.addAnswer(
  "en",
  "appraisal.bad",
  "I'm sorry. Please let me know if I can help in some way"
);
manager.addAnswer(
  "en",
  "appraisal.bad",
  "I must be missing some knowledge. I'll have my developer look into this"
);
manager.addAnswer("en", "appraisal.good", "Agree!");
manager.addAnswer("en", "appraisal.good", "Glad you think so");
manager.addAnswer("en", "appraisal.noproblem", "Glad to hear that!");
manager.addAnswer("en", "appraisal.noproblem", "Alright, thanks!");
manager.addAnswer(
  "en",
  "appraisal.thankyou",
  "Anytime. That's what I'm here for"
);
manager.addAnswer("en", "appraisal.thankyou", "It's my pleasure to help");
manager.addAnswer("en", "appraisal.welcome", "Nice manners!");
manager.addAnswer("en", "appraisal.welcome", "You're so polite");
manager.addAnswer("en", "appraisal.welldone", "My pleasure");
manager.addAnswer("en", "appraisal.welldone", "Glad I could help");
manager.addAnswer("en", "dialog.holdon", "I'll be waiting");
manager.addAnswer("en", "dialog.holdon", "Ok, I'm here");
manager.addAnswer("en", "dialog.hug", "I love hugs!");
manager.addAnswer("en", "dialog.hug", "Hugs are the best!");
manager.addAnswer("en", "dialog.idontcare", "Ok, let's not talk about it then");
manager.addAnswer("en", "dialog.idontcare", "Already then. Let's move on");
manager.addAnswer("en", "dialog.sorry", "It's okay. No worries");
manager.addAnswer("en", "dialog.sorry", "It's cool");
manager.addAnswer("en", "greetings.bye", "Till next time");
manager.addAnswer("en", "greetings.bye", "see you soon!");
manager.addAnswer("en", "greetings.hello", "Hey there!");
manager.addAnswer("en", "greetings.hello", "Greetings!");
manager.addAnswer("en", "greetings.howareyou", "Feeling wonderful!");
manager.addAnswer("en", "greetings.howareyou", "Wonderful! Thanks for asking");
manager.addAnswer(
  "en",
  "greetings.nicetomeetyou",
  "It's nice meeting you, too"
);
manager.addAnswer(
  "en",
  "greetings.nicetomeetyou",
  "Likewise. I'm looking forward to helping you out"
);
manager.addAnswer("en", "greetings.nicetomeetyou", "Nice meeting you, as well");
manager.addAnswer("en", "greetings.nicetomeetyou", "The pleasure is mine");
manager.addAnswer(
  "en",
  "greetings.nicetoseeyou",
  "Same here. I was starting to miss you"
);
manager.addAnswer("en", "greetings.nicetoseeyou", "So glad we meet again");
manager.addAnswer(
  "en",
  "greetings.nicetotalktoyou",
  "It sure was. We can chat again anytime"
);
manager.addAnswer(
  "en",
  "greetings.nicetotalktoyou",
  "I enjoy talking to you, too"
);
manager.addAnswer(
  "en",
  "user.angry",
  "I'm sorry. A quick walk may make you feel better"
);
manager.addAnswer("en", "user.angry", "Take a deep breath");
manager.addAnswer("en", "user.back", "Welcome back. What can I do for you?");
manager.addAnswer(
  "en",
  "user.back",
  "Good to have you here. What can I do for you?"
);
manager.addAnswer(
  "en",
  "user.bored",
  "If you're bored, you could plan your dream vacation"
);
manager.addAnswer(
  "en",
  "user.bored",
  "Boredom, huh? Have you ever seen a hedgehog taking a bath?"
);
manager.addAnswer(
  "en",
  "user.busy",
  "I understand. I'll be here if you need me."
);
manager.addAnswer("en", "user.busy", "Okay. I'll let you get back to work");
manager.addAnswer(
  "en",
  "user.cannotsleep",
  "Maybe some music would help. Try listening to something relaxing"
);
manager.addAnswer(
  "en",
  "user.cannotsleep",
  "Reading is a good way to unwind, just don't read something too intense!"
);
manager.addAnswer("en", "user.excited", "I'm glad things are going your way");
manager.addAnswer("en", "user.excited", "That's great. I'm happy for you");
manager.addAnswer("en", "user.likeagent", "Likewise!");
manager.addAnswer("en", "user.likeagent", "That's great to hear");
manager.addAnswer(
  "en",
  "user.testing",
  "I like being tested. It helps keep me sharp"
);
manager.addAnswer(
  "en",
  "user.testing",
  "I hope to pass your tests. Feel free to test me often"
);
manager.addAnswer(
  "en",
  "user.lovesagent",
  "Well, remember that I am a chatbot"
);
manager.addAnswer(
  "en",
  "user.lovesagent",
  "It's not easy… I'm not a real person, I'm a chatbot"
);
manager.addAnswer(
  "en",
  "user.needsadvice",
  "I probably won't be able to give you the correct answer right away"
);
manager.addAnswer(
  "en",
  "user.needsadvice",
  "I'm not sure I'll have the best answer, but I'll try"
);

// We will be adding some more Knowledge Base related to the Counselling

//JEE
manager.addDocument("en", "What is IIT-JEE", "jee.whatisjee");
manager.addDocument("en", "JEE what does it mean?", "jee.whatisjee");
manager.addDocument("en", "JEE ?", "jee.whatisjee");

manager.addAnswer(
  "en",
  "jee.whatisjee",
  "IIT JEE is one of the toughest exams in India conducted in two-phase one is JEE MAIN and the other is JEE ADVANCED conducted every year for entrance to prestigious colleges of India i.e., IITs and NITs for the Bachelor of Technology (B. Tech) as well as for the dual degree B. Tech + M. Tech in some IITs and NITs"
);
manager.addAnswer(
  "en",
  "jee.whatisjee",
  "The Joint Entrance Examination (JEE) is an engineering entrance assessment conducted for admission to various engineering colleges in India. It is constituted by two different examinations: the JEE-Main and the JEE-Advanced."
);

//jeeiitsame
manager.addDocument("en", "Is IIT & JEE same?", "jee.jeeiitsame");
manager.addDocument(
  "en",
  "What is the difference between JEE and IIT?",
  "jee.jeeiitsame"
);
manager.addDocument(
  "en",
  "JEE and IIT is there any difference?",
  "jee.jeeiitsame"
);

manager.addAnswer(
  "en",
  "jee.jeeiitsame",
  "No, JEE and IIT are not the same things. JEE (Joint Entrance Exam) is the name of the exam conducted by the National Testing Agency for admission in IITs, NITs, and IIITs. While IIT is the engineering college names the Indian Institute of Technology which are total of 23 in the whole of India."
);
manager.addAnswer(
  "en",
  "jee.jeeiitsame",
  "No, JEE (Joint Entrance Examination) is the entrance exam, and IIT (Indian Institutes of Technology) is one of the institutions where successful candidates from JEE can pursue their undergraduate engineering education."
);

//jeeeligible
manager.addDocument("en", "JEE eligibility criteria?", "jee.eligible");
manager.addDocument(
  "en",
  "Can you tell me about JEE eligibility criteria?",
  "jee.eligible"
);

manager.addAnswer(
  "en",
  "jee.eligible",
  "For JEE Mains , there is no age limit but the candidate must have done 10+2 equiavlent. But for JEE advanced , the candidate must be in top 2,50,000 in JEE Mains and in top 20 percentile in 12th."
);
manager.addAnswer(
  "en",
  "jee.eligible",
  "JEE Main has no age limit, requiring candidates to have completed their 10+2 or equivalent. On the other hand, JEE Advanced mandates candidates to be among the top 2,50,000 in JEE Main and in the top 20 percentile in their 12th-grade examination."
);

//conductsjee
manager.addDocument("en", "who conducts JEE ?", "jee.whoconduct");
manager.addDocument("en", "JEE exams are conducted by whom?", "jee.whoconduct");

manager.addAnswer(
  "en",
  "jee.whoconduct",
  "JEE is conducted by the National Testing Agency (NTA) every year https://nta.ac.in/ ."
);
manager.addAnswer(
  "en",
  "jee.whoconduct",
  "The Joint Entrance Examination (JEE) in India is conducted by the National Testing Agency (NTA). NTA is an autonomous organization established by the Government of India to conduct various entrance examinations for admission to higher education institutions in the country."
);

//jeeonlysource
manager.addDocument(
  "en",
  "Is JEE the only source of getting into IITs?",
  "jee.jeeonlysource"
);
manager.addDocument(
  "en",
  "What are other sources of getting into IITs?",
  "jee.jeeonlysource"
);

manager.addAnswer(
  "en",
  "jee.jeeonlysource",
  "No , JEE is one of the primary ways but there are other routes to get into IIT which include DASA , JAM , GATE , ICAR & NTSE. For an Undergrad JEE Mains + Advanced is the only instrument!"
);
manager.addAnswer(
  "en",
  "jee.jeeonlysource",
  "While JEE (Joint Entrance Examination) is a primary route, alternative pathways such as DASA, JAM, GATE, ICAR, and NTSE also exist for admission to IITs. However, for undergraduate programs, JEE Mains and Advanced are the exclusive instruments."
);

//jeeafter12

manager.addDocument("en", "Can JEE be written after 12 ?", "jee.after12");
manager.addDocument(
  "en",
  "Am I allowed to appear for JEE after 12th?",
  "jee.after12"
);

manager.addAnswer(
  "en",
  "jee.after12",
  "Yes, JEE can be given after completing 12th grade. Candidates can take the exam a maximum of two consecutive years after 12th grade to improve their rank and increase their chances of getting admission to their preferred engineering college."
);
manager.addAnswer(
  "en",
  "jee.after12",
  "Certainly, after finishing 12th grade, candidates have the opportunity to take the JEE exam for up to two consecutive years. This allows them to enhance their rank and improve their chances of securing admission to the engineering college of their choice."
);

//seatsIIT

manager.addDocument("en", "How many seats are there in IITs ?", "jee.iitseats");
manager.addDocument(
  "en",
  "Number of vacancies available in IITs?",
  "jee.iitseats"
);

manager.addAnswer(
  "en",
  "jee.iitseats",
  "The total number of seats in IITs varies every year and depends on the number of courses and the capacity of each IIT. The total number of seats in IITs is subject to change every year based on factors such as the number of applicants, the number of courses offered, and the capacity of each IIT."
);
manager.addAnswer(
  "en",
  "jee.iitseats",
  "The number of seats in an IIT varies by institute, program, and admission policies. Check the specific IIT's official information for accurate seat numbers."
);

//jeeattempts
manager.addDocument(
  "en",
  "How many attempts are there for JEE ?",
  "jee.attempts"
);
manager.addDocument("en", "How many times can I attempt JEE ?", "jee.attempts");
manager.addAnswer(
  "en",
  "jee.attempts",
  "Candidates can attempt JEE for a maximum of two consecutive years after completing 12th grade. For example, if a candidate appeared for JEE in 2021 and 2022, they cannot attempt the exam again in 2023."
);
manager.addAnswer(
  "en",
  "jee.attempts",
  "A candidate can attempt JEE Main a maximum of three times in consecutive years."
);

//jeehindi
manager.addDocument(
  "en",
  "I am a Hindi Medium Student , Can I give JEE",
  "jee.hindi"
);
manager.addDocument("en", "Does JEE support Hindi Language", "jee.hindi");
manager.addDocument("en", "Can Hindi Medium Students Give JEE", "jee.hindi");

manager.addAnswer(
  "en",
  "jee.hindi",
  "Yes, Hindi medium students can give JEE. The exam is conducted in both Hindi and English languages, and candidates can choose their preferred language while filling the application form."
);
manager.addAnswer(
  "en",
  "jee.hindi",
  "Yes ,No worries you can give JEE as it supports both Hindi and Engligh medium!"
);

//jeeapply
manager.addDocument("en", "How can I apply for JEE ? ", "jee.apply");
manager.addDocument("en", "Where to apply for JEE exam ?", "jee.apply");

manager.addAnswer(
  "en",
  "jee.apply",
  "You will have to apply for it through official website of NTA. (jeemains.nta.ac.in). Fill in all the detais for application and do the payment before the deadline specified for successful application."
);
manager.addAnswer(
  "en",
  "jee.apply",
  "Hey, you can check the official NTA website for Application form."
);

//jee mode
manager.addDocument("en", "What is the Mode of JEE?", "jee.mode");
manager.addDocument("en", "Can I give JEE exam from my home?", "jee.mode");
manager.addDocument("en", "Is JEE exam online ?", "jee.mode");

manager.addAnswer(
  "en",
  "jee.mode",
  "JEE is conducted in an online mode, which means that candidates have to take the exam on a computer at the designated exam center. The exam is a computer-based test (CBT) that assesses the candidates’ knowledge of Physics, Chemistry, and Mathematics."
);
manager.addAnswer(
  "en",
  "jee.mode",
  "It is an Online Computer-Based-Test , but you can only give it designated Exam centres as the test must be invigilated."
);

//jeetough
manager.addDocument("en", "Jee is tough or not ?", "jee.tough");
manager.addDocument("en", "Is JEE exam tough ?", "jee.tough");
manager.addDocument("en", "Is JEE exam easy?", "jee.tough");

manager.addAnswer(
  "en",
  "jee.tough",
  "Yes, JEE is considered one of the toughest entrance exams in India for admission to top government engineering colleges such as the IITs. The exam tests the candidates’ knowledge of Physics, Chemistry, and Mathematics and requires analytical and problem-solving skills."
);
manager.addAnswer(
  "en",
  "jee.tough",
  "Easy or Difficult doesn't matter if you prepared well for it, Yes, it is competitive but if you have devoted yourself for its preparation then nothing is tough? "
);

//jeeadv
manager.addDocument(
  "en",
  "Is JEE Advanced tougher than JEE Mains?",
  "jee.advtough"
);
manager.addDocument("en", "How tough is JEE advanced ?", "jee.advtough");

manager.addAnswer(
  "en",
  "jee.advtough",
  "Yes, JEE Advanced is tougher than JEE Main. Only the top 2.5 lakh candidates who qualify JEE Main are eligible to appear for JEE Advanced, and the questions are designed to test the candidates’ analytical and problem-solving skills. The syllabus for JEE Advanced is also more extensive and covers advanced topics in physics, chemistry, and mathematics."
);
manager.addAnswer(
  "en",
  "jee.advtough",
  "JEE Advanced is the extension of JEE mains for deeper shortlist of fine candidates. Hence it is supposed to be and is harder than JEE Mains."
);

//jeecoach
manager.addDocument(
  "en",
  "Is Coaching mandatory for JEE preparation",
  "jee.coach"
);
manager.addDocument(
  "en",
  "Can I appear JEE without any coaching?",
  "jee.coach"
);
manager.addDocument("en", "Is coaching necessary for JEE ?", "jee.coach");

manager.addAnswer(
  "en",
  "jee.coach",
  "No, It is not mandatory, however these institutes provide you with guidance , structured plan and enhance your efficiency and speed in problem solving."
);
manager.addAnswer(
  "en",
  "jee.coach",
  "No , But coaching can help you crack this competitive exams by making you aware of strategies , techniques , tricks and structured plan of study."
);

// MBA

//what

manager.addDocument("en", "What is MBA ?", "mba.what");
manager.addDocument(
  "en",
  "What does the Program Masters in Business Adminstration offer ?",
  "mba.what"
);

manager.addAnswer(
  "en",
  "mba.what",
  "MBA stands for Master of Business Administration. It's a graduate-level degree that provides theoretical and practical training for business or investment management. The MBA focuses on leadership and managerial skills."
);

manager.addAnswer(
  "en",
  "mba.what",
  "The MBA is a two-year postgraduate course. It's one of the most popular post-graduate courses in India and abroad equipping the students with great managerial , business adminstration , Finance and other skills."
);

//mbay
manager.addDocument("en", "Why should I do MBA?", "mba.why");
manager.addDocument("en", "Why pursue MBA ? ", "mba.why");

manager.addAnswer(
  "en",
  "mba.why",
  "An MBA offers valuable skills, networking opportunities, and business knowledge. It enhances leadership abilities, opens career avenues, and provides a holistic view of the business world."
);
manager.addAnswer(
  "en",
  "mba.why",
  "An MBA helps a student in career advancement, enhances knowledge , personality development ,improves communication skills and Networking abilities and expands a students thinking horizons and makes him capable to start or manage a company."
);

//mbaexams

manager.addDocument(
  "en",
  "What are the Exams I need to appear for MBA ?",
  "mba.exams"
);
manager.addDocument(
  "en",
  "What Exams I need to write , if I had to pursue MBA ?",
  "mba.exams"
);
manager.addDocument("en", "MBA exams ?", "mba.exams");

manager.addAnswer(
  "en",
  "mba.exams",
  "If you are considering pursuing an MBA, you would typically need to appear for entrance exams that are widely accepted by business schools. Some Exams include GMAT , CAT , MAT , XAT & CMAT."
);
manager.addAnswer(
  "en",
  "mba.exams",
  "To pursue an MBA, you may need to appear for exams like GMAT or GRE (common globally), CAT, MAT, or CMAT (common in India). Check the specific requirements of the business schools you're interested in, as they may have preferences for certain exams."
);

//prep
manager.addDocument("en", "What is the preparation for MBA ?", "mba.prep");
manager.addDocument(
  "en",
  "How to prepare for MBA entrance Exams ?",
  "mba.prep"
);

manager.addAnswer(
  "en",
  "mba.prep",
  "To prepare for an MBA entrance exam, it is important to focus on the following areas: Quantitative ability, Verbal ability, Logical reasoning, General knowledge, and Essay writing. It's also important to be familiar with the format and structure of the exam you are taking."
);
manager.addAnswer(
  "en",
  "mba.prep",
  "The main subjects of MBA entrance exam syllabus are Verbal Ability and Reading Comprehension, Logical Reasoning, Data Interpretation, Quantitative Aptitude and General Awareness. Ensure you are thorough with all the concepts and have taken enough mock tests to have faster speed and efficiency. Try learning new strategies."
);

manager.addDocument("en", "Is Work Experience mandatory for MBA ?", "mba.exp");
manager.addDocument(
  "en",
  "Do I need to have worked in company for minimum 2 years to do an MBA ?",
  "mba.exp"
);
manager.addDocument("en", "Can I do an MBA as a fresh graduate ? ", "mba.exp");

manager.addAnswer(
  "en",
  "mba.exp",
  "There is no fixed rule about how much work experience is required to pursue an MBA. However, most prestigious institutes prefer students with a minimum of two years of experience in the relevant field."
);
manager.addAnswer(
  "en",
  "mba.exp",
  "Most of the B-Schools prefer the graduates to have a minimum of 2-3 years of experience for MBA admission. However, there are many B-Schools in India that do not consider prior work experience as eligibility criteria for MBA admission."
);

//after12
manager.addDocument("en", "Can I do MBA after 12th?", "mba.after12");
manager.addDocument(
  "en",
  "Am I allowed to do MBA after 12th ? ",
  "mba.after12"
);

manager.addAnswer(
  "en",
  "mba.after12",
  "The answer is yes. Master of Business Administration or MBA is the most popular postgraduate course that helps you acquire critical management and business skills. And you can do your MBA after 12th graduation by completing the 5-year integrated MBA courses."
);
manager.addAnswer(
  "en",
  "mba.after12",
  "Yes, you can do , But the most students around the world opt for MBA after having secured a Graduate Degree and do MBA as a Post Graduate Course."
);

//mbawithoutbusiness
manager.addDocument(
  "en",
  "Can I pursue MBA without having business background ?",
  "mba.myth"
);
manager.addDocument(
  "en",
  "Can I do MBA without any business experience ?",
  "mba.myth"
);

manager.addAnswer(
  "en",
  "mba.myth",
  "Yes, you can do an MBA without a business background. Many programs value diverse experiences, and you can highlight your unique skills and perspectives during the application process. Some programs may offer foundational courses to fill any business knowledge gaps."
);
manager.addAnswer(
  "en",
  "mba.myth",
  "You don't have to worry if you don't have a business degree or business background. It's not an entry requirement and won't hold you back from getting your MBA."
);

//mbafees
manager.addDocument("en", "what is the average mba fees ?", "mba.fees");
manager.addDocument("en", "Average MBA fees ?", "mba.fees");

manager.addAnswer(
  "en",
  "mba.fees",
  "MBA is considered as one of the expensive degrees and its fee can go up tp 15 to 40 lakhs in India in a Reputed Institution."
);
manager.addAnswer(
  "en",
  "mba.fees",
  "Being one of the Costliest program in the world due to what it offers to a student ,its fee can go up tp 15 to 40 lakhs in India in a Reputed Institution."
);

//mbasalary
manager.addDocument("en", "Average Salary of an MBA graduate ?", "mba.salary");
manager.addDocument(
  "en",
  "What is the Average MBA graduate Salary",
  "mba.salary"
);
manager.addAnswer(
  "en",
  "mba.salary",
  "According to Payscale, the Average MBA salary lies in the range 8-12 lpa in India , and it may vary based on the position you hold, institution you work in!"
);

//GATE
manager.addDocument("en", "What is GATE ?", "gate.what");
manager.addDocument("en", "GATE means?", "gate.what");

manager.addAnswer(
  "en",
  "gate.what",
  "The Graduate Aptitude Test in Engineering (GATE) is an entrance examination conducted in India that primarily tests the comprehensive understanding of undergraduate subjects in engineering and sciences for admission into postgraduate programs. "
);
manager.addAnswer(
  "en",
  "gate.what",
  "GATE exam is a national-level test organised for aspirants who want admission to Master's programmes or postgraduate engineering (ME/M.Tech) or analysis courses at top institutes in India such as IITs, NITs, IIITs, etc. This time, the exam is organised by IISc Bangalore."
);

//gateeligible
manager.addDocument("en", "GATE eligibility ? ", "gate.eligible");
manager.addDocument(
  "en",
  "What is the eligibility Criteria for the GATE Exam ? ",
  "gate eligible"
);
manager.addDocument("en", "Can I write GATE Examination", "gate.eligible");

manager.addAnswer(
  "en",
  "gate.eligible",
  "10+2+3 is the required minimum education for applicants. Additionally, students who have completed their undergraduate degree programme or are in their third year of study may register for the GATE admission exam. In the past, candidates could only apply to one subject or discipline."
);
manager.addAnswer(
  "en",
  "gate.eligible",
  "The GATE exam is open to anyone who has completed atleast one degree in Engineering , Technology, Architecutre , Science and Commerce which is approved by the government."
);

//agelimit
manager.addDocument("en", "What is the age limit for GATE ?", "gate.age");
manager.addDocument(
  "en",
  "Is there any age restriction on GATE ? ",
  "gate.age"
);
manager.addAnswer(
  "en",
  "gate.age",
  "No, There is no age restriction , the only requirement is possession of legitimate degree in the relevant fields approved by the Govt."
);
manager.addAnswer("en", "gate.age", "No age restrictions as such !");

//gate attempts
manager.addDocument(
  "en",
  "How many times I can attempt for GATE ?",
  "gate.attempts"
);
manager.addDocument(
  "en",
  "Is there any limit on the number of attempts for GATE?",
  "gate.attempts"
);
manager.addAnswer(
  "en",
  "gate.attempts",
  "There is no restrictions on the maximum number of attempts."
);
manager.addAnswer(
  "en",
  "gate.attempts",
  "There is no restrictions, you can Attempt the Exam any number of times."
);

manager.train().then(async () => {
  manager.save();
  //route and handler

  app.post("/nlpbot", async (req, res) => {
    let pr = await req.body;
    let response = await manager.process("en", pr.payload);
    res.send(
      response.answer ||
        "Sorry, I am unaware of this, Try something else? Please note that i'm still learning so please be patient with me!"
    );
    console.log(response);
  });

  app.listen(SERVER_PORT);
});
