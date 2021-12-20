/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useState} from 'react';
import {Dimensions, SafeAreaView, View, StyleSheet, TouchableOpacity, Text, StatusBar} from 'react-native';
import NovelContainer from "./bookPager/NovelContainer";


const data = [{"name": "chapter", "id": ["-1"], text: "Chapter 1"},{
	"name": "sent",
	"id": ["-1"],
	"text": " \"So you're admitting it?\" Zhan Wu Hen poked the Embodiment's forehead with his finger. The two-hundred-metre-tall Embodiment instantly froze in place, unable to move."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai grit his teeth and looked at him, saying in a deep voice, \"It does cultivate the Heaven Devouring Battle Law, but it has never used this Secret Art to commit crimes. The people it has killed were all those who deserved to be killed, and it has never killed a single soul. Why is Senior talking about the Secret Art it cultivates?\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen said, \"If it was any other Secret Art, it would have been fine, but the Heaven Devouring Battle Law …\" He slowly shook his head and said, \"Yang Kai, do you remember that this King once told you that this King had a good friend named Qing Lian who died at the hands of Wu Pa in the Shattered Star Sea?\""
}, {"name": "sent", "id": ["-1"], "text": " Yang Kai nodded and said, \"Of course this Junior remembers.\""}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen said again, \"Then you should remember that this King also said that in this life, this King and Wu Pa will be irreconcilable!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai said, \"This matter has passed for tens of thousands of years. Why does Senior still take it to heart?\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " \"It's not that this King takes it to heart, but you don't understand the evil of this Secret Art at all. Wu Pa is also a talented person, and this King admits that he is inferior to him, but because of this Secret Art, his mind was distorted. Although he became a Great Emperor, his name became infamous for tens of thousands of years. You have never experienced the horror of the entire Star Boundary being shrouded by the name of Heaven Devouring, nor have you seen the tragedy of the Shattered Star Sea Emperors, so you naturally underestimate the power of the Heaven Devouring Battle Law. Since this King knows all this, he can't just sit back and do nothing, or it will be too late!\""
}, {"name": "sent", "id": ["-1"], "text": " Yang Kai said in a deep voice, \"Then what does Senior want?\""}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen narrowed his eyes slightly, staring at the Embodiment, and said lightly, \"Break its Secret Art and cripple its cultivation!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " \"Do I have to do this?\" Yang Kai's eyes drooped, and his voice was low. The hair on his forehead cast a thick shadow, blocking the light in front of him."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " \"It must be done!\" Zhan Wu Hen turned to look at him. \"If you want to blame me, this King has nothing to say, but the Heaven Devouring Battle Law must not be allowed to exist in this world!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " As he spoke, a milky white halo suddenly blossomed from his fingertip. The halo landed on the Embodiment's forehead like a dazzling lamp, dispelling all the darkness in the world."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " With a deafening dragon roar, Yang Kai's figure rapidly expanded. In the blink of an eye, he had turned into a half-dragon that was thirty-two meters tall. His Dragon Pressure filled the air, causing the 200,000 soldiers of Roaring Tiger City to shiver."
}, {"name": "sent", "id": ["-1"], "text": " The dragon claw tore through the void and grabbed towards Zhan Wuhen."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wuhen, who had been nonchalant all this while, finally had a slight change in expression. He raised his other palm to meet the dragon claw."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " With a loud bang, the dragon claw shattered. Zhan Wuhen's figure also swayed. But right at this moment, a dragon tail swept out, sweeping towards Zhan Wuhen with the power to destroy heaven and earth. Wherever the dragon's tail swept past, a pitch-black crack appeared in the void."
}, {"name": "sent", "id": ["-1"], "text": " Zhan Shan. Wu Hen's eyes s. he."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " However, he seemed to have underestimated the power of the tail, and he was knocked back dozens of meters. Taking advantage of this opportunity, Yang Kai had already summoned his Embodiment back. The two huge figures stood in the world, looking down on all living beings with cold expressions."
}, {"name": "sent", "id": ["-1"], "text": " \"Yang Kai, don't make a mistake!\" Zhan Wu Hen looked at him indifferently."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai shook his head slowly. \"Senior, please retreat. There's still room for negotiation.\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen looked at him with a pained expression. \"Did this King's words just now play the lute to a cow?\""
}, {"name": "sent", "id": ["-1"], "text": " Yang Kai said resolutely, \"Please let it go, Senior!\""}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wuhen let out a long sigh. \"Why bother? You're not this King's opponent, and you know it. You'll only suffer if you make an enemy of this King. \""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai said, \"It doesn't matter whether it's my opponent or not. What matters is how I choose.\" He turned to look at the Embodiment and said, \"To Senior, it's not allowed to exist in this world because it cultivated the Heaven Devouring Battle Law. But to this Junior, it's the best partner. No one can destroy it!\""
}, {"name": "sent", "id": ["-1"], "text": " Zhan Wu Hen nodded slightly. \"It looks like we can only fight to the death.\""}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai took a deep breath. \"Senior, don't force me.\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen laughed. \"You have to bear the consequences of your own choices. Let this King test your strength.\" After saying that, he rushed over in a flash."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai's eyes narrowed. Without needing to communicate, he and the Embodiment spread out, one on the left and one on the right. One activated the Dragon Race's Secret Technique, while the other activated the Heaven Devouring Domain."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " With two loud bangs, Zhan Wu Hen didn't seem to make any movements, but Yang Kai and the Embodiment felt an irresistible force coming at them. The two huge figures were sent flying, crashing through countless houses along the way."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen took advantage of this opportunity to turn around and pounce on the Embodiment. It seemed that he was determined to break the Embodiment's Secret Technique first and cripple its cultivation."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " How could Yang Kai allow that? As he retreated, he raised his hand and summoned the Mountain River Bell. The ancient bell rotated and expanded in the wind, heading straight for Zhan Wu Hen."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen didn't even look at it. He turned around in mid-air and kicked the Mountain River Bell. With a loud bang, the entire Roaring Tiger City trembled. Hundreds of thousands of people hugged their heads in pain."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The Mountain River Bell was kicked away, but Zhan Wu Hen used the rebound force to quickly approach the Embodiment."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The Embodiment roared angrily. The evil flames on its body burned brightly, gathering into a raging flame that engulfed Zhan Wu Hen."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen didn't dodge. His Emperor Qi surged on the surface of his body, and he was unharmed. In the blink of an eye, he arrived in front of the Embodiment, forcing the Embodiment to retreat. Seeing that the Embodiment had nowhere to retreat, it could only punch out with both fists."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " At the crucial moment, Yang Kai appeared in a flash. His body, which was taller than the Embodiment, stood beside it and punched out."
}, {"name": "sent", "id": ["-1"], "text": " * Boom … *"}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Two huge figures flew out. Even with their combined strength, they were unable to resist the power of Zhan Wu Hen's palm. The strength of a Great Emperor was evident. This was still the battlefield in Roaring Tiger City. Zhan Wu Hen had some misgivings and didn't use his full strength. Otherwise, Yang Kai and the Embodiment would have been even worse off."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " As he retreated, Yang Kai's eyes narrowed. This was because Zhan Wu Hen was chasing after him without any hesitation."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " This was the first time he was fighting a Great Emperor head-on. Yang Kai didn't hold back at all, but the gap in strength and realm was like a chasm. He couldn't see any hope of victory."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen's attack method was extremely simple. He didn't use any fancy Secret Techniques, but his fists, palms, and feet were all the most powerful weapons in the world. Every casual attack contained great power."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The hundreds of thousands of people in the city watched without blinking. They marveled at the terror of a Great Emperor, but they were also worried for Yang Kai."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The rumbling sounds were endless. Countless houses in the city had collapsed, and broken walls could be seen everywhere. The battle was one-sided from the very beginning. Yang Kai and the Embodiment were no match for Zhan Wu Hen at all. The two huge figures were beaten back and forth like sandbags. They didn't even have the strength to fight back."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " There were several times when the Embodiment's cultivation was almost crippled by Zhan Wu Hen. Fortunately, Yang Kai arrived at the critical moment and saved it. However, in this situation, it was only a matter of time before Yang Kai and the Embodiment were defeated."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The Mountain and River Bell, the Dragon Race's Secret Technique, the Flowing Time Seal, and the Space Divine Ability. Yang Kai had used almost all of them. However, these Divine Abilities that had always been successful in the past were all useless in front of Zhan Wu Hen. He could break them with a raise of his hand."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai was in a state of madness. He wantonly used his power. He didn't care whether he would destroy Roaring Tiger City because of this."
}, {"name": "sent", "id": ["-1"], "text": " With another loud bang, Yang Kai and the Embodiment were sent flying again."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " However, this time, Zhan Wu Hen didn't give Yang Kai any chance to rescue him. He stretched out his hand, and a giant hand made of Yuan Qi appeared and grabbed the Embodiment's huge body."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Under the restraint of Yuan Qi, the Evil Fire on the Embodiment's body dimmed. The two-hundred-meter-tall body struggled with all its might, but it was to no avail."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Lines visible to the naked eye suddenly spread out from the giant hand made of Yuan Qi and gradually enveloped the Embodiment's entire body. It was like a seal, like a Secret Technique."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen's voice resounded through the world. \"Yang Kai, I hope that you will take warning from this and not walk the path of evil.\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai's eyes were bloodshot. He clenched his fists tightly and stood up from the ruins. He roared in grief and indignation, \"I refuse to accept this!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen shook his head slowly. Under the stimulation of his Emperor Qi, the lines on the Embodiment's body became denser and denser, gradually enveloping its entire body. Even though no one could recognize what these lines were, they knew that it was definitely Zhan Wu Hen's method of crippling its cultivation."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Such a powerful existence was actually crippled by a Great Emperor because it cultivated the Heaven Devouring Battle Law. Anyone would feel that it was a pity. However, this matter was related to the Heaven Devouring Great Emperor and the Heaven Devouring Battle Law. No one could say whether Zhan Wu Hen's actions were right or wrong."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Right at this moment, Zhan Wu Hen suddenly furrowed his brows and turned to look at Yang Kai."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " With just one look, he immediately revealed a shocked expression. He shouted, \"Yang Kai, you've been corroded by the Demon Qi?\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " As soon as he said this, everyone's expression changed drastically. They all looked at Yang Kai."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " They saw that Yang Kai's half-dragon body was actually emitting black Qi. It was filled with an evil and ruthless feeling. Everyone was naturally familiar with this black Qi. After fighting against the Demon Race for such a long time, everyone had a very thorough understanding of Demon Qi."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " At this moment, what was being emitted from Yang Kai's body was Demon Qi. Moreover, it was extremely pure Demon Qi. No one had felt such pure and rich Demon Qi from the Demon Kings on the battlefield."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Li Jiao's eyes were about to pop out. He really couldn't figure out when Yang Kai had been corroded by the Demon Qi. Wasn't he a Great Magus? He also had the Dragon Race's bloodline. How could he be corroded by the Demon Qi so easily? There were no signs of this happening before."
}, {"name": "sent", "id": ["-1"], "text": " The 200,000 soldiers also couldn't believe it."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Only Yu Ru Meng's beautiful eyes were looking at Yang Kai. She even stuck out her scarlet tongue and licked her lips, as if she had seen some delicious food."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " \"Corroded by the Demon Qi?\" Yang Kai looked at Zhan Wu Hen coldly and sneered, \"That's nothing!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen furrowed his brows and shouted in a low voice, \"There's a Demon in your heart!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai grinned wildly, but he didn't make any sound. He said with a complacent look, \"Many thanks to Senior!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen shouted angrily, \"Restrain your mind and keep your mind clear. Otherwise, you will be in deep trouble!\""
}]


