class Pokemon {
    constructor(name, picture, description, type, weakness, evolvesInto, number) {
        this.name = name;
        this.picture = picture;
        this.description = description;
        this.type = type;
        this.weakness = weakness;
        this.evolvesInto = evolvesInto;
        this.number = number;
    }
}

const bulbasaur = new Pokemon('bulbasaur', `img/bulbasaur.jpg`, `Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.`, 'Grass/Poison', 'Fire/Flying/Ice/Psychic', 'Ivysaur', 01);

const ivysaur = new Pokemon('ivysaur', `img/ivysaur.jpg`, `There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.`, 'Grass/Poison', 'Fire/Flying/Ice/Psychic', 'Venusaur', 02);

const venusaur = new Pokemon('venusaur', `img/venusaur.jpg`, `There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.`, 'Grass/Poison', 'Fire/Flying/Ice/Psychic', false, 03);

const charmander = new Pokemon('charmander', `img/charmander.jpg`, `The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.`, 'fire', 'Ground/Rock/Water', 'Charmeleon', 04);

const charmeleon = new Pokemon('charmeleon', `img/charmeleon.jpg`, `Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.`, 'fire', 'Ground/Rock/Water', 'Charizard', 05);

const charizard = new Pokemon('charizard', `img/charizard.jpg`, `Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.`, 'fire', 'Ground/Rock/Water', false, 06);

const squirtle = new Pokemon('squirtle', `img/squirtle.jpg`, `Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.`, 'Water', 'Grass/Electric', `Wartortle`, 07);

const wartortle = new Pokemon('wartortle', `img/wartortle.jpg`, `Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.`, 'Water', 'Grass/Electric', `Blastoise`, 08);

const blastoise = new Pokemon('blastoise', `img/blastoise.jpg`, `Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.`, 'Water', 'Grass/Electric', `Blastoise`, 09);

const caterpie = new Pokemon('caterpie', `img/caterpie.jpg`, `Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.`, 'Bug', 'Fire/Flying/Rock', `Metapod`, 10);

const metapod = new Pokemon('metapod', `img/metapod.jpg`, `The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.`, 'Bug', 'Fire/Flying/Rock', `Butterfree`, 11);

const butterfree = new Pokemon('butterfree', `img/butterfree.jpg`, `Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.`, 'Bug/Flying', 'Rock/Fire/Flying/Ice/Electric', false, 12);

const weedle = new Pokemon('weedle', `img/weedle.jpg`, `Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).`, 'Bug/Poison', 'Fire/Flying/Rock/Psychic', 'Kakuna', 13);

const kakuna = new Pokemon('kakuna', `img/kakuna.jpg`, `Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.`, 'Bug/Poison', 'Fire/Flying/Rock/Psychic', 'Beedrill', 14);

const beedrill = new Pokemon('beedrill', `img/beedrill.jpg`, `Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.`, 'Bug/Poison', 'Fire/Flying/Rock/Psychic', false, 15);

const pidgey = new Pokemon('pidgey', `img/pidgey.jpg`, `Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.`, 'Normal/Flying', 'Ice/Rock/Electric', 'Pidgeotto', 16);

const pidgeotto = new Pokemon('pidgeotto', `img/pidgeotto.jpg`, `Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.`, 'Normal/Flying', 'Ice/Rock/Electric', 'Pidgeot', 17);

const pidgeot = new Pokemon('pidgeot', `img/pidgeot.jpg`, `This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.`, 'Normal/Flying', 'Ice/Rock/Electric', false, 18);

const rattata = new Pokemon('rattata', `img/rattata.jpg`, `Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.`, 'Normal', 'Fighting', 'Raticate', 19);

const raticate = new Pokemon('raticate', `img/raticate.jpg`, `Raticate's sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.`, 'Normal', 'Fighting', false, 20);

const spearow = new Pokemon('spearow', `img/spearow.jpg`, `Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.`, 'Normal/Flying', 'Ice/Rock/Electric', 'Fearow', 21);

const fearow = new Pokemon('fearow', `img/fearow.jpg`, `Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey.`, 'Normal/Flying', 'Ice/Rock/Electric', false, 22);

const ekans = new Pokemon('ekans', `img/ekans.jpg`, `Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.`, 'Poison', 'Psychic/Ground', 'Arbok', 23);

const arbok = new Pokemon('arbok', `img/arbok.jpg`, `This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crushing embrace is impossible.`, 'Poison', 'Psychic/Ground', false, 24);

const pikachu = new Pokemon('pikachu', `img/pikachu.jpg`, `Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.`, 'Electric', 'Ground', 'Raichu', 25);

const raichu = new Pokemon('raichu', `img/raichu.jpg`, `If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.`, 'Electric', 'Ground', false, 26);

const sandshrew = new Pokemon('sandshrew', `img/sandshrew.jpg`, `Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies.`, 'Ground', 'Grass/Ice/Water', 'Sandslash', 27);

const sandslash = new Pokemon('sandslash', `img/sandslash.jpg` , `Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones.`, 'Ground', 'Grass/Ice/Water', false, 28);

const nidoranF = new Pokemon('nidoran ♀', `img/nidoran-f.jpg`, `Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.`, 'Poison', 'Psychic/Ground', 'Nidorina', 29);

const nidorina = new Pokemon('nidorina', `img/nidorina.jpg`, `When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.`, 'Poison', 'Psychic/Ground', 'Nidoqueen', 30);

const nidoqueen = new Pokemon('nidoqueen', `img/nidoqueen.jpg`, `Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.`, 'Poison/Ground', 'Water/Ground/Ice/Psychic', false, 31);

const nidoranM = new Pokemon('nidoran ♂', `img/nidoran-m.jpg`, `Nidoran♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon's notice.`, 'Poison', 'Psychic/Ground', 'Nidorino', 32);

const nidorino = new Pokemon('nidorino', `img/nidorino.jpg`, `Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.`, 'Poison', 'Psychic/Ground', 'Nidoking', 33);