const dataPre = [{"name": "chapter", "id": ["-1"], text: "Chapter 0"},{
	"name": "sent",
	"id": ["-1"],
	"text": " \"So you're admitting it?\" Zhan Wu Hen poked the Embodiment's forehead with his finger. The two-hundred-metre-tall Embodiment instantly froze in place, unable to move."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai grit his teeth and looked at him, saying in a deep voice, \"It does cultivate the Heaven Devouring Battle Law, but it has never used this Secret Art to commit crimes. The people it has killed were all those who deserved to be killed, and it has never killed a single soul. Why is Senior talking about the Secret Art it cultivates?\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen said, \"If it was any other Secret Art, it would have been fine, but the Heaven Devouring Battle Law …\" He slowly shook his head and said, \"Yang Kai, do you remember that this King once told you that this King had a good friend named Qing Lian who died at the hands of Wu Pa in the Shattered Star Sea?\""
}, {"name": "sent", "id": ["-1"], "text": " Yang Kai nodded and said, \"Of course this Junior remembers.\""}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen said again, \"Then you should remember that this King also said that in this life, this King and Wu Pa will be irreconcilable!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai said, \"This matter has passed for tens of thousands of years. Why does Senior still take it to heart?\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " \"It's not that this King takes it to heart, but you don't understand the evil of this Secret Art at all. Wu Pa is also a talented person, and this King admits that he is inferior to him, but because of this Secret Art, his mind was distorted. Although he became a Great Emperor, his name became infamous for tens of thousands of years. You have never experienced the horror of the entire Star Boundary being shrouded by the name of Heaven Devouring, nor have you seen the tragedy of the Shattered Star Sea Emperors, so you naturally underestimate the power of the Heaven Devouring Battle Law. Since this King knows all this, he can't just sit back and do nothing, or it will be too late!\""
}, {"name": "sent", "id": ["-1"], "text": " Yang Kai said in a deep voice, \"Then what does Senior want?\""}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen narrowed his eyes slightly, staring at the Embodiment, and said lightly, \"Break its Secret Art and cripple its cultivation!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " \"Do I have to do this?\" Yang Kai's eyes drooped, and his voice was low. The hair on his forehead cast a thick shadow, blocking the light in front of him."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " \"It must be done!\" Zhan Wu Hen turned to look at him. \"If you want to blame me, this King has nothing to say, but the Heaven Devouring Battle Law must not be allowed to exist in this world!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " As he spoke, a milky white halo suddenly blossomed from his fingertip. The halo landed on the Embodiment's forehead like a dazzling lamp, dispelling all the darkness in the world."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " With a deafening dragon roar, Yang Kai's figure rapidly expanded. In the blink of an eye, he had turned into a half-dragon that was thirty-two meters tall. His Dragon Pressure filled the air, causing the 200,000 soldiers of Roaring Tiger City to shiver."
}, {"name": "sent", "id": ["-1"], "text": " The dragon claw tore through the void and grabbed towards Zhan Wuhen."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wuhen, who had been nonchalant all this while, finally had a slight change in expression. He raised his other palm to meet the dragon claw."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " With a loud bang, the dragon claw shattered. Zhan Wuhen's figure also swayed. But right at this moment, a dragon tail swept out, sweeping towards Zhan Wuhen with the power to destroy heaven and earth. Wherever the dragon's tail swept past, a pitch-black crack appeared in the void."
}, {"name": "sent", "id": ["-1"], "text": " Zhan Shan. Wu Hen's eyes s. he."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " However, he seemed to have underestimated the power of the tail, and he was knocked back dozens of meters. Taking advantage of this opportunity, Yang Kai had already summoned his Embodiment back. The two huge figures stood in the world, looking down on all living beings with cold expressions."
}, {"name": "sent", "id": ["-1"], "text": " \"Yang Kai, don't make a mistake!\" Zhan Wu Hen looked at him indifferently."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai shook his head slowly. \"Senior, please retreat. There's still room for negotiation.\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen looked at him with a pained expression. \"Did this King's words just now play the lute to a cow?\""
}, {"name": "sent", "id": ["-1"], "text": " Yang Kai said resolutely, \"Please let it go, Senior!\""}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wuhen let out a long sigh. \"Why bother? You're not this King's opponent, and you know it. You'll only suffer if you make an enemy of this King. \""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai said, \"It doesn't matter whether it's my opponent or not. What matters is how I choose.\" He turned to look at the Embodiment and said, \"To Senior, it's not allowed to exist in this world because it cultivated the Heaven Devouring Battle Law. But to this Junior, it's the best partner. No one can destroy it!\""
}, {"name": "sent", "id": ["-1"], "text": " Zhan Wu Hen nodded slightly. \"It looks like we can only fight to the death.\""}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai took a deep breath. \"Senior, don't force me.\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen laughed. \"You have to bear the consequences of your own choices. Let this King test your strength.\" After saying that, he rushed over in a flash."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai's eyes narrowed. Without needing to communicate, he and the Embodiment spread out, one on the left and one on the right. One activated the Dragon Race's Secret Technique, while the other activated the Heaven Devouring Domain."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " With two loud bangs, Zhan Wu Hen didn't seem to make any movements, but Yang Kai and the Embodiment felt an irresistible force coming at them. The two huge figures were sent flying, crashing through countless houses along the way."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen took advantage of this opportunity to turn around and pounce on the Embodiment. It seemed that he was determined to break the Embodiment's Secret Technique first and cripple its cultivation."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " How could Yang Kai allow that? As he retreated, he raised his hand and summoned the Mountain River Bell. The ancient bell rotated and expanded in the wind, heading straight for Zhan Wu Hen."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen didn't even look at it. He turned around in mid-air and kicked the Mountain River Bell. With a loud bang, the entire Roaring Tiger City trembled. Hundreds of thousands of people hugged their heads in pain."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The Mountain River Bell was kicked away, but Zhan Wu Hen used the rebound force to quickly approach the Embodiment."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The Embodiment roared angrily. The evil flames on its body burned brightly, gathering into a raging flame that engulfed Zhan Wu Hen."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen didn't dodge. His Emperor Qi surged on the surface of his body, and he was unharmed. In the blink of an eye, he arrived in front of the Embodiment, forcing the Embodiment to retreat. Seeing that the Embodiment had nowhere to retreat, it could only punch out with both fists."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " At the crucial moment, Yang Kai appeared in a flash. His body, which was taller than the Embodiment, stood beside it and punched out."
}, {"name": "sent", "id": ["-1"], "text": " * Boom … *"}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Two huge figures flew out. Even with their combined strength, they were unable to resist the power of Zhan Wu Hen's palm. The strength of a Great Emperor was evident. This was still the battlefield in Roaring Tiger City. Zhan Wu Hen had some misgivings and didn't use his full strength. Otherwise, Yang Kai and the Embodiment would have been even worse off."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " As he retreated, Yang Kai's eyes narrowed. This was because Zhan Wu Hen was chasing after him without any hesitation."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " This was the first time he was fighting a Great Emperor head-on. Yang Kai didn't hold back at all, but the gap in strength and realm was like a chasm. He couldn't see any hope of victory."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen's attack method was extremely simple. He didn't use any fancy Secret Techniques, but his fists, palms, and feet were all the most powerful weapons in the world. Every casual attack contained great power."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The hundreds of thousands of people in the city watched without blinking. They marveled at the terror of a Great Emperor, but they were also worried for Yang Kai."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The rumbling sounds were endless. Countless houses in the city had collapsed, and broken walls could be seen everywhere. The battle was one-sided from the very beginning. Yang Kai and the Embodiment were no match for Zhan Wu Hen at all. The two huge figures were beaten back and forth like sandbags. They didn't even have the strength to fight back."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " There were several times when the Embodiment's cultivation was almost crippled by Zhan Wu Hen. Fortunately, Yang Kai arrived at the critical moment and saved it. However, in this situation, it was only a matter of time before Yang Kai and the Embodiment were defeated."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The Mountain and River Bell, the Dragon Race's Secret Technique, the Flowing Time Seal, and the Space Divine Ability. Yang Kai had used almost all of them. However, these Divine Abilities that had always been successful in the past were all useless in front of Zhan Wu Hen. He could break them with a raise of his hand."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai was in a state of madness. He wantonly used his power. He didn't care whether he would destroy Roaring Tiger City because of this."
}, {"name": "sent", "id": ["-1"], "text": " With another loud bang, Yang Kai and the Embodiment were sent flying again."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " However, this time, Zhan Wu Hen didn't give Yang Kai any chance to rescue him. He stretched out his hand, and a giant hand made of Yuan Qi appeared and grabbed the Embodiment's huge body."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Under the restraint of Yuan Qi, the Evil Fire on the Embodiment's body dimmed. The two-hundred-meter-tall body struggled with all its might, but it was to no avail."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Lines visible to the naked eye suddenly spread out from the giant hand made of Yuan Qi and gradually enveloped the Embodiment's entire body. It was like a seal, like a Secret Technique."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen's voice resounded through the world. \"Yang Kai, I hope that you will take warning from this and not walk the path of evil.\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai's eyes were bloodshot. He clenched his fists tightly and stood up from the ruins. He roared in grief and indignation, \"I refuse to accept this!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen shook his head slowly. Under the stimulation of his Emperor Qi, the lines on the Embodiment's body became denser and denser, gradually enveloping its entire body. Even though no one could recognize what these lines were, they knew that it was definitely Zhan Wu Hen's method of crippling its cultivation."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Such a powerful existence was actually crippled by a Great Emperor because it cultivated the Heaven Devouring Battle Law. Anyone would feel that it was a pity. However, this matter was related to the Heaven Devouring Great Emperor and the Heaven Devouring Battle Law. No one could say whether Zhan Wu Hen's actions were right or wrong."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Right at this moment, Zhan Wu Hen suddenly furrowed his brows and turned to look at Yang Kai."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " With just one look, he immediately revealed a shocked expression. He shouted, \"Yang Kai, you've been corroded by the Demon Qi?\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " As soon as he said this, everyone's expression changed drastically. They all looked at Yang Kai."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " They saw that Yang Kai's half-dragon body was actually emitting black Qi. It was filled with an evil and ruthless feeling. Everyone was naturally familiar with this black Qi. After fighting against the Demon Race for such a long time, everyone had a very thorough understanding of Demon Qi."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " At this moment, what was being emitted from Yang Kai's body was Demon Qi. Moreover, it was extremely pure Demon Qi. No one had felt such pure and rich Demon Qi from the Demon Kings on the battlefield."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Li Jiao's eyes were about to pop out. He really couldn't figure out when Yang Kai had been corroded by the Demon Qi. Wasn't he a Great Magus? He also had the Dragon Race's bloodline. How could he be corroded by the Demon Qi so easily? There were no signs of this happening before."
}, {"name": "sent", "id": ["-1"], "text": " The 200,000 soldiers also couldn't believe it."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Only Yu Ru Meng's beautiful eyes were looking at Yang Kai. She even stuck out her scarlet tongue and licked her lips, as if she had seen some delicious food."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " \"Corroded by the Demon Qi?\" Yang Kai looked at Zhan Wu Hen coldly and sneered, \"That's nothing!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen furrowed his brows and shouted in a low voice, \"There's a Demon in your heart!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai grinned wildly, but he didn't make any sound. He said with a complacent look, \"Many thanks to Senior!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen shouted angrily, \"Restrain your mind and keep your mind clear. Otherwise, you will be in deep trouble!\""
}]