const nidoking = new Pokemon('nidoking', `img/nidoking.jpg`, `Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.`, 'Poison/Ground', 'Water/Ground/Ice/Psychic', false, 34);

const clefairy = new Pokemon('clefairy', `img/clefairy.jpg`, `On every night of a full moon, groups of this Pokémon come out to play. When dawn arrives, the tired Clefairy return to their quiet mountain retreats and go to sleep nestled up against each other.`, 'Fairy', 'Steel/Poison', 'Clefable', 35);

const clefable = new Pokemon('clefable', `img/clefable.jpg`, `Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights.`, 'Fairy', 'Steel, Poison', false, 36);

const vulpix = new Pokemon('vulpix', `img/vulpix.jpg`, `At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its Trainer. The six tails become magnificently curled.`, 'Fire', 'Ground/Rock/Water', 'Ninetales', 37);

const ninetales = new Pokemon('ninetales', `img/ninetales.jpg`, `Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for a thousand years.`, 'Fire', 'Ground/Rock/Water', false, 38);

const jigglypuff = new Pokemon('jigglypuff', `img/jigglypuff.jpg`, `Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.`, 'Normal/Fairy', 'Steel/Poison', 'Wigglytuff', 39);

const wigglytuff = new Pokemon('wigglytuff', `img/wigglytuff.jpg`, `Wigglytuff has large, saucerlike eyes. The surfaces of its eyes are always covered with a thin layer of tears. If any dust gets in this Pokémon's eyes, it is quickly washed away.`, 'Normal/Fairy', 'Steel/Poison', false, 40);

const zubat = new Pokemon('zubat', `img/zubat.jpg`, `Zubat remains quietly unmoving in a dark spot during the bright daylight hours. It does so because prolonged exposure to the sun causes its body to become slightly burned.`, 'Poison/Flying', 'Ice/Rock/Psychic/Electric', 'Golbat', 41);

const golbat = new Pokemon('golbat', `img/golbat.jpg`, `Golbat loves to drink the blood of living things. It is particularly active in the pitch black of night. This Pokémon flits around in the night skies, seeking fresh blood.`, 'Poison/Flying', 'Ice/Rock/Psychic/Electric', false, 42);

const oddish = new Pokemon('oddish', `img/oddish.jpg`, `During the daytime, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become.`, 'Grass/Poison', 'Fire/Flying/Ice/Psychic', 'Gloom', 43);

const gloom = new Pokemon('gloom', `img/gloom.jpg`, `Gloom releases a foul fragrance from the pistil of its flower. When faced with danger, the stench worsens. If this Pokémon is feeling calm and secure, it does not release its usual stinky aroma.`, 'Grass/Poison', 'Fire/Flying/Ice/Psychic', 'Vileplume', 44);

const vileplume = new Pokemon('vileplume', `img/vileplume.jpg`, `Vileplume's toxic pollen triggers atrocious allergy attacks. That's why it is advisable never to approach any attractive flowers in a jungle, however pretty they may be.`, 'Grass/Poison', 'Fire/Flying/Ice/Psychic', false, 45);

const paras = new Pokemon('paras', `img/paras.jpg`, `Paras has parasitic mushrooms growing on its back called tochukaso. They grow large by drawing nutrients from this Bug Pokémon host. They are highly valued as a medicine for extending life.`, 'Bug/Grass', 'Fire/Flying/Poison/Rock/Bug/Ice', 'Parasect', 46);

const parasect = new Pokemon('parasect', `img/parasect.jpg`, `Parasect is known to infest large trees en masse and drain nutrients from the lower trunk and roots. When an infested tree dies, they move onto another tree all at once.`, 'Bug/Grass', 'Fire/Flying/Poison/Rock/Bug/Ice', false, 47);

const venonat = new Pokemon('venonat', `img/venonat.jpg`, `Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey.`, 'Bug/Poison', 'Fire/Flying/Rock/Psychic', 'Venomoth', 48);

const venomoth = new Pokemon('venomoth', `img/venomoth.jpg`, `Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness.`, 'Bug/Poison', 'Fire/Flying/Rock/Psychic', false, 49);

const diglett = new Pokemon('diglett', `img/diglett.jpg`, `Diglett are raised in most farms. The reason is simple—wherever this Pokémon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables.`, 'Ground', 'Grass/Ice/Water', 'Dugtrio', 50);

const dugtrio = new Pokemon('dugtrio', `img/dugtrio.jpg`, `Dugtrio are actually triplets that emerged from one body. As a result, each triplet thinks exactly like the other two triplets. They work cooperatively to burrow endlessly.`, 'Ground', 'Grass/Ice/Water', false, 51);

const meowth = new Pokemon('meowth', `img/meowth.jpg`, `Meowth withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this Pokémon loves shiny coins that glitter with light.`, 'Normal', 'Fighting', 'Persian', 52);

const persian = new Pokemon('persian', `img/persian.jpg`, `Persian has six bold whiskers that give it a look of toughness. The whiskers sense air movements to determine what is in the Pokémon's surrounding vicinity. It becomes docile if grabbed by the whiskers.`, 'Normal', 'Fighting', false, 53);

const psyduck = new Pokemon('psyduck', `img/psyduck.jpg`, `Psyduck uses a mysterious power. When it does so, this Pokémon generates brain waves that are supposedly only seen in sleepers. This discovery spurred controversy among scholars.`, 'Water', 'Grass/Electric', 'Golduck', 54);

const golduck = new Pokemon('golduck', `img/golduck.jpg`, `The webbed flippers on its forelegs and hind legs and the streamlined body of Golduck give it frightening speed. This Pokémon is definitely much faster than even the most athletic swimmer.`, 'Water', 'Grass/Electric', false, 55);

const mankey = new Pokemon('mankey', `img/mankey.jpg`, `When Mankey starts shaking and its nasal breathing turns rough, it's a sure sign that it is becoming angry. However, because it goes into a towering rage almost instantly, it is impossible for anyone to flee its wrath.`, 'Fighting', 'Fairy/Flying/Psychic', 'Primeape', 56);

const primeape = new Pokemon('primeape', `img/primeape.jpg`, `When Primeape becomes furious, its blood circulation is boosted. In turn, its muscles are made even stronger. However, it also becomes much less intelligent at the same time.`, 'Fighting', 'Fairy/Flying/Psychic', false, 57);

const growlithe = new Pokemon(`tom's growlithe`, `img/growlithe.jpg`, `Growlithe has a superb sense of smell. Once it smells anything, this Pokémon won't forget the scent, no matter what. It uses its advanced olfactory sense to determine the emotions of other living things.`, 'Fire', 'Ground/Rock/Water', 'Arcanine', 58);

const arcanine = new Pokemon(`arcanine`, `img/arcanine.jpg`, `Arcanine is known for its high speed. It is said to be capable of running over 6,200 miles in a single day and night. The fire that blazes wildly within this Pokémon's body is its source of power. Legend has it, the best Arcanine is trained by legendary Pokemon trainer, Tom.`, 'Fire', 'Ground/Rock/Water', false, 59);

const poliwag = new Pokemon(`poliwag`, `img/poliwag.jpg`, `Poliwag has a very thin skin. It is possible to see the Pokémon's spiral innards right through the skin. Despite its thinness, however, the skin is also very flexible. Even sharp fangs bounce right off it.`, 'Water', 'Grass/Electric', 'Poliwhirl', 60);

const poliwhirl = new Pokemon(`poliwhirl`, `img/poliwhirl.jpg`, `The surface of Poliwhirl's body is always wet and slick with a slimy fluid. Because of this slippery covering, it can easily slip and slide out of the clutches of any enemy in battle.`, 'Water', 'Grass/Electric', 'Poliwrath', 61);

const poliwrath = new Pokemon(`poliwrath`, `img/poliwrath.jpg`, `Poliwrath's highly developed, brawny muscles never grow fatigued, however much it exercises. It is so tirelessly strong, this Pokémon can swim back and forth across the ocean without effort.`, 'Water/Fighting', 'Fairy/Flying/Psychic/Electric/Grass', false, 62);

const abra = new Pokemon(`abra`, `img/abra.jpg`, `Abra sleeps for 18 hours a day. However, it can sense the presence of foes even while it is sleeping. In such a situation, this Pokémon immediately teleports to safety`, 'Psychic', 'Bug/Dark/Ghost', 'Kadabra', 63);

const kadabra = new Pokemon(`kadabra`, `img/kadabra.jpg`, `Kadabra emits a peculiar alpha wave if it develops a headache. Only those people with a particularly strong psyche can hope to become a Trainer of this Pokémon`, 'Psychic', 'Bug/Dark/Ghost', 'Alakazam', 64);

const alakazam = new Pokemon(`alakazam`, `img/alakazam.jpg`, `Alakazam's brain continually grows, making its head far too heavy to support with its neck. This Pokémon holds its head up using its psychokinetic power instead.`, 'Psychic', 'Bug/Dark/Ghost', false, 65);

const machop = new Pokemon(`machop`, `img/machop.jpg`, `Machop's muscles are special—they never get sore no matter how much they are used in exercise. This Pokémon has sufficient power to hurl a hundred adult humans.`, 'Fighting', 'Fairy/Flying/Psychic', 'Machoke', 66);

const machoke = new Pokemon(`machoke`, `img/machoke.jpg`, `Machoke's thoroughly toned muscles possess the hardness of steel. This Pokémon has so much strength, it can easily hold aloft a sumo wrestler on just one finger.`, 'Fighting', 'Fairy/Flying/Psychic', 'Machamp', 67);

const machamp = new Pokemon(`machamp`, `img/machamp.jpg`, `Machamp has the power to hurl anything aside. However, trying to do any work requiring care and dexterity causes its arms to get tangled. This Pokémon tends to leap into action before it thinks.`, 'Fighting', 'Fairy/Flying/Psychic', false, 68);

const bellsprout = new Pokemon(`bellsprout`, `img/bellsprout.jpg`, `Bellsprout's thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, this Pokémon spits a corrosive fluid that melts even iron.`, 'Grass/Poison', 'Fire/Flying/Ice/Psychic', 'Weepinbell', 69);

const weepinbell = new Pokemon(`weepinbell`, `img/weepinbell.jpg`, `Weepinbell has a large hook on its rear end. At night, the Pokémon hooks on to a tree branch and goes to sleep. If it moves around in its sleep, it may wake up to find itself on the ground.`, 'Grass/Poison', 'Fire/Flying/Ice/Psychic', 'Victreebel', 70);

const victreebel = new Pokemon(`victreebel`, `img/victreebel.jpg`, `Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pokémon swallows it whole.`, 'Grass/Poison', 'Fire/Flying/Ice/Psychic', false, 71);

const tentacool = new Pokemon(`tentacool`, `img/tentacool.jpg`, `Tentacool's body is largely composed of water. If it is removed from the sea, it dries up like parchment. If this Pokémon happens to become dehydrated, put it back into the sea.`, 'Water/Poison', 'Ground/Psychic/Electric', 'Tentacruel', 72);

const tentacruel = new Pokemon(`tentacruel`, `img/tentacruel.jpg`, `Tentacruel has large red orbs on its head. The orbs glow before lashing the vicinity with a harsh ultrasonic blast. This Pokémon's outburst creates rough waves around it.`, 'Water/Poison', 'Ground/Psychic/Electric', false, 73);

const geodude = new Pokemon(`geodude`, `img/geodude.jpg`, `The longer a Geodude lives, the more its edges are chipped and worn away, making it more rounded in appearance. However, this Pokémon's heart will remain hard, craggy, and rough always.`, 'Rock/Ground', 'Water/Grass/Ground/Ice/Steel/Fighting', 'Graveler', 74);