const dataNext = [{"name": "chapter", "id": ["-1"], text: "Chapter 2"},{
	"name": "sent",
	"id": ["-1"],
	"text": " \"So you're admitting it?\" Zhan Wu Hen poked the Embodiment's forehead with his finger. The two-hundred-metre-tall Embodiment instantly froze in place, unable to move."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai grit his teeth and looked at him, saying in a deep voice, \"It does cultivate the Heaven Devouring Battle Law, but it has never used this Secret Art to commit crimes. The people it has killed were all those who deserved to be killed, and it has never killed a single soul. Why is Senior talking about the Secret Art it cultivates?\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen said, \"If it was any other Secret Art, it would have been fine, but the Heaven Devouring Battle Law …\" He slowly shook his head and said, \"Yang Kai, do you remember that this King once told you that this King had a good friend named Qing Lian who died at the hands of Wu Pa in the Shattered Star Sea?\""
}, {"name": "sent", "id": ["-1"], "text": " Yang Kai nodded and said, \"Of course this Junior remembers.\""}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen said again, \"Then you should remember that this King also said that in this life, this King and Wu Pa will be irreconcilable!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai said, \"This matter has passed for tens of thousands of years. Why does Senior still take it to heart?\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " \"It's not that this King takes it to heart, but you don't understand the evil of this Secret Art at all. Wu Pa is also a talented person, and this King admits that he is inferior to him, but because of this Secret Art, his mind was distorted. Although he became a Great Emperor, his name became infamous for tens of thousands of years. You have never experienced the horror of the entire Star Boundary being shrouded by the name of Heaven Devouring, nor have you seen the tragedy of the Shattered Star Sea Emperors, so you naturally underestimate the power of the Heaven Devouring Battle Law. Since this King knows all this, he can't just sit back and do nothing, or it will be too late!\""
}, {"name": "sent", "id": ["-1"], "text": " Yang Kai said in a deep voice, \"Then what does Senior want?\""}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen narrowed his eyes slightly, staring at the Embodiment, and said lightly, \"Break its Secret Art and cripple its cultivation!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " \"Do I have to do this?\" Yang Kai's eyes drooped, and his voice was low. The hair on his forehead cast a thick shadow, blocking the light in front of him."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " \"It must be done!\" Zhan Wu Hen turned to look at him. \"If you want to blame me, this King has nothing to say, but the Heaven Devouring Battle Law must not be allowed to exist in this world!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " As he spoke, a milky white halo suddenly blossomed from his fingertip. The halo landed on the Embodiment's forehead like a dazzling lamp, dispelling all the darkness in the world."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " With a deafening dragon roar, Yang Kai's figure rapidly expanded. In the blink of an eye, he had turned into a half-dragon that was thirty-two meters tall. His Dragon Pressure filled the air, causing the 200,000 soldiers of Roaring Tiger City to shiver."
}, {"name": "sent", "id": ["-1"], "text": " The dragon claw tore through the void and grabbed towards Zhan Wuhen."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wuhen, who had been nonchalant all this while, finally had a slight change in expression. He raised his other palm to meet the dragon claw."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " With a loud bang, the dragon claw shattered. Zhan Wuhen's figure also swayed. But right at this moment, a dragon tail swept out, sweeping towards Zhan Wuhen with the power to destroy heaven and earth. Wherever the dragon's tail swept past, a pitch-black crack appeared in the void."
}, {"name": "sent", "id": ["-1"], "text": " Zhan Shan. Wu Hen's eyes s. he."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " However, he seemed to have underestimated the power of the tail, and he was knocked back dozens of meters. Taking advantage of this opportunity, Yang Kai had already summoned his Embodiment back. The two huge figures stood in the world, looking down on all living beings with cold expressions."
}, {"name": "sent", "id": ["-1"], "text": " \"Yang Kai, don't make a mistake!\" Zhan Wu Hen looked at him indifferently."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai shook his head slowly. \"Senior, please retreat. There's still room for negotiation.\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen looked at him with a pained expression. \"Did this King's words just now play the lute to a cow?\""
}, {"name": "sent", "id": ["-1"], "text": " Yang Kai said resolutely, \"Please let it go, Senior!\""}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wuhen let out a long sigh. \"Why bother? You're not this King's opponent, and you know it. You'll only suffer if you make an enemy of this King. \""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai said, \"It doesn't matter whether it's my opponent or not. What matters is how I choose.\" He turned to look at the Embodiment and said, \"To Senior, it's not allowed to exist in this world because it cultivated the Heaven Devouring Battle Law. But to this Junior, it's the best partner. No one can destroy it!\""
}, {"name": "sent", "id": ["-1"], "text": " Zhan Wu Hen nodded slightly. \"It looks like we can only fight to the death.\""}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai took a deep breath. \"Senior, don't force me.\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen laughed. \"You have to bear the consequences of your own choices. Let this King test your strength.\" After saying that, he rushed over in a flash."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai's eyes narrowed. Without needing to communicate, he and the Embodiment spread out, one on the left and one on the right. One activated the Dragon Race's Secret Technique, while the other activated the Heaven Devouring Domain."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " With two loud bangs, Zhan Wu Hen didn't seem to make any movements, but Yang Kai and the Embodiment felt an irresistible force coming at them. The two huge figures were sent flying, crashing through countless houses along the way."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen took advantage of this opportunity to turn around and pounce on the Embodiment. It seemed that he was determined to break the Embodiment's Secret Technique first and cripple its cultivation."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " How could Yang Kai allow that? As he retreated, he raised his hand and summoned the Mountain River Bell. The ancient bell rotated and expanded in the wind, heading straight for Zhan Wu Hen."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen didn't even look at it. He turned around in mid-air and kicked the Mountain River Bell. With a loud bang, the entire Roaring Tiger City trembled. Hundreds of thousands of people hugged their heads in pain."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The Mountain River Bell was kicked away, but Zhan Wu Hen used the rebound force to quickly approach the Embodiment."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The Embodiment roared angrily. The evil flames on its body burned brightly, gathering into a raging flame that engulfed Zhan Wu Hen."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen didn't dodge. His Emperor Qi surged on the surface of his body, and he was unharmed. In the blink of an eye, he arrived in front of the Embodiment, forcing the Embodiment to retreat. Seeing that the Embodiment had nowhere to retreat, it could only punch out with both fists."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " At the crucial moment, Yang Kai appeared in a flash. His body, which was taller than the Embodiment, stood beside it and punched out."
}, {"name": "sent", "id": ["-1"], "text": " * Boom … *"}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Two huge figures flew out. Even with their combined strength, they were unable to resist the power of Zhan Wu Hen's palm. The strength of a Great Emperor was evident. This was still the battlefield in Roaring Tiger City. Zhan Wu Hen had some misgivings and didn't use his full strength. Otherwise, Yang Kai and the Embodiment would have been even worse off."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " As he retreated, Yang Kai's eyes narrowed. This was because Zhan Wu Hen was chasing after him without any hesitation."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " This was the first time he was fighting a Great Emperor head-on. Yang Kai didn't hold back at all, but the gap in strength and realm was like a chasm. He couldn't see any hope of victory."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen's attack method was extremely simple. He didn't use any fancy Secret Techniques, but his fists, palms, and feet were all the most powerful weapons in the world. Every casual attack contained great power."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The hundreds of thousands of people in the city watched without blinking. They marveled at the terror of a Great Emperor, but they were also worried for Yang Kai."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The rumbling sounds were endless. Countless houses in the city had collapsed, and broken walls could be seen everywhere. The battle was one-sided from the very beginning. Yang Kai and the Embodiment were no match for Zhan Wu Hen at all. The two huge figures were beaten back and forth like sandbags. They didn't even have the strength to fight back."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " There were several times when the Embodiment's cultivation was almost crippled by Zhan Wu Hen. Fortunately, Yang Kai arrived at the critical moment and saved it. However, in this situation, it was only a matter of time before Yang Kai and the Embodiment were defeated."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The Mountain and River Bell, the Dragon Race's Secret Technique, the Flowing Time Seal, and the Space Divine Ability. Yang Kai had used almost all of them. However, these Divine Abilities that had always been successful in the past were all useless in front of Zhan Wu Hen. He could break them with a raise of his hand."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai was in a state of madness. He wantonly used his power. He didn't care whether he would destroy Roaring Tiger City because of this."
}, {"name": "sent", "id": ["-1"], "text": " With another loud bang, Yang Kai and the Embodiment were sent flying again."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " However, this time, Zhan Wu Hen didn't give Yang Kai any chance to rescue him. He stretched out his hand, and a giant hand made of Yuan Qi appeared and grabbed the Embodiment's huge body."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Under the restraint of Yuan Qi, the Evil Fire on the Embodiment's body dimmed. The two-hundred-meter-tall body struggled with all its might, but it was to no avail."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Lines visible to the naked eye suddenly spread out from the giant hand made of Yuan Qi and gradually enveloped the Embodiment's entire body. It was like a seal, like a Secret Technique."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen's voice resounded through the world. \"Yang Kai, I hope that you will take warning from this and not walk the path of evil.\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai's eyes were bloodshot. He clenched his fists tightly and stood up from the ruins. He roared in grief and indignation, \"I refuse to accept this!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen shook his head slowly. Under the stimulation of his Emperor Qi, the lines on the Embodiment's body became denser and denser, gradually enveloping its entire body. Even though no one could recognize what these lines were, they knew that it was definitely Zhan Wu Hen's method of crippling its cultivation."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Such a powerful existence was actually crippled by a Great Emperor because it cultivated the Heaven Devouring Battle Law. Anyone would feel that it was a pity. However, this matter was related to the Heaven Devouring Great Emperor and the Heaven Devouring Battle Law. No one could say whether Zhan Wu Hen's actions were right or wrong."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Right at this moment, Zhan Wu Hen suddenly furrowed his brows and turned to look at Yang Kai."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " With just one look, he immediately revealed a shocked expression. He shouted, \"Yang Kai, you've been corroded by the Demon Qi?\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " As soon as he said this, everyone's expression changed drastically. They all looked at Yang Kai."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " They saw that Yang Kai's half-dragon body was actually emitting black Qi. It was filled with an evil and ruthless feeling. Everyone was naturally familiar with this black Qi. After fighting against the Demon Race for such a long time, everyone had a very thorough understanding of Demon Qi."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " At this moment, what was being emitted from Yang Kai's body was Demon Qi. Moreover, it was extremely pure Demon Qi. No one had felt such pure and rich Demon Qi from the Demon Kings on the battlefield."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Li Jiao's eyes were about to pop out. He really couldn't figure out when Yang Kai had been corroded by the Demon Qi. Wasn't he a Great Magus? He also had the Dragon Race's bloodline. How could he be corroded by the Demon Qi so easily? There were no signs of this happening before."
}, {"name": "sent", "id": ["-1"], "text": " The 200,000 soldiers also couldn't believe it."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Only Yu Ru Meng's beautiful eyes were looking at Yang Kai. She even stuck out her scarlet tongue and licked her lips, as if she had seen some delicious food."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " \"Corroded by the Demon Qi?\" Yang Kai looked at Zhan Wu Hen coldly and sneered, \"That's nothing!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen furrowed his brows and shouted in a low voice, \"There's a Demon in your heart!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai grinned wildly, but he didn't make any sound. He said with a complacent look, \"Many thanks to Senior!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen shouted angrily, \"Restrain your mind and keep your mind clear. Otherwise, you will be in deep trouble!\""
}]