const graveler = new Pokemon(`graveler`, `img/graveler.jpg`, `Graveler grows by feeding on rocks. Apparently, it prefers to eat rocks that are covered in moss. This Pokémon eats its way through a ton of rocks on a daily basis.`, 'Rock/Ground', 'Water/Grass/Ground/Ice/Steel/Fighting', 'Golem', 75);

const golem = new Pokemon(`golem`, `img/golem.jpg`, `Golem live up on mountains. If there is a large earthquake, these Pokémon will come rolling down off the mountains en masse to the foothills below.`, 'Rock/Ground', 'Water/Grass/Ground/Ice/Steel/Fighting', false, 76);

const ponyta = new Pokemon(`ponyta`, `img/ponyta.jpg`, `Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent.`, 'Fire', 'Ground/Rock/Water', 'Rapidash', 77);

const rapidash = new Pokemon(`rapidash`, `img/rapidash.jpg`, `Rapidash usually can be seen casually cantering in the fields and plains. However, when this Pokémon turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph.`, 'Fire', 'Ground/Rock/Water', false, 78);

const slowpoke = new Pokemon(`slowpoke`, `img/slowpoke.jpg`, `Slowpoke uses its tail to catch prey by dipping it in water at the side of a river. However, this Pokémon often forgets what it's doing and often spends entire days just loafing at water's edge.`, 'Water/Psychic', 'Ghost/Dark/Electric/Grass/Bug', 'Slowbro', 79);

const slowbro = new Pokemon(`slowbro`, `img/slowbro.jpg`, `Slowbro's tail has a Shellder firmly attached with a bite. As a result, the tail can't be used for fishing anymore. This causes Slowbro to grudgingly swim and catch prey instead.`, 'Water/Psychic', 'Ghost/Dark/Electric/Grass/Bug', false, 80);

const magnemite = new Pokemon(`magnemite`, `img/magnemite.jpg`, `Magnemite attaches itself to power lines to feed on electricity. If your house has a power outage, check your circuit breakers. You may find a large number of this Pokémon clinging to the breaker box.`, 'Electric/Steel', 'Ground/Fire/Fighting', 'Magneton', 81);

const magneton = new Pokemon(`magneton`, `img/magneton.jpg`, `Magneton emits a powerful magnetic force that is fatal to mechanical devices. As a result, large cities sound sirens to warn citizens of large-scale outbreaks of this Pokémon.`, 'Electric/Steel', 'Ground/Fire/Fighting', false, 82);

const farfetchd = new Pokemon(`farfetch'd`, `img/farfetch'd.jpg`, `Farfetch'd is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pokémon has been known to fight with others over stalks.`, 'Normal/Flying', 'Ice/Rock/Electric', false, 83);

const doduo = new Pokemon(`doduo`, `img/doduo.jpg`, `Doduo's two heads never sleep at the same time. Its two heads take turns sleeping, so one head can always keep watch for enemies while the other one sleeps.`, 'Normal/Flying', 'Ice/Rock/Electric', 'Dodrio', 84);

const dodrio = new Pokemon(`dodrio`, `img/doduo.jpg`, `Watch out if Dodrio's three heads are looking in three separate directions. It's a sure sign that it is on its guard. Don't go near this Pokémon if it's being wary—it may decide to peck you.`, 'Normal/Flying', 'Ice/Rock/Electric', false, 85);

const seel = new Pokemon(`seel`, `img/seel.jpg`, `Seel hunts for prey in the frigid sea underneath sheets of ice. When it needs to breathe, it punches a hole through the ice with the sharply protruding section of its head.`, 'Water', 'Grass/Electric', 'Dewgong', 86);

const dewgong = new Pokemon(`dewgong`, `img/dewgong.jpg`, `Seel hunts for prey in the frigid sea underneath sheets of ice. When it needs to breathe, it punches a hole through the ice with the sharply protruding section of its head.`, 'Water/Ice', 'Fighting/Rock/Electric/Grass', false, 87);

const grimer = new Pokemon(`grimer`, `img/grimer.jpg`, `Grimer's sludgy and rubbery body can be forced through any opening, however small it may be. This Pokémon enters sewer pipes to drink filthy wastewater.`, 'Poison', 'Psychic/Ground', 'Muk', 88);

const muk = new Pokemon(`muk`, `img/muk.jpg`, `From Muk's body seeps a foul fluid that gives off a nose-bendingly horrible stench. Just one drop of this Pokémon's body fluid can turn a pool stagnant and rancid.`, 'Poison', 'Psychic/Ground', false, 89);

const shellder = new Pokemon(`shellder`, `img/shellder.jpg`, `At night, this Pokémon uses its broad tongue to burrow a hole in the seafloor sand and then sleep in it. While it is sleeping, Shellder closes its shell, but leaves its tongue hanging out.`, 'Water', 'Grass/Electric', 'Cloyster', 90);

const cloyster = new Pokemon(`cloyster`, `img/cloyster.jpg`, `Cloyster is capable of swimming in the sea. It does so by swallowing water, then jetting it out toward the rear. This Pokémon shoots spikes from its shell using the same system.`, 'Water/Ice', 'Fighting/Rock/Electric/Grass', false, 91);

const gastly = new Pokemon(`gastly`, `img/gastly.jpg`, `Gastly is largely composed of gaseous matter. When exposed to a strong wind, the gaseous body quickly dwindles away. Groups of this Pokémon cluster under the eaves of houses to escape the ravages of wind.`, 'Ghost/Poison', 'Dark/Ground/Ghost/Psychic', 'Haunter', 92);

const haunter = new Pokemon(`haunter`, `img/haunter.jpg`, `Haunter is a dangerous Pokémon. If one beckons you while floating in darkness, you must never approach it. This Pokémon will try to lick you with its tongue and steal your life away.`, 'Ghost/Poison', 'Dark/Ground/Ghost/Psychic', 'Gengar', 93);

const gengar = new Pokemon(`gengar`, `img/gengar.jpg`, `Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a Gengar running past you, pretending to be your shadow.`, 'Ghost/Poison', 'Dark/Ground/Ghost/Psychic', false, 94);

const onix = new Pokemon(`onix`, `img/onix.jpg`, `Onix has a magnet in its brain. It acts as a compass so that this Pokémon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother.`, 'Rock/Ground', 'Water/Grass/Ground/Ice/Steel/Fighting', false, 95);

const drowzee = new Pokemon(`drowzee`, `img/drowzee.jpg`, `If your nose becomes itchy while you are sleeping, it's a sure sign that one of these Pokémon is standing above your pillow and trying to eat your dream through your nostrils.`, 'Psychic', 'Bug/Dark/Ghost', 'Hypno', 96);

const hypno = new Pokemon(`hypno`, `img/hypno.jpg`, `Hypno holds a pendulum in its hand. The arcing movement and glitter of the pendulum lull the foe into a deep state of hypnosis. While this Pokémon searches for prey, it polishes the pendulum.`, 'Psychic', 'Bug/Dark/Ghost', false, 97);

const krabby = new Pokemon(`krabby`, `img/krabby.jpg`, `Krabby live on beaches, burrowed inside holes dug into the sand. On sandy beaches with little in the way of food, these Pokémon can be seen squabbling with each other over territory.`, 'Water', 'Grass/Electric', 'Kingler', 98);

const kingler = new Pokemon(`kingler`, `img/kingler.jpg`, `Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires.`, 'Water', 'Grass/Electric', false, 99);

const voltorb = new Pokemon(`voltorb`, `img/voltorb.jpg`, `Voltorb was first sighted at a company that manufactures Poké Balls. The link between that sighting and the fact that this Pokémon looks very similar to a Poké Ball remains a mystery.`, 'Electric', 'Ground', 'Electrode', 100);

const electrode = new Pokemon(`electrode`, `img/electrode.jpg`, `Electrode eats electricity in the atmosphere. On days when lightning strikes, you can see this Pokémon exploding all over the place from eating too much electricity`, 'Electric', 'Ground', false, 101);

const exeggcute = new Pokemon(`exeggcute`, `img/exeggcute.jpg`, `This Pokémon consists of six eggs that form a closely knit cluster. The six eggs attract each other and spin around. When cracks increasingly appear on the eggs, Exeggcute is close to evolution.`, 'Grass/Psychic', 'Bug/Fire/Ice/Flying/Poison/Dark/Ghost', 'Exeggutor', 102);

const exeggutor = new Pokemon(`exeggutor`, `img/exeggutor.jpg`, `Exeggutor originally came from the tropics. Its heads steadily grow larger from exposure to strong sunlight. It is said that when the heads fall off, they group together to form Exeggcute.`, 'Grass/Psychic', 'Bug/Fire/Ice/Flying/Poison/Dark/Ghost', false, 103);

const cubone = new Pokemon(`cubone`, `img/cubone.jpg`, `Cubone pines for the mother it will never see again. Seeing a likeness of its mother in the full moon, it cries. The stains on the skull the Pokémon wears are made by the tears it sheds.`, 'Ground', 'Grass/Ice/Water', 'Marowak', 104);

const marowak = new Pokemon(`marowak`, `img/marowak.jpg`, `Marowak is the evolved form of a Cubone that has overcome its sadness at the loss of its mother and grown tough. This Pokémon's tempered and hardened spirit is not easily broken.`, 'Ground', 'Grass/Ice/Water', false, 105);

const hitmonlee = new Pokemon(`hitmonlee`, `img/hitmonlee.jpg`, `Hitmonlee's legs freely contract and stretch. Using these springlike legs, it bowls over foes with devastating kicks. After battle, it rubs down its legs and loosens the muscles to overcome fatigue.`, 'Fighting', 'Fairy/Flying/Psychic', false, 106);

const hitmonchan = new Pokemon(`hitmonchan`, `img/hitmonchan.jpg`, `Hitmonchan is said to possess the spirit of a boxer who had been working toward a world championship. This Pokémon has an indomitable spirit and will never give up in the face of adversity.`, 'Fighting', 'Fairy/Flying/Psychic', false, 107);

const lickitung = new Pokemon(`lickitung`, `img/lickitung.jpg`, `Whenever Lickitung comes across something new, it will unfailingly give it a lick. It does so because it memorizes things by texture and by taste. It is somewhat put off by sour things.`, 'Normal', 'Fighting', false, 108);

const koffing = new Pokemon(`koffing`, `img/koffing.jpg`, `If Koffing becomes agitated, it raises the toxicity of its internal gases and jets them out from all over its body. This Pokémon may also overinflate its round body, then explode.`, 'Poison', 'Psychic/Ground', 'Weezing', 109);

const weezing = new Pokemon(`weezing`, `img/weezing.jpg`, `Weezing loves the gases given off by rotted kitchen garbage. This Pokémon will find a dirty, unkempt house and make it its home. At night, when the people in the house are asleep, it will go through the trash.`, 'Poison', 'Psychic/Ground', false, 110);

const rhyhorn = new Pokemon(`rhyhorn`, `img/rhyhorn.jpg`, `Rhyhorn runs in a straight line, smashing everything in its path. It is not bothered even if it rushes headlong into a block of steel. This Pokémon may feel some pain from the collision the next day, however.`, 'Ground/Rock', 'Water/Grass/Ground/Ice/Steel/Fighting', 'Rhydon', 111);