const dataReplace = [{"name": "chapter", "id": ["-1"], text: "Chapter new 1"},{
	"name": "sent",
	"id": ["-1"],
	"text": " \"So you're admitting it?\" Zhan Wu Hen poked the Embodiment's forehead with his finger. The two-hundred-metre-tall Embodiment instantly froze in place, unable to move."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai grit his teeth and looked at him, saying in a deep voice, \"It does cultivate the Heaven Devouring Battle Law, but it has never used this Secret Art to commit crimes. The people it has killed were all those who deserved to be killed, and it has never killed a single soul. Why is Senior talking about the Secret Art it cultivates?\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen said, \"If it was any other Secret Art, it would have been fine, but the Heaven Devouring Battle Law …\" He slowly shook his head and said, \"Yang Kai, do you remember that this King once told you that this King had a good friend named Qing Lian who died at the hands of Wu Pa in the Shattered Star Sea?\""
}, {"name": "sent", "id": ["-1"], "text": " Yang Kai nodded and said, \"Of course this Junior remembers.\""}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen said again, \"Then you should remember that this King also said that in this life, this King and Wu Pa will be irreconcilable!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai said, \"This matter has passed for tens of thousands of years. Why does Senior still take it to heart?\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " \"It's not that this King takes it to heart, but you don't understand the evil of this Secret Art at all. Wu Pa is also a talented person, and this King admits that he is inferior to him, but because of this Secret Art, his mind was distorted. Although he became a Great Emperor, his name became infamous for tens of thousands of years. You have never experienced the horror of the entire Star Boundary being shrouded by the name of Heaven Devouring, nor have you seen the tragedy of the Shattered Star Sea Emperors, so you naturally underestimate the power of the Heaven Devouring Battle Law. Since this King knows all this, he can't just sit back and do nothing, or it will be too late!\""
}, {"name": "sent", "id": ["-1"], "text": " Yang Kai said in a deep voice, \"Then what does Senior want?\""}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen narrowed his eyes slightly, staring at the Embodiment, and said lightly, \"Break its Secret Art and cripple its cultivation!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " \"Do I have to do this?\" Yang Kai's eyes drooped, and his voice was low. The hair on his forehead cast a thick shadow, blocking the light in front of him."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " \"It must be done!\" Zhan Wu Hen turned to look at him. \"If you want to blame me, this King has nothing to say, but the Heaven Devouring Battle Law must not be allowed to exist in this world!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " As he spoke, a milky white halo suddenly blossomed from his fingertip. The halo landed on the Embodiment's forehead like a dazzling lamp, dispelling all the darkness in the world."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " With a deafening dragon roar, Yang Kai's figure rapidly expanded. In the blink of an eye, he had turned into a half-dragon that was thirty-two meters tall. His Dragon Pressure filled the air, causing the 200,000 soldiers of Roaring Tiger City to shiver."
}, {"name": "sent", "id": ["-1"], "text": " The dragon claw tore through the void and grabbed towards Zhan Wuhen."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wuhen, who had been nonchalant all this while, finally had a slight change in expression. He raised his other palm to meet the dragon claw."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " With a loud bang, the dragon claw shattered. Zhan Wuhen's figure also swayed. But right at this moment, a dragon tail swept out, sweeping towards Zhan Wuhen with the power to destroy heaven and earth. Wherever the dragon's tail swept past, a pitch-black crack appeared in the void."
}, {"name": "sent", "id": ["-1"], "text": " Zhan Shan. Wu Hen's eyes s. he."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " However, he seemed to have underestimated the power of the tail, and he was knocked back dozens of meters. Taking advantage of this opportunity, Yang Kai had already summoned his Embodiment back. The two huge figures stood in the world, looking down on all living beings with cold expressions."
}, {"name": "sent", "id": ["-1"], "text": " \"Yang Kai, don't make a mistake!\" Zhan Wu Hen looked at him indifferently."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai shook his head slowly. \"Senior, please retreat. There's still room for negotiation.\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen looked at him with a pained expression. \"Did this King's words just now play the lute to a cow?\""
}, {"name": "sent", "id": ["-1"], "text": " Yang Kai said resolutely, \"Please let it go, Senior!\""}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wuhen let out a long sigh. \"Why bother? You're not this King's opponent, and you know it. You'll only suffer if you make an enemy of this King. \""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai said, \"It doesn't matter whether it's my opponent or not. What matters is how I choose.\" He turned to look at the Embodiment and said, \"To Senior, it's not allowed to exist in this world because it cultivated the Heaven Devouring Battle Law. But to this Junior, it's the best partner. No one can destroy it!\""
}, {"name": "sent", "id": ["-1"], "text": " Zhan Wu Hen nodded slightly. \"It looks like we can only fight to the death.\""}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai took a deep breath. \"Senior, don't force me.\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen laughed. \"You have to bear the consequences of your own choices. Let this King test your strength.\" After saying that, he rushed over in a flash."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai's eyes narrowed. Without needing to communicate, he and the Embodiment spread out, one on the left and one on the right. One activated the Dragon Race's Secret Technique, while the other activated the Heaven Devouring Domain."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " With two loud bangs, Zhan Wu Hen didn't seem to make any movements, but Yang Kai and the Embodiment felt an irresistible force coming at them. The two huge figures were sent flying, crashing through countless houses along the way."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen took advantage of this opportunity to turn around and pounce on the Embodiment. It seemed that he was determined to break the Embodiment's Secret Technique first and cripple its cultivation."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " How could Yang Kai allow that? As he retreated, he raised his hand and summoned the Mountain River Bell. The ancient bell rotated and expanded in the wind, heading straight for Zhan Wu Hen."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen didn't even look at it. He turned around in mid-air and kicked the Mountain River Bell. With a loud bang, the entire Roaring Tiger City trembled. Hundreds of thousands of people hugged their heads in pain."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The Mountain River Bell was kicked away, but Zhan Wu Hen used the rebound force to quickly approach the Embodiment."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The Embodiment roared angrily. The evil flames on its body burned brightly, gathering into a raging flame that engulfed Zhan Wu Hen."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen didn't dodge. His Emperor Qi surged on the surface of his body, and he was unharmed. In the blink of an eye, he arrived in front of the Embodiment, forcing the Embodiment to retreat. Seeing that the Embodiment had nowhere to retreat, it could only punch out with both fists."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " At the crucial moment, Yang Kai appeared in a flash. His body, which was taller than the Embodiment, stood beside it and punched out."
}, {"name": "sent", "id": ["-1"], "text": " * Boom … *"}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Two huge figures flew out. Even with their combined strength, they were unable to resist the power of Zhan Wu Hen's palm. The strength of a Great Emperor was evident. This was still the battlefield in Roaring Tiger City. Zhan Wu Hen had some misgivings and didn't use his full strength. Otherwise, Yang Kai and the Embodiment would have been even worse off."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " As he retreated, Yang Kai's eyes narrowed. This was because Zhan Wu Hen was chasing after him without any hesitation."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " This was the first time he was fighting a Great Emperor head-on. Yang Kai didn't hold back at all, but the gap in strength and realm was like a chasm. He couldn't see any hope of victory."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen's attack method was extremely simple. He didn't use any fancy Secret Techniques, but his fists, palms, and feet were all the most powerful weapons in the world. Every casual attack contained great power."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The hundreds of thousands of people in the city watched without blinking. They marveled at the terror of a Great Emperor, but they were also worried for Yang Kai."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The rumbling sounds were endless. Countless houses in the city had collapsed, and broken walls could be seen everywhere. The battle was one-sided from the very beginning. Yang Kai and the Embodiment were no match for Zhan Wu Hen at all. The two huge figures were beaten back and forth like sandbags. They didn't even have the strength to fight back."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " There were several times when the Embodiment's cultivation was almost crippled by Zhan Wu Hen. Fortunately, Yang Kai arrived at the critical moment and saved it. However, in this situation, it was only a matter of time before Yang Kai and the Embodiment were defeated."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " The Mountain and River Bell, the Dragon Race's Secret Technique, the Flowing Time Seal, and the Space Divine Ability. Yang Kai had used almost all of them. However, these Divine Abilities that had always been successful in the past were all useless in front of Zhan Wu Hen. He could break them with a raise of his hand."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai was in a state of madness. He wantonly used his power. He didn't care whether he would destroy Roaring Tiger City because of this."
}, {"name": "sent", "id": ["-1"], "text": " With another loud bang, Yang Kai and the Embodiment were sent flying again."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " However, this time, Zhan Wu Hen didn't give Yang Kai any chance to rescue him. He stretched out his hand, and a giant hand made of Yuan Qi appeared and grabbed the Embodiment's huge body."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Under the restraint of Yuan Qi, the Evil Fire on the Embodiment's body dimmed. The two-hundred-meter-tall body struggled with all its might, but it was to no avail."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Lines visible to the naked eye suddenly spread out from the giant hand made of Yuan Qi and gradually enveloped the Embodiment's entire body. It was like a seal, like a Secret Technique."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen's voice resounded through the world. \"Yang Kai, I hope that you will take warning from this and not walk the path of evil.\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai's eyes were bloodshot. He clenched his fists tightly and stood up from the ruins. He roared in grief and indignation, \"I refuse to accept this!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen shook his head slowly. Under the stimulation of his Emperor Qi, the lines on the Embodiment's body became denser and denser, gradually enveloping its entire body. Even though no one could recognize what these lines were, they knew that it was definitely Zhan Wu Hen's method of crippling its cultivation."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Such a powerful existence was actually crippled by a Great Emperor because it cultivated the Heaven Devouring Battle Law. Anyone would feel that it was a pity. However, this matter was related to the Heaven Devouring Great Emperor and the Heaven Devouring Battle Law. No one could say whether Zhan Wu Hen's actions were right or wrong."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Right at this moment, Zhan Wu Hen suddenly furrowed his brows and turned to look at Yang Kai."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " With just one look, he immediately revealed a shocked expression. He shouted, \"Yang Kai, you've been corroded by the Demon Qi?\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " As soon as he said this, everyone's expression changed drastically. They all looked at Yang Kai."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " They saw that Yang Kai's half-dragon body was actually emitting black Qi. It was filled with an evil and ruthless feeling. Everyone was naturally familiar with this black Qi. After fighting against the Demon Race for such a long time, everyone had a very thorough understanding of Demon Qi."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " At this moment, what was being emitted from Yang Kai's body was Demon Qi. Moreover, it was extremely pure Demon Qi. No one had felt such pure and rich Demon Qi from the Demon Kings on the battlefield."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Li Jiao's eyes were about to pop out. He really couldn't figure out when Yang Kai had been corroded by the Demon Qi. Wasn't he a Great Magus? He also had the Dragon Race's bloodline. How could he be corroded by the Demon Qi so easily? There were no signs of this happening before."
}, {"name": "sent", "id": ["-1"], "text": " The 200,000 soldiers also couldn't believe it."}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Only Yu Ru Meng's beautiful eyes were looking at Yang Kai. She even stuck out her scarlet tongue and licked her lips, as if she had seen some delicious food."
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " \"Corroded by the Demon Qi?\" Yang Kai looked at Zhan Wu Hen coldly and sneered, \"That's nothing!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen furrowed his brows and shouted in a low voice, \"There's a Demon in your heart!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Yang Kai grinned wildly, but he didn't make any sound. He said with a complacent look, \"Many thanks to Senior!\""
}, {
	"name": "sent",
	"id": ["-1"],
	"text": " Zhan Wu Hen shouted angrily, \"Restrain your mind and keep your mind clear. Otherwise, you will be in deep trouble!\""
}]
/*
TextProps
x?: NumberArray;
y?: NumberArray;
dx?: NumberArray;
dy?: NumberArray;
rotate?: NumberArray;
opacity?: NumberProp;
inlineSize?: NumberProp;

TextSpecificProps
alignmentBaseline?: AlignmentBaseline;
baselineShift?: BaselineShift;
verticalAlign?: NumberProp;
lengthAdjust?: LengthAdjust;
textLength?: NumberProp;
fontData?: null | { [name: string]: unknown };
fontFeatureSettings?: string;

fontStyle?: FontStyle;
fontVariant?: FontVariant;
fontWeight?: FontWeight;
fontStretch?: FontStretch;
fontSize?: NumberProp;
fontFamily?: string;
textAnchor?: TextAnchor;
textDecoration?: TextDecoration;
letterSpacing?: NumberProp; //字母间距
wordSpacing?: NumberProp; //空格的大小
kerning?: NumberProp; //单个文字间距
fontFeatureSettings?: string;
fontVariantLigatures?: FontVariantLigatures;
fontVariationSettings?: string;
 */