const rhydon = new Pokemon(`rhydon`, `img/rhydon.jpg`, `Rhydon's horn can crush even uncut diamonds. One sweeping blow of its tail can topple a building. This Pokémon's hide is extremely tough. Even direct cannon hits don't leave a scratch.`, 'Ground/Rock', 'Water/Grass/Ground/Ice/Steel/Fighting', false, 112);

const chansey = new Pokemon(`chansey`, `img/chansey.jpg`, `Chansey lays nutritionally excellent eggs on an everyday basis. The eggs are so delicious, they are easily and eagerly devoured by even those people who have lost their appetite.`, 'Normal', 'Fighting', false, 113);

const tangela = new Pokemon(`tangela`, `img/tangela.jpg`, `Tangela's vines snap off easily if they are grabbed. This happens without pain, allowing it to make a quick getaway. The lost vines are replaced by newly grown vines the very next day.`, 'Grass', 'Fire/Flying/Poison/Bug/Ice', false, 114);

const kangaskhan = new Pokemon(`kangaskhan`, `img/kangaskhan.jpg`, `If you come across a young Kangaskhan playing by itself, you must never disturb it or attempt to catch it. The baby Pokémon's parent is sure to be in the area, and it will become violently enraged at you.`, 'Normal', 'Fighting', false, 115);

const horsea = new Pokemon(`horsea`, `img/horsea.jpg`, `Horsea eats small insects and moss off of rocks. If the ocean current turns fast, this Pokémon anchors itself by wrapping its tail around rocks or coral to prevent being washed away.`, 'Water', 'Grass/Electric', 'Seadra', 116);

const seadra = new Pokemon(`seadra`, `img/seadra.jpg`, `Seadra sleeps after wriggling itself between the branches of coral. Those trying to harvest coral are occasionally stung by this Pokémon's poison barbs if they fail to notice it.`, 'Water', 'Grass/Electric', false, 117);

const goldeen = new Pokemon(`goldeen`, `img/goldeen.jpg`, `Goldeen is a very beautiful Pokémon with fins that billow elegantly in water. However, don't let your guard down around this Pokémon—it could ram you powerfully with its horn.`, 'Water', 'Grass/Electric', 'Seaking', 118);

const seaking = new Pokemon(`seaking`, `img/seaking.jpg`, `In the autumn, Seaking males can be seen performing courtship dances in riverbeds to woo females. During this season, this Pokémon's body coloration is at its most beautiful.`, 'Water', 'Grass/Electric', false, 119);

const staryu = new Pokemon(`staryu`, `img/staryu.jpg`, `Staryu's center section has an organ called the core that shines bright red. If you go to a beach toward the end of summer, the glowing cores of these Pokémon look like the stars in the sky.`, 'Water', 'Grass/Electric', 'Starmie', 120);

const starmie = new Pokemon(`starmie`, `img/starmie.jpg`, `Starmie's center section—the core—glows brightly in seven colors. Because of its luminous nature, this Pokémon has been given the nickname “the gem of the sea.”`, 'Water/Psychic', 'Ghost/Dark/Electric/Grass/Bug', false, 121);

const mrMime = new Pokemon(`mr. mime`, `img/mr-mime.jpg`, `Mr. Mime is a master of pantomime. Its gestures and motions convince watchers that something unseeable actually exists. Once the watchers are convinced, the unseeable thing exists as if it were real.`, 'Psychic/Fairy', 'Poison/Ghost/Steel', false, 122);

const scyther = new Pokemon(`scyther`, `img/scyther.jpg`, `Scyther is blindingly fast. Its blazing speed enhances the effectiveness of the twin scythes on its forearms. This Pokémon's scythes are so effective, they can slice through thick logs in one wicked stroke.`, 'Bug/Flying', 'Rock/Fire/Flying/Ice/Electric', false, 123);

const jynx = new Pokemon(`jynx`, `img/jynx.jpg`, `Jynx walks rhythmically, swaying and shaking its hips as if it were dancing. Its motions are so bouncingly alluring, people seeing it are compelled to shake their hips without giving any thought to what they are doing.`, 'Ice/Psychic', 'Fire/Dark/Rock/Bug/Ghost/Steel', false, 124);

const electabuzz = new Pokemon(`electabuzz`, `img/electabuzz.jpg`, `When a storm arrives, gangs of this Pokémon compete with each other to scale heights that are likely to be stricken by lightning bolts. Some towns use Electabuzz in place of lightning rods.`, 'Electric', 'Ground', false, 125);

const magmar = new Pokemon(`magmar`, `img/magmar.jpg`, `In battle, Magmar blows out intensely hot flames from all over its body to intimidate its opponent. This Pokémon's fiery bursts create heat waves that ignite grass and trees in its surroundings.`, 'Fire', 'Ground/Rock/Water', false, 126);

const pinsir = new Pokemon(`pinsir`, `img/pinsir.jpg`, `Pinsir is astoundingly strong. It can grip a foe weighing twice its weight in its horns and easily lift it. This Pokémon's movements turn sluggish in cold places.`, 'Bug', 'Fire/Flying/Rock', false, 127);

const tauros = new Pokemon(`tauros`, `img/tauros.jpg`, `This Pokémon is not satisfied unless it is rampaging at all times. If there is no opponent for Tauros to battle, it will charge at thick trees and knock them down to calm itself.`, 'Normal', 'Fighting', false, 128);

const magikarp = new Pokemon(`magikarp`, `img/magikarp.jpg`, `Magikarp is a pathetic excuse for a Pokémon that is only capable of flopping and splashing. This behavior prompted scientists to undertake research into it.`, 'Water', 'Grass/Electric', 'Gyarados', 129);

const gyarados = new Pokemon(`gyarados`, `img/gyarados.jpg`, `When Magikarp evolves into Gyarados, its brain cells undergo a structural transformation. It is said that this transformation is to blame for this Pokémon's wildly violent nature.`, 'Water/Flying', 'Electric/Rock', false, 130);

const lapras = new Pokemon(`lapras`, `img/lapras.jpg`, `People have driven Lapras almost to the point of extinction. In the evenings, this Pokémon is said to sing plaintively as it seeks what few others of its kind still remain.`, 'Water/Ice', 'Fighting/Rock/Electric/Grass', false, 131);

const ditto = new Pokemon(`ditto`, `img/ditto.jpg`, `Ditto rearranges its cell structure to transform itself into other shapes. However, if it tries to transform itself into something by relying on its memory, this Pokémon manages to get details wrong.`, 'Normal', 'Fighting', false, 132);

const eevee = new Pokemon(`eevee`, `img/eevee.jpg`, `Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pokémon to evolve.`, 'Normal', 'Fighting', 'Vaporeon/Jolteon/Flareon', 133);

const vaporeon = new Pokemon(`vaporeon`, `img/vaporeon.jpg`, `Vaporeon underwent a spontaneous mutation and grew fins and gills that allow it to live underwater. This Pokémon has the ability to freely control water.`, 'Water', 'Grass/Electric', false, 134);

const jolteon = new Pokemon(`jolteon`, `img/jolteon.jpg`, `Jolteon's cells generate a low level of electricity. This power is amplified by the static electricity of its fur, enabling the Pokémon to drop thunderbolts. The bristling fur is made of electrically charged needles.`, 'Electric', 'Ground', false, 135);

const flareon = new Pokemon(`flareon`, `img/flareon.jpg`, `Flareon's fluffy fur has a functional purpose—it releases heat into the air so that its body does not get excessively hot. This Pokémon's body temperature can rise to a maximum of 1,650 degrees Fahrenheit.`, 'Fire', 'Ground/Rock/Water', false, 136);

const porygon = new Pokemon(`porygon`, `img/porygon.jpg`, `Porygon is capable of reverting itself entirely back to program data and entering cyberspace. This Pokémon is copy protected so it cannot be duplicated by copying.`, 'Normal', 'Fighting', false, 137);

const omanyte = new Pokemon(`omanyte`, `img/omanyte.jpg`, `Omanyte is one of the ancient and long-since-extinct Pokémon that have been regenerated from fossils by people. If attacked by an enemy, it withdraws itself inside its hard shell.`, 'Rock/Water', 'Grass/Ground/Fighting/Electric', 'Omastar', 138);

const omastar = new Pokemon(`omastar`, `img/omastar.jpg`, `Omastar uses its tentacles to capture its prey. It is believed to have become extinct because its shell grew too large and heavy, causing its movements to become too slow and ponderous.`, 'Rock/Water', 'Grass/Ground/Fighting/Electric', false, 139);

const kabuto = new Pokemon(`kabuto`, `img/kabuto.jpg`, `Kabuto is a Pokémon that has been regenerated from a fossil. However, in extremely rare cases, living examples have been discovered. The Pokémon has not changed at all for 300 million years.`, 'Rock/Water', 'Grass/Ground/Fighting/Electric', 'Kabutops', 140);

const kabutops = new Pokemon(`kabutops`, `img/kabuto.jpg`, `Kabutops swam underwater to hunt for its prey in ancient times. The Pokémon was apparently evolving from being a water dweller to living on land as evident from the beginnings of change in its gills and legs.`, 'Rock/Water', 'Grass/Ground/Fighting/Electric', false, 141);

const aerodactly = new Pokemon(`aerodactly`, `img/aerodactly.jpg`, `Aerodactyl is a Pokémon from the age of dinosaurs. It was regenerated from genetic material extracted from amber. It is imagined to have been the king of the skies in ancient times.`, 'Rock/Flying', 'Ice/Rock/Steel/Water/Electric', false, 142);

const snorlax = new Pokemon(`snorlax`, `img/snorlax.jpg`, `Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pokémon that there are children who use its expansive belly as a place to play.`, 'Normal', 'Fighting', false, 143);

const articuno = new Pokemon(`articuno`, `img/articuno.jpg`, `Articuno is a Legendary Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.`, 'Ice/Flying', 'Rock/Fire/Electric/Steel', false, 144);

const zapdos = new Pokemon(`zapdos`, `img/zapdos.jpg`, `Zapdos is a Legendary Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts.`, 'Electric/Flying', 'Ice/Rock', false, 145);

const moltres = new Pokemon(`moltres`, `img/moltres.jpg`, `Moltres is a Legendary Pokémon that has the ability to control fire. If this Pokémon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself.`, 'Fire/Flying', 'Rock/Electric/Water', false, 146);

const dratini = new Pokemon(`dratini`, `img/dratini.jpg`, `Dratini continually molts and sloughs off its old skin. It does so because the life energy within its body steadily builds to reach uncontrollable levels.`, 'Dragon', 'Fairy/Dragon/Ice', 'Dragonair', 147);

const dragonair = new Pokemon(`dragonair`, `img/dragonair.jpg`, `Dragonair stores an enormous amount of energy inside its body. It is said to alter weather conditions in its vicinity by discharging energy from the crystals on its neck and tail.`, 'Dragon', 'Fairy/Dragon/Ice', 'Dragonite', 148);

const dragonite = new Pokemon(`dragonite`, `img/dragonite.jpg`, `Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land.`, 'Dragon/Flying', 'Ice/Fairy/Dragon/Rock', false, 149);

const mewtwo = new Pokemon(`mewtwo`, `img/mewtwo.jpg`, `Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon's body, they failed to endow Mewtwo with a compassionate heart.`, 'Psychic', 'Bug/Dark/Ghost', false, 150);

const mew = new Pokemon(`mew`, `img/mew.jpg`, `Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.`, 'Psychic', 'Bug/Dark/Ghost', false, 151);