const App = () => {

	const [isLight, setLight] = useState(true);
	const [fontSize, setFontSize] = useState(20);

	const novelContainer = useRef();

	return (
		<View style={StyleSheet.absoluteFill}>
			<StatusBar/>
			<View style={{flex: 1}}>
				<NovelContainer
					ref={novelContainer}
					currentChapter={[...data]}
					fontSize={fontSize}
					chapterFontSize={36}
					fontColor={isLight ? '#000000' : '#FFFFFF'}
					backgroundColor={isLight ? '#FFFFFF' : '#000000'}/>
			</View>

			{/*<TouchableOpacity*/}
			{/*	style={{*/}
			{/*		position: 'absolute',*/}
			{/*		top: 0,*/}
			{/*		alignSelf: 'center',*/}
			{/*		backgroundColor: 'green'*/}
			{/*	}}*/}
			{/*	onPress={() => setLight(prev => !prev)}*/}
			{/*	activeOpacity={0.5}>*/}
			{/*	<Text>mode</Text>*/}
			{/*</TouchableOpacity>*/}

			{/*<TouchableOpacity*/}
			{/*	style={{*/}
			{/*		position: 'absolute',*/}
			{/*		top: 20,*/}
			{/*		alignSelf: 'center',*/}
			{/*		backgroundColor: 'green'*/}
			{/*	}}*/}
			{/*	onPress={() => setFontSize(prev => prev + 1)}*/}
			{/*	activeOpacity={0.5}>*/}
			{/*	<Text>plus-font</Text>*/}
			{/*</TouchableOpacity>*/}

			{/*<TouchableOpacity*/}
			{/*	style={{*/}
			{/*		position: 'absolute',*/}
			{/*		top: 40,*/}
			{/*		alignSelf: 'center',*/}
			{/*		backgroundColor: 'green'*/}
			{/*	}}*/}
			{/*	onPress={() => setFontSize(prev => prev - 1)}*/}
			{/*	activeOpacity={0.5}>*/}
			{/*	<Text>minus-font</Text>*/}
			{/*</TouchableOpacity>*/}


			{/*<TouchableOpacity*/}
			{/*	style={{*/}
			{/*		position: 'absolute',*/}
			{/*		top: 60,*/}
			{/*		alignSelf: 'center',*/}
			{/*		backgroundColor: 'green'*/}
			{/*	}}*/}
			{/*	onPress={() => novelContainer.current.addPreChapter([...dataPre])}*/}
			{/*	activeOpacity={0.5}>*/}
			{/*	<Text>add pre</Text>*/}
			{/*</TouchableOpacity>*/}

			{/*<TouchableOpacity*/}
			{/*	style={{*/}
			{/*		position: 'absolute',*/}
			{/*		top: 80,*/}
			{/*		alignSelf: 'center',*/}
			{/*		backgroundColor: 'green'*/}
			{/*	}}*/}
			{/*	onPress={() => novelContainer.current.replaceChapter([...dataReplace])}*/}
			{/*	activeOpacity={0.5}>*/}
			{/*	<Text>replace</Text>*/}
			{/*</TouchableOpacity>*/}

			{/*<TouchableOpacity*/}
			{/*	style={{*/}
			{/*		position: 'absolute',*/}
			{/*		top: 100,*/}
			{/*		alignSelf: 'center',*/}
			{/*		backgroundColor: 'green'*/}
			{/*	}}*/}
			{/*	onPress={() => novelContainer.current.addNextChapter([...dataNext])}*/}
			{/*	activeOpacity={0.5}>*/}
			{/*	<Text>add next</Text>*/}
			{/*</TouchableOpacity>*/}

			{/*尺子*/}
			{/*<View style={{width: 10, height: 720, backgroundColor: 'red', top: 0, position: 'absolute'}}/>*/}

		</View>
	);
}

export default App;