const pokemon = [bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard, squirtle, wartortle, blastoise, caterpie, metapod, butterfree, weedle, kakuna, beedrill, pidgey, pidgeotto, pidgeot, rattata, raticate, spearow, fearow, ekans, arbok, pikachu, raichu, sandshrew, sandslash, nidoranF, nidorina, nidoqueen, nidoranM, nidorino, nidoking, clefairy, clefable, vulpix, ninetales, jigglypuff, wigglytuff, zubat, golbat, oddish, gloom, vileplume, paras, parasect, venonat, venomoth, diglett, dugtrio, meowth, persian, psyduck, golduck, mankey, primeape, growlithe, arcanine, poliwag, poliwhirl, poliwrath, abra, kadabra, alakazam, machop, machoke, machamp, bellsprout, weepinbell, victreebel, tentacool, tentacruel, geodude, graveler, golem, ponyta, rapidash, slowpoke, slowbro, magnemite, magneton, farfetchd, doduo, dodrio, seel, dewgong, grimer, muk, shellder, cloyster, gastly, haunter, gengar, onix, drowzee, hypno, krabby, kingler, voltorb, electrode, exeggcute, exeggutor, cubone, marowak, hitmonlee, hitmonchan, lickitung, koffing, weezing, rhyhorn, rhydon, chansey, tangela, kangaskhan, horsea, seadra, goldeen, seaking, staryu, starmie, mrMime, scyther, jynx, electabuzz, magmar, pinsir, tauros, magikarp, gyarados, lapras, ditto, eevee, vaporeon, jolteon, flareon, porygon, omanyte, omastar, kabuto, kabutops, aerodactly, snorlax, articuno, zapdos, moltres, dratini, dragonair, dragonite, mewtwo, mew];

pokeSearch();

function pokeSearch() {
    let input = document.querySelector('input');
    let searchBtn = document.querySelector('.submit');
    const pokemonSection = document.querySelector('.pokemon-selection');

    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let search = input.value.toLowerCase();
        let searchResults = 0;
        input.classList.remove('error');

        //Checks for search results, resets if result is shown
        if(pokemonSection.innerHTML !== '') {
            searchReset()
        } 

        //uses search to look through Pokemon array
        if(search === ''){
            input.classList.add('error');
            searchResults = false;
        } else if (search === 'nidoran'){
            console.log('nidoran');
            searchResults++
        } else if (search === 'growlithe'){
            pokemonFound(growlithe);
            searchResults++
        } else {
            for(let i = 0; i < pokemon.length; i++){
                if(pokemon[i].name === search){
                    pokemonFound(pokemon[i]);
                    searchResults++
                }
            }
        }

        //If search results come up empty, run no pokemon found
        if(searchResults === 0){
            pokemonNotFound()
        }

        //Reset search
        input.value = '';

    })


};

//Create pokemon card
function pokemonFound(pokemon) {
    const pokemonSection = document.querySelector('.pokemon-selection')

    const newPokemon = document.createElement('div');
    newPokemon.classList.add('pokemon');
    pokemonSection.appendChild(newPokemon);

    const pokemonImg = document.createElement('img');
    pokemonImg.src = pokemon.picture;
    pokemonImg.alt = pokemon.name;
    newPokemon.appendChild(pokemonImg);

    const pokemonName = document.createElement('h2');
    pokemonName.textContent = pokemon.name;
    pokemonName.style.textTransform = 'capitalize';
    newPokemon.appendChild(pokemonName);

    const pokemonInformation = document.createElement('div');
    pokemonInformation.classList.add('pokemon-information');
    pokemonSection.appendChild(pokemonInformation);

    const pokemonDescription = document.createElement('p');
    pokemonDescription.textContent = pokemon.description;
    pokemonInformation.appendChild(pokemonDescription);

    const pokemonType = document.createElement('p');
    pokemonType.textContent = `Type: ${pokemon.type}`;
    pokemonInformation.appendChild(pokemonType);

    const pokemonWeakness = document.createElement('p');
    pokemonWeakness.textContent = `Weakness: ${pokemon.weakness}`;
    pokemonInformation.appendChild(pokemonWeakness);

    if(pokemon.evolvesInto) {
        const pokemonEvolution = document.createElement('p');
        pokemonEvolution.textContent = `Evolution: ${pokemon.evolvesInto}`;
        pokemonInformation.appendChild(pokemonEvolution);
    }

    const pokemonNumber = document.createElement('p');
    pokemonNumber.textContent = `${pokemon.number}/151`;
    pokemonNumber.classList.add('number');
    pokemonInformation.appendChild(pokemonNumber);
}

//When no results are found
function pokemonNotFound() {

    const surprisedPikachu = {
        name: 'Surprised Pikachu',
        picture: `/img/surprised-pikachu.png`,
    }

    const pokemonSection = document.querySelector('.pokemon-selection')

    const newPokemon = document.createElement('div');
    newPokemon.classList.add('pokemon');
    pokemonSection.appendChild(newPokemon);

    const pokemonImg = document.createElement('img');
    pokemonImg.src = surprisedPikachu.picture;
    pokemonImg.alt = 'Surprised Pikachu';
    newPokemon.appendChild(pokemonImg);

    const pokemonName = document.createElement('h2');
    pokemonName.textContent = 'Pokemon not found!';
    newPokemon.appendChild(pokemonName);

    const pokemonInformation = document.createElement('div');
    pokemonInformation.classList.add('pokemon-information');
    pokemonSection.appendChild(pokemonInformation);

    const pokemonDescription = document.createElement('p');
    pokemonDescription.textContent = `Please check your spelling or try another search`;
    pokemonDescription.style.textAlign = 'center';
    pokemonInformation.appendChild(pokemonDescription);
}



//Reset Search Results
function searchReset() {
    const pokemonSection = document.querySelector('.pokemon-selection');

    const pokemon = document.querySelector('.pokemon');

    const pokemonInformation = document.querySelector('.pokemon-information');

    pokemonSection.removeChild(pokemon);
    pokemonSection.removeChild(pokemonInformation);
}
