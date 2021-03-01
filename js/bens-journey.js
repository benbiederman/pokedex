class Pokemon {
    constructor(name, picture, element, caught, number) {
        this.name = name;
        this.picture = picture;
        this.element = element;
        this.caught = caught;
        this.number = number;
    }
}

const bulbasaur = new Pokemon('bulbasaur', `img/bulbasaur.jpg`, 'Grass', true, 01);

const ivysaur = new Pokemon('ivysaur', `img/ivysaur.jpg`, 'Grass', true, 02);

const venusaur = new Pokemon('venusaur', `img/venusaur.jpg`, 'Grass', false, 03);

const charmander = new Pokemon('charmander', `img/charmander.jpg`, 'Fire', true, 04);

const charmeleon = new Pokemon('charmeleon', `img/charmeleon.jpg`, 'Fire', true, 05);

const charizard = new Pokemon('charizard', `img/charizard.jpg`, 'Fire', false, 06);

const squirtle = new Pokemon('squirtle', `img/squirtle.jpg`, 'Water', true, 07);

const wartortle = new Pokemon('wartortle', `img/wartortle.jpg`, 'Water', true, 08);

const blastoise = new Pokemon('blastoise', `img/blastoise.jpg`, 'Water',  false, 09);

const caterpie = new Pokemon('caterpie', `img/caterpie.jpg`, 'Grass', false, 10);

const metapod = new Pokemon('metapod', `img/metapod.jpg`, 'Grass', false, 11);

const butterfree = new Pokemon('butterfree', `img/butterfree.jpg`,'Grass', false, 12);

const weedle = new Pokemon('weedle', `img/weedle.jpg`, 'Grass', false, 13);

const kakuna = new Pokemon('kakuna', `img/kakuna.jpg`, 'Grass', false, 14);

const beedrill = new Pokemon('beedrill', `img/beedrill.jpg`, `Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.`, 'Grass', 'Fire/Flying/Rock/Psychic', false, 'Normal', false, 15);

const pidgey = new Pokemon('pidgey', `img/pidgey.jpg`, `Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.`, 'Normal', 'Ice/Rock/Electric', 'pidgeotto', 'Normal', 18, 16);

const pidgeotto = new Pokemon('pidgeotto', `img/pidgeotto.jpg`, `Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.`, 'Normal', 'Ice/Rock/Electric', 'pidgeot', 'Normal', 36, 17);

const pidgeot = new Pokemon('pidgeot', `img/pidgeot.jpg`, `This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.`, 'Normal', 'Ice/Rock/Electric', false, 'Normal', false, 18);

const rattata = new Pokemon('rattata', `img/rattata.jpg`, `Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.`, 'Normal', 'Fighting', 'raticate', 'Normal', 20, 19);

const raticate = new Pokemon('raticate', `img/raticate.jpg`, `Raticate's sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.`, 'Normal', 'Fighting', false, 'Normal', false, 20);

const spearow = new Pokemon('spearow', `img/spearow.jpg`, `Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.`, 'Normal', 'Ice/Rock/Electric', 'fearow', 'Normal', 20, 21);

const fearow = new Pokemon('fearow', `img/fearow.jpg`, `Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey.`, 'Normal', 'Ice/Rock/Electric', false, 'Normal', false, 22);

const ekans = new Pokemon('ekans', `img/ekans.jpg`, `Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.`, 'Grass', 'Psychic/Ground', 'arbok', 'Normal', 22, 23);

const arbok = new Pokemon('arbok', `img/arbok.jpg`, `This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crushing embrace is impossible.`, 'Grass', 'Psychic/Ground', false, 'Normal', false, 24);

const pikachu = new Pokemon('pikachu', `img/pikachu.jpg`, `Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.`, 'Electric', 'Ground', 'raichu', 'Thunder Stone', false, 25);

const raichu = new Pokemon('raichu', `img/raichu.jpg`, `If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.`, 'Electric', 'Ground', false, 'Thunder Stone', false, 26);

const sandshrew = new Pokemon('sandshrew', `img/sandshrew.jpg`, `Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies.`, 'Ground', 'Grass/Ice/Water', 'sandslash', 'Normal', 22, 27);

const sandslash = new Pokemon('sandslash', `img/sandslash.jpg` , `Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones.`, 'Ground', 'Grass/Ice/Water', false, 'Normal', false, 28);

const nidoranF = new Pokemon('nidoran ♀', `img/nidoran-f.jpg`, `Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.`, 'Grass', 'Psychic/Ground', 'nidorina', 'Normal', 16, 29);

const nidorina = new Pokemon('nidorina', `img/nidorina.jpg`, `When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.`, 'Grass', 'Psychic/Ground', 'nidoqueen', 'Moon Stone', false, 30);

const nidoqueen = new Pokemon('nidoqueen', `img/nidoqueen.jpg`, `Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.`, 'Grass', 'Water/Ground/Ice/Psychic', false, 'Moon Stone', false, 31);

const nidoranM = new Pokemon('nidoran ♂', `img/nidoran-m.jpg`, `Nidoran♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon's notice.`, 'Grass', 'Psychic/Ground', 'nidorino', 'Normal', 16, 32);

const nidorino = new Pokemon('nidorino', `img/nidorino.jpg`, `Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.`, 'Grass', 'Psychic/Ground', 'nidoking', 'Moon Stone', false, 33);

const nidoking = new Pokemon('nidoking', `img/nidoking.jpg`, `Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.`, 'Grass', 'Water/Ground/Ice/Psychic', false, 'Moon Stone', false, 34);

const clefairy = new Pokemon('clefairy', `img/clefairy.jpg`, `On every night of a full moon, groups of this Pokémon come out to play. When dawn arrives, the tired Clefairy return to their quiet mountain retreats and go to sleep nestled up against each other.`, 'Normal', 'Steel/Poison', 'clefable', 'Moon Stone', false,  35);

const clefable = new Pokemon('clefable', `img/clefable.jpg`, `Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights.`, 'Normal', 'Steel, Poison', false, 'Moon Stone', false, 36);

const vulpix = new Pokemon('vulpix', `img/vulpix.jpg`, `At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its Trainer. The six tails become magnificently curled.`, 'Fire', 'Ground/Rock/Water', 'ninetales', 'Fire Stone', false, 37);

const ninetales = new Pokemon('ninetales', `img/ninetales.jpg`, `Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for a thousand years.`, 'Fire', 'Ground/Rock/Water', false, 'Fire Stone', false, 38);

const jigglypuff = new Pokemon('jigglypuff', `img/jigglypuff.jpg`, `Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.`, 'Normal', 'Steel/Poison', 'wigglytuff', 'Moon Stone', false, 39);

const wigglytuff = new Pokemon('wigglytuff', `img/wigglytuff.jpg`, `Wigglytuff has large, saucerlike eyes. The surfaces of its eyes are always covered with a thin layer of tears. If any dust gets in this Pokémon's eyes, it is quickly washed away.`, 'Normal', 'Steel/Poison', false, 'Moon Stone', false, 40);

const zubat = new Pokemon('zubat', `img/zubat.jpg`, `Zubat remains quietly unmoving in a dark spot during the bright daylight hours. It does so because prolonged exposure to the sun causes its body to become slightly burned.`, 'Grass', 'Ice/Rock/Psychic/Electric', 'golbat', 'Normal', 22, 41);

const golbat = new Pokemon('golbat', `img/golbat.jpg`, `Golbat loves to drink the blood of living things. It is particularly active in the pitch black of night. This Pokémon flits around in the night skies, seeking fresh blood.`, 'Grass', 'Ice/Rock/Psychic/Electric', false, 'Normal', false, 42);

const oddish = new Pokemon('oddish', `img/oddish.jpg`, `During the daytime, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become.`, 'Grass', 'Fire/Flying/Ice/Psychic', 'gloom', 'Normal', 21, 43);

const gloom = new Pokemon('gloom', `img/gloom.jpg`, `Gloom releases a foul fragrance from the pistil of its flower. When faced with danger, the stench worsens. If this Pokémon is feeling calm and secure, it does not release its usual stinky aroma.`, 'Grass', 'Fire/Flying/Ice/Psychic', 'vileplume', 'Leaf Stone', false, 44);

const vileplume = new Pokemon('vileplume', `img/vileplume.jpg`, `Vileplume's toxic pollen triggers atrocious allergy attacks. That's why it is advisable never to approach any attractive flowers in a jungle, however pretty they may be.`, 'Grass', 'Fire/Flying/Ice/Psychic', false, 'Leaf Stone', false, 45);

const paras = new Pokemon('paras', `img/paras.jpg`, `Paras has parasitic mushrooms growing on its back called tochukaso. They grow large by drawing nutrients from this Bug Pokémon host. They are highly valued as a medicine for extending life.`, 'Grass', 'Fire/Flying/Poison/Rock/Bug/Ice', 'parasect', 'Normal', 24, 46);

const parasect = new Pokemon('parasect', `img/parasect.jpg`, `Parasect is known to infest large trees en masse and drain nutrients from the lower trunk and roots. When an infested tree dies, they move onto another tree all at once.`, 'Grass', 'Fire/Flying/Poison/Rock/Bug/Ice', false, 'Normal', false, 47);

const venonat = new Pokemon('venonat', `img/venonat.jpg`, `Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey.`, 'Grass', 'Fire/Flying/Rock/Psychic', 'venomoth', 'Normal', 31, 48);

const venomoth = new Pokemon('venomoth', `img/venomoth.jpg`, `Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness.`, 'Grass', 'Fire/Flying/Rock/Psychic', false, 'Normal', false, 49);

const diglett = new Pokemon('diglett', `img/diglett.jpg`, `Diglett are raised in most farms. The reason is simple—wherever this Pokémon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables.`, 'Ground', 'Grass/Ice/Water', 'dugtrio', 'Normal', 26, 50);

const dugtrio = new Pokemon('dugtrio', `img/dugtrio.jpg`, `Dugtrio are actually triplets that emerged from one body. As a result, each triplet thinks exactly like the other two triplets. They work cooperatively to burrow endlessly.`, 'Ground', 'Grass/Ice/Water', false, 'Normal', false, 51);

const meowth = new Pokemon('meowth', `img/meowth.jpg`, `Meowth withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this Pokémon loves shiny coins that glitter with light.`, 'Normal', 'Fighting', 'persian', 'Normal', 28, 52);

const persian = new Pokemon('persian', `img/persian.jpg`, `Persian has six bold whiskers that give it a look of toughness. The whiskers sense air movements to determine what is in the Pokémon's surrounding vicinity. It becomes docile if grabbed by the whiskers.`, 'Normal', 'Fighting', false, 'Normal', false, 53);

const psyduck = new Pokemon('psyduck', `img/psyduck.jpg`, `Psyduck uses a mysterious power. When it does so, this Pokémon generates brain waves that are supposedly only seen in sleepers. This discovery spurred controversy among scholars.`, 'Water', 'Grass/Electric', 'golduck', 'Normal', 33, 54);

const golduck = new Pokemon('golduck', `img/golduck.jpg`, `The webbed flippers on its forelegs and hind legs and the streamlined body of Golduck give it frightening speed. This Pokémon is definitely much faster than even the most athletic swimmer.`, 'Water', 'Grass/Electric', false, 'Normal', false, 55);

const mankey = new Pokemon('mankey', `img/mankey.jpg`, `When Mankey starts shaking and its nasal breathing turns rough, it's a sure sign that it is becoming angry. However, because it goes into a towering rage almost instantly, it is impossible for anyone to flee its wrath.`, 'Ground', 'Fairy/Flying/Psychic', 'primeape', 'Normal', 28, 56);

const primeape = new Pokemon('primeape', `img/primeape.jpg`, `When Primeape becomes furious, its blood circulation is boosted. In turn, its muscles are made even stronger. However, it also becomes much less intelligent at the same time.`, 'Ground', 'Fairy/Flying/Psychic', false, 'Normal', false, 57);

const growlithe = new Pokemon(`tom's growlithe`, `img/growlithe.jpg`, `Growlithe has a superb sense of smell. Once it smells anything, this Pokémon won't forget the scent, no matter what. It uses its advanced olfactory sense to determine the emotions of other living things.`, 'Fire', 'Ground/Rock/Water', 'arcanine', 'Fire Stone', false, 58);

const arcanine = new Pokemon(`arcanine`, `img/arcanine.jpg`, `Arcanine is known for its high speed. It is said to be capable of running over 6,200 miles in a single day and night. The fire that blazes wildly within this Pokémon's body is its source of power. Legend has it, the best Arcanine is trained by legendary Pokemon trainer, Tom.`, 'Fire', 'Ground/Rock/Water', false, 'Fire Stone', false, 59);

const poliwag = new Pokemon(`poliwag`, `img/poliwag.jpg`, `Poliwag has a very thin skin. It is possible to see the Pokémon's spiral innards right through the skin. Despite its thinness, however, the skin is also very flexible. Even sharp fangs bounce right off it.`, 'Water', 'Grass/Electric', 'poliwhirl', 'Normal', 25, 60);

const poliwhirl = new Pokemon(`poliwhirl`, `img/poliwhirl.jpg`, `The surface of Poliwhirl's body is always wet and slick with a slimy fluid. Because of this slippery covering, it can easily slip and slide out of the clutches of any enemy in battle.`, 'Water', 'Grass/Electric', 'poliwrath', 'Water Stone', false, 61);

const poliwrath = new Pokemon(`poliwrath`, `img/poliwrath.jpg`, `Poliwrath's highly developed, brawny muscles never grow fatigued, however much it exercises. It is so tirelessly strong, this Pokémon can swim back and forth across the ocean without effort.`, 'Water', 'Fairy/Flying/Psychic/Electric/Grass', false, 'Water Stone', false, 62);

const abra = new Pokemon(`abra`, `img/abra.jpg`, `Abra sleeps for 18 hours a day. However, it can sense the presence of foes even while it is sleeping. In such a situation, this Pokémon immediately teleports to safety`, 'Psychic', 'Bug/Dark/Ghost', 'kadabra', 'Normal', 16, 63);

const kadabra = new Pokemon(`kadabra`, `img/kadabra.jpg`, `Kadabra emits a peculiar alpha wave if it develops a headache. Only those people with a particularly strong psyche can hope to become a Trainer of this Pokémon`, 'Psychic', 'Bug/Dark/Ghost', 'alakazam', 'Trade', false, 64);

const alakazam = new Pokemon(`alakazam`, `img/alakazam.jpg`, `Alakazam's brain continually grows, making its head far too heavy to support with its neck. This Pokémon holds its head up using its psychokinetic power instead.`, 'Psychic', 'Bug/Dark/Ghost', false, 'Trade', false, 65);

const machop = new Pokemon(`machop`, `img/machop.jpg`, `Machop's muscles are special—they never get sore no matter how much they are used in exercise. This Pokémon has sufficient power to hurl a hundred adult humans.`, 'Ground', 'Fairy/Flying/Psychic', 'machoke', 'Normal', 28, 66);

const machoke = new Pokemon(`machoke`, `img/machoke.jpg`, `Machoke's thoroughly toned muscles possess the hardness of steel. This Pokémon has so much strength, it can easily hold aloft a sumo wrestler on just one finger.`, 'Ground', 'Fairy/Flying/Psychic', 'machamp', 'Trade', false, 67);

const machamp = new Pokemon(`machamp`, `img/machamp.jpg`, `Machamp has the power to hurl anything aside. However, trying to do any work requiring care and dexterity causes its arms to get tangled. This Pokémon tends to leap into action before it thinks.`, 'Ground', 'Fairy/Flying/Psychic', false, 'Trade', false, 68);

const bellsprout = new Pokemon(`bellsprout`, `img/bellsprout.jpg`, `Bellsprout's thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, this Pokémon spits a corrosive fluid that melts even iron.`, 'Grass', 'Fire/Flying/Ice/Psychic', 'weepinbell', 'Normal', 21, 69);

const weepinbell = new Pokemon(`weepinbell`, `img/weepinbell.jpg`, `Weepinbell has a large hook on its rear end. At night, the Pokémon hooks on to a tree branch and goes to sleep. If it moves around in its sleep, it may wake up to find itself on the ground.`, 'Grass', 'Fire/Flying/Ice/Psychic', 'victreebel', 'Leaf Stone', false, 70);

const victreebel = new Pokemon(`victreebel`, `img/victreebel.jpg`, `Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pokémon swallows it whole.`, 'Grass', 'Fire/Flying/Ice/Psychic', false, 'Leaf Stone', false, 71);

const tentacool = new Pokemon(`tentacool`, `img/tentacool.jpg`, `Tentacool's body is largely composed of water. If it is removed from the sea, it dries up like parchment. If this Pokémon happens to become dehydrated, put it back into the sea.`, 'Water', 'Ground/Psychic/Electric', 'tentacruel', 'Normal', 30, 72);

const tentacruel = new Pokemon(`tentacruel`, `img/tentacruel.jpg`, `Tentacruel has large red orbs on its head. The orbs glow before lashing the vicinity with a harsh ultrasonic blast. This Pokémon's outburst creates rough waves around it.`, 'Water', 'Ground/Psychic/Electric', false, 'Normal', false, 73);

const geodude = new Pokemon(`geodude`, `img/geodude.jpg`, `The longer a Geodude lives, the more its edges are chipped and worn away, making it more rounded in appearance. However, this Pokémon's heart will remain hard, craggy, and rough always.`, 'Ground', 'Water/Grass/Ground/Ice/Steel/Fighting', 'graveler', 'Normal', 25, 74);

const graveler = new Pokemon(`graveler`, `img/graveler.jpg`, `Graveler grows by feeding on rocks. Apparently, it prefers to eat rocks that are covered in moss. This Pokémon eats its way through a ton of rocks on a daily basis.`, 'Ground', 'Water/Grass/Ground/Ice/Steel/Fighting', 'golem', 'Trade', false, 75);

const golem = new Pokemon(`golem`, `img/golem.jpg`, `Golem live up on mountains. If there is a large earthquake, these Pokémon will come rolling down off the mountains en masse to the foothills below.`, 'Ground', 'Water/Grass/Ground/Ice/Steel/Fighting', false, 'Trade', false, 76);

const ponyta = new Pokemon(`ponyta`, `img/ponyta.jpg`, `Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent.`, 'Fire', 'Ground/Rock/Water', 'rapidash', 'Normal', 40, 77);

const rapidash = new Pokemon(`rapidash`, `img/rapidash.jpg`, `Rapidash usually can be seen casually cantering in the fields and plains. However, when this Pokémon turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph.`, 'Fire', 'Ground/Rock/Water', false, 'Normal', false, 78);

const slowpoke = new Pokemon(`slowpoke`, `img/slowpoke.jpg`, `Slowpoke uses its tail to catch prey by dipping it in water at the side of a river. However, this Pokémon often forgets what it's doing and often spends entire days just loafing at water's edge.`, 'Psychic', 'Ghost/Dark/Electric/Grass/Bug', 'slowbro', 'Normal', 37, 79);

const slowbro = new Pokemon(`slowbro`, `img/slowbro.jpg`, `Slowbro's tail has a Shellder firmly attached with a bite. As a result, the tail can't be used for fishing anymore. This causes Slowbro to grudgingly swim and catch prey instead.`, 'Psychic', 'Ghost/Dark/Electric/Grass/Bug', false, 'Normal', false, 80);

const magnemite = new Pokemon(`magnemite`, `img/magnemite.jpg`, `Magnemite attaches itself to power lines to feed on electricity. If your house has a power outage, check your circuit breakers. You may find a large number of this Pokémon clinging to the breaker box.`, 'Electric', 'Ground/Fire/Fighting', 'magneton', 'Normal', 30, 81);

const magneton = new Pokemon(`magneton`, `img/magneton.jpg`, `Magneton emits a powerful magnetic force that is fatal to mechanical devices. As a result, large cities sound sirens to warn citizens of large-scale outbreaks of this Pokémon.`, 'Electric', 'Ground/Fire/Fighting', false, 'Normal', false, 82);

const farfetchd = new Pokemon(`farfetch'd`, `img/farfetch'd.jpg`, `Farfetch'd is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pokémon has been known to fight with others over stalks.`, 'Normal', 'Ice/Rock/Electric', false, false, false, 83);

const doduo = new Pokemon(`doduo`, `img/doduo.jpg`, `Doduo's two heads never sleep at the same time. Its two heads take turns sleeping, so one head can always keep watch for enemies while the other one sleeps.`, 'Normal', 'Ice/Rock/Electric', 'dodrio', 'Normal', 31, 84);

const dodrio = new Pokemon(`dodrio`, `img/doduo.jpg`, `Watch out if Dodrio's three heads are looking in three separate directions. It's a sure sign that it is on its guard. Don't go near this Pokémon if it's being wary—it may decide to peck you.`, 'Normal', 'Ice/Rock/Electric', false,'Normal', false, 85);

const seel = new Pokemon(`seel`, `img/seel.jpg`, `Seel hunts for prey in the frigid sea underneath sheets of ice. When it needs to breathe, it punches a hole through the ice with the sharply protruding section of its head.`, 'Water', 'Grass/Electric', 'dewgong', 'Normal', 34, 86);

const dewgong = new Pokemon(`dewgong`, `img/dewgong.jpg`, `Seel hunts for prey in the frigid sea underneath sheets of ice. When it needs to breathe, it punches a hole through the ice with the sharply protruding section of its head.`, 'Water', 'Fighting/Rock/Electric/Grass', false,'Normal', false, 87);

const grimer = new Pokemon(`grimer`, `img/grimer.jpg`, `Grimer's sludgy and rubbery body can be forced through any opening, however small it may be. This Pokémon enters sewer pipes to drink filthy wastewater.`, 'Grass', 'Psychic/Ground', 'muk', 'Normal', 38, 88);

const muk = new Pokemon(`muk`, `img/muk.jpg`, `From Muk's body seeps a foul fluid that gives off a nose-bendingly horrible stench. Just one drop of this Pokémon's body fluid can turn a pool stagnant and rancid.`, 'Grass', 'Psychic/Ground', false,'Normal', false, 89);

const shellder = new Pokemon(`shellder`, `img/shellder.jpg`, `At night, this Pokémon uses its broad tongue to burrow a hole in the seafloor sand and then sleep in it. While it is sleeping, Shellder closes its shell, but leaves its tongue hanging out.`, 'Water', 'Grass/Electric', 'cloyster', 'Water Stone', false, 90);

const cloyster = new Pokemon(`cloyster`, `img/cloyster.jpg`, `Cloyster is capable of swimming in the sea. It does so by swallowing water, then jetting it out toward the rear. This Pokémon shoots spikes from its shell using the same system.`, 'Water/Ice', 'Fighting/Rock/Electric/Grass', false, 'Water Stone', false, 91);

const gastly = new Pokemon(`gastly`, `img/gastly.jpg`, `Gastly is largely composed of gaseous matter. When exposed to a strong wind, the gaseous body quickly dwindles away. Groups of this Pokémon cluster under the eaves of houses to escape the ravages of wind.`, 'Psychic', 'Dark/Ground/Ghost/Psychic', 'haunter', 'Normal', 25, 92);

const haunter = new Pokemon(`haunter`, `img/haunter.jpg`, `Haunter is a dangerous Pokémon. If one beckons you while floating in darkness, you must never approach it. This Pokémon will try to lick you with its tongue and steal your life away.`, 'Psychic', 'Dark/Ground/Ghost/Psychic', 'gengar', 'Trade', false, 93);

const gengar = new Pokemon(`gengar`, `img/gengar.jpg`, `Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a Gengar running past you, pretending to be your shadow.`, 'Psychic', 'Dark/Ground/Ghost/Psychic', false, 'Trade', false, 94);

const onix = new Pokemon(`onix`, `img/onix.jpg`, `Onix has a magnet in its brain. It acts as a compass so that this Pokémon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother.`, 'Ground', 'Water/Grass/Ground/Ice/Steel/Fighting', false, false, false, 95);

const drowzee = new Pokemon(`drowzee`, `img/drowzee.jpg`, `If your nose becomes itchy while you are sleeping, it's a sure sign that one of these Pokémon is standing above your pillow and trying to eat your dream through your nostrils.`, 'Psychic', 'Bug/Dark/Ghost', 'hypno', 'Normal', 26, 96);

const hypno = new Pokemon(`hypno`, `img/hypno.jpg`, `Hypno holds a pendulum in its hand. The arcing movement and glitter of the pendulum lull the foe into a deep state of hypnosis. While this Pokémon searches for prey, it polishes the pendulum.`, 'Psychic', 'Bug/Dark/Ghost', false, 'Normal', false, 97);

const krabby = new Pokemon(`krabby`, `img/krabby.jpg`, `Krabby live on beaches, burrowed inside holes dug into the sand. On sandy beaches with little in the way of food, these Pokémon can be seen squabbling with each other over territory.`, 'Water', 'Grass/Electric', 'kingler', 'Normal', 28, 98);

const kingler = new Pokemon(`kingler`, `img/kingler.jpg`, `Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires.`, 'Water', 'Grass/Electric', false, 'Normal', false, 99);

const voltorb = new Pokemon(`voltorb`, `img/voltorb.jpg`, `Voltorb was first sighted at a company that manufactures Poké Balls. The link between that sighting and the fact that this Pokémon looks very similar to a Poké Ball remains a mystery.`, 'Electric', 'Ground', 'electrode', 'Normal', 30, 100);

const electrode = new Pokemon(`electrode`, `img/electrode.jpg`, `Electrode eats electricity in the atmosphere. On days when lightning strikes, you can see this Pokémon exploding all over the place from eating too much electricity`, 'Electric', 'Ground', false, 'Normal', false, 101);

const exeggcute = new Pokemon(`exeggcute`, `img/exeggcute.jpg`, `This Pokémon consists of six eggs that form a closely knit cluster. The six eggs attract each other and spin around. When cracks increasingly appear on the eggs, Exeggcute is close to evolution.`, 'Grass', 'Bug/Fire/Ice/Flying/Poison/Dark/Ghost', 'exeggutor', 'Leaf Stone', false, 102);

const exeggutor = new Pokemon(`exeggutor`, `img/exeggutor.jpg`, `Exeggutor originally came from the tropics. Its heads steadily grow larger from exposure to strong sunlight. It is said that when the heads fall off, they group together to form Exeggcute.`, 'Grass', 'Bug/Fire/Ice/Flying/Poison/Dark/Ghost', false, 'Leaf Stone', false, 103);

const cubone = new Pokemon(`cubone`, `img/cubone.jpg`, `Cubone pines for the mother it will never see again. Seeing a likeness of its mother in the full moon, it cries. The stains on the skull the Pokémon wears are made by the tears it sheds.`, 'Ground', 'Grass/Ice/Water', 'marowak', 'Normal', 28, 104);

const marowak = new Pokemon(`marowak`, `img/marowak.jpg`, `Marowak is the evolved form of a Cubone that has overcome its sadness at the loss of its mother and grown tough. This Pokémon's tempered and hardened spirit is not easily broken.`, 'Ground', 'Grass/Ice/Water', false, 'Normal', false, 105);

const hitmonlee = new Pokemon(`hitmonlee`, `img/hitmonlee.jpg`, `Hitmonlee's legs freely contract and stretch. Using these springlike legs, it bowls over foes with devastating kicks. After battle, it rubs down its legs and loosens the muscles to overcome fatigue.`, 'Ground', 'Fairy/Flying/Psychic', false, false, false, 106);

const hitmonchan = new Pokemon(`hitmonchan`, `img/hitmonchan.jpg`, `Hitmonchan is said to possess the spirit of a boxer who had been working toward a world championship. This Pokémon has an indomitable spirit and will never give up in the face of adversity.`, 'Ground', 'Fairy/Flying/Psychic', false, false, false, 107);

const lickitung = new Pokemon(`lickitung`, `img/lickitung.jpg`, `Whenever Lickitung comes across something new, it will unfailingly give it a lick. It does so because it memorizes things by texture and by taste. It is somewhat put off by sour things.`, 'Normal', 'Fighting', false, false, false, 108);

const koffing = new Pokemon(`koffing`, `img/koffing.jpg`, `If Koffing becomes agitated, it raises the toxicity of its internal gases and jets them out from all over its body. This Pokémon may also overinflate its round body, then explode.`, 'Grass', 'Psychic/Ground', 'weezing', 'Normal', 35, 109);

const weezing = new Pokemon(`weezing`, `img/weezing.jpg`, `Weezing loves the gases given off by rotted kitchen garbage. This Pokémon will find a dirty, unkempt house and make it its home. At night, when the people in the house are asleep, it will go through the trash.`, 'Grass', 'Psychic/Ground', false, 'Normal', false, 110);

const rhyhorn = new Pokemon(`rhyhorn`, `img/rhyhorn.jpg`, `Rhyhorn runs in a straight line, smashing everything in its path. It is not bothered even if it rushes headlong into a block of steel. This Pokémon may feel some pain from the collision the next day, however.`, 'Ground/Rock', 'Water/Grass/Ground/Ice/Steel/Fighting', 'rhydon', 'Normal', 42, 111);

const rhydon = new Pokemon(`rhydon`, `img/rhydon.jpg`, `Rhydon's horn can crush even uncut diamonds. One sweeping blow of its tail can topple a building. This Pokémon's hide is extremely tough. Even direct cannon hits don't leave a scratch.`, 'Ground', 'Water/Grass/Ground/Ice/Steel/Fighting', false, 'Normal', false, 112);

const chansey = new Pokemon(`chansey`, `img/chansey.jpg`, `Chansey lays nutritionally excellent eggs on an everyday basis. The eggs are so delicious, they are easily and eagerly devoured by even those people who have lost their appetite.`, 'Normal', 'Fighting', false, false, false, 113);

const tangela = new Pokemon(`tangela`, `img/tangela.jpg`, `Tangela's vines snap off easily if they are grabbed. This happens without pain, allowing it to make a quick getaway. The lost vines are replaced by newly grown vines the very next day.`, 'Grass', 'Fire/Flying/Poison/Bug/Ice', false, false, false, 114);

const kangaskhan = new Pokemon(`kangaskhan`, `img/kangaskhan.jpg`, `If you come across a young Kangaskhan playing by itself, you must never disturb it or attempt to catch it. The baby Pokémon's parent is sure to be in the area, and it will become violently enraged at you.`, 'Normal', 'Fighting', false, false, false, 115);

const horsea = new Pokemon(`horsea`, `img/horsea.jpg`, `Horsea eats small insects and moss off of rocks. If the ocean current turns fast, this Pokémon anchors itself by wrapping its tail around rocks or coral to prevent being washed away.`, 'Water', 'Grass/Electric', 'seadra', 'Normal', 32, 116);

const seadra = new Pokemon(`seadra`, `img/seadra.jpg`, `Seadra sleeps after wriggling itself between the branches of coral. Those trying to harvest coral are occasionally stung by this Pokémon's poison barbs if they fail to notice it.`, 'Water', 'Grass/Electric', false, 'Normal', false, 117);

const goldeen = new Pokemon(`goldeen`, `img/goldeen.jpg`, `Goldeen is a very beautiful Pokémon with fins that billow elegantly in water. However, don't let your guard down around this Pokémon—it could ram you powerfully with its horn.`, 'Water', 'Grass/Electric', 'seaking', 'Normal', 33, 118);

const seaking = new Pokemon(`seaking`, `img/seaking.jpg`, `In the autumn, Seaking males can be seen performing courtship dances in riverbeds to woo females. During this season, this Pokémon's body coloration is at its most beautiful.`, 'Water', 'Grass/Electric', false, 'Normal', false, 119);

const staryu = new Pokemon(`staryu`, `img/staryu.jpg`, `Staryu's center section has an organ called the core that shines bright red. If you go to a beach toward the end of summer, the glowing cores of these Pokémon look like the stars in the sky.`, 'Water', 'Grass/Electric', 'starmie', 'Water Stone', false, 120);

const starmie = new Pokemon(`starmie`, `img/starmie.jpg`, `Starmie's center section—the core—glows brightly in seven colors. Because of its luminous nature, this Pokémon has been given the nickname “the gem of the sea.”`, 'Water', 'Ghost/Dark/Electric/Grass/Bug', false, 'Water Stone', false, 121);

const mrMime = new Pokemon(`mr. mime`, `img/mr-mime.jpg`, `Mr. Mime is a master of pantomime. Its gestures and motions convince watchers that something unseeable actually exists. Once the watchers are convinced, the unseeable thing exists as if it were real.`, 'Psychic', 'Poison/Ghost/Steel', false, false, false, 122);

const scyther = new Pokemon(`scyther`, `img/scyther.jpg`, `Scyther is blindingly fast. Its blazing speed enhances the effectiveness of the twin scythes on its forearms. This Pokémon's scythes are so effective, they can slice through thick logs in one wicked stroke.`, 'Grass', 'Rock/Fire/Flying/Ice/Electric', false, false, false, 123);

const jynx = new Pokemon(`jynx`, `img/jynx.jpg`, `Jynx walks rhythmically, swaying and shaking its hips as if it were dancing. Its motions are so bouncingly alluring, people seeing it are compelled to shake their hips without giving any thought to what they are doing.`, 'Psychic', 'Fire/Dark/Rock/Bug/Ghost/Steel', false, false, false, 124);

const electabuzz = new Pokemon(`electabuzz`, `img/electabuzz.jpg`, `When a storm arrives, gangs of this Pokémon compete with each other to scale heights that are likely to be stricken by lightning bolts. Some towns use Electabuzz in place of lightning rods.`, 'Electric', 'Ground', false, false, false, 125);

const magmar = new Pokemon(`magmar`, `img/magmar.jpg`, `In battle, Magmar blows out intensely hot flames from all over its body to intimidate its opponent. This Pokémon's fiery bursts create heat waves that ignite grass and trees in its surroundings.`, 'Fire', 'Ground/Rock/Water', false, false, false, 126);

const pinsir = new Pokemon(`pinsir`, `img/pinsir.jpg`, `Pinsir is astoundingly strong. It can grip a foe weighing twice its weight in its horns and easily lift it. This Pokémon's movements turn sluggish in cold places.`, 'Grass', 'Fire/Flying/Rock', false, false, false, 127);

const tauros = new Pokemon(`tauros`, `img/tauros.jpg`, `This Pokémon is not satisfied unless it is rampaging at all times. If there is no opponent for Tauros to battle, it will charge at thick trees and knock them down to calm itself.`, 'Normal', 'Fighting', false, false, false, 128);

const magikarp = new Pokemon(`magikarp`, `img/magikarp.jpg`, `Magikarp is a pathetic excuse for a Pokémon that is only capable of flopping and splashing. This behavior prompted scientists to undertake research into it.`, 'Water', 'Grass/Electric', 'gyarados', 'Normal', 20, 129);

const gyarados = new Pokemon(`gyarados`, `img/gyarados.jpg`, `When Magikarp evolves into Gyarados, its brain cells undergo a structural transformation. It is said that this transformation is to blame for this Pokémon's wildly violent nature.`, 'Water', 'Electric/Rock', false, 'Normal', false, 130);

const lapras = new Pokemon(`lapras`, `img/lapras.jpg`, `People have driven Lapras almost to the point of extinction. In the evenings, this Pokémon is said to sing plaintively as it seeks what few others of its kind still remain.`, 'Water', 'Fighting/Rock/Electric/Grass', false, false, false, 131);

const ditto = new Pokemon(`ditto`, `img/ditto.jpg`, `Ditto rearranges its cell structure to transform itself into other shapes. However, if it tries to transform itself into something by relying on its memory, this Pokémon manages to get details wrong.`, 'Normal', 'Fighting', false, false, false, 132);

const eevee = new Pokemon(`eevee`, `img/eevee.jpg`, `Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pokémon to evolve.`, 'Normal', 'Fighting', 'vaporeon/Jolteon/Flareon', 'Water Stone/Thunder Stone/Fire Stone', false, 133);

const vaporeon = new Pokemon(`vaporeon`, `img/vaporeon.jpg`, `Vaporeon underwent a spontaneous mutation and grew fins and gills that allow it to live underwater. This Pokémon has the ability to freely control water.`, 'Water', 'Grass/Electric', false, 'Water Stone', false, 134);

const jolteon = new Pokemon(`jolteon`, `img/jolteon.jpg`, `Jolteon's cells generate a low level of electricity. This power is amplified by the static electricity of its fur, enabling the Pokémon to drop thunderbolts. The bristling fur is made of electrically charged needles.`, 'Electric', 'Ground', false, 'Thunder Stone', false, 135);

const flareon = new Pokemon(`flareon`, `img/flareon.jpg`, `Flareon's fluffy fur has a functional purpose—it releases heat into the air so that its body does not get excessively hot. This Pokémon's body temperature can rise to a maximum of 1,650 degrees Fahrenheit.`, 'Fire', 'Ground/Rock/Water', false, 'Fire Stone', false, 136);

const porygon = new Pokemon(`porygon`, `img/porygon.jpg`, `Porygon is capable of reverting itself entirely back to program data and entering cyberspace. This Pokémon is copy protected so it cannot be duplicated by copying.`, 'Normal', 'Fighting', false, false, false, 137);

const omanyte = new Pokemon(`omanyte`, `img/omanyte.jpg`, `Omanyte is one of the ancient and long-since-extinct Pokémon that have been regenerated from fossils by people. If attacked by an enemy, it withdraws itself inside its hard shell.`, 'Water', 'Grass/Ground/Fighting/Electric', 'omastar', 'Normal', 40, 138);

const omastar = new Pokemon(`omastar`, `img/omastar.jpg`, `Omastar uses its tentacles to capture its prey. It is believed to have become extinct because its shell grew too large and heavy, causing its movements to become too slow and ponderous.`, 'Water', 'Grass/Ground/Fighting/Electric', false, 'Normal', false, 139);

const kabuto = new Pokemon(`kabuto`, `img/kabuto.jpg`, `Kabuto is a Pokémon that has been regenerated from a fossil. However, in extremely rare cases, living examples have been discovered. The Pokémon has not changed at all for 300 million years.`, 'Ground', 'Grass/Ground/Fighting/Electric', 'kabutops', 'Norma', 40, 140);

const kabutops = new Pokemon(`kabutops`, `img/kabuto.jpg`, `Kabutops swam underwater to hunt for its prey in ancient times. The Pokémon was apparently evolving from being a water dweller to living on land as evident from the beginnings of change in its gills and legs.`, 'Ground', 'Grass/Ground/Fighting/Electric', false, 'Normal', false,  141);

const aerodactly = new Pokemon(`aerodactly`, `img/aerodactly.jpg`, `Aerodactyl is a Pokémon from the age of dinosaurs. It was regenerated from genetic material extracted from amber. It is imagined to have been the king of the skies in ancient times.`, 'Ground', 'Ice/Rock/Steel/Water/Electric', false, false, false, 142);

const snorlax = new Pokemon(`snorlax`, `img/snorlax.jpg`, `Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pokémon that there are children who use its expansive belly as a place to play.`, 'Normal', 'Fighting', false, false, false, 143);

const articuno = new Pokemon(`articuno`, `img/articuno.jpg`, `Articuno is a Legendary Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.`, 'Water', 'Rock/Fire/Electric/Steel', false, false, false, 144);

const zapdos = new Pokemon(`zapdos`, `img/zapdos.jpg`, `Zapdos is a Legendary Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts.`, 'Electric', 'Ice/Rock', false, false, false, 145);

const moltres = new Pokemon(`moltres`, `img/moltres.jpg`, `Moltres is a Legendary Pokémon that has the ability to control fire. If this Pokémon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself.`, 'Fire', 'Rock/Electric/Water', false, false, false, 146);

const dratini = new Pokemon(`dratini`, `img/dratini.jpg`, `Dratini continually molts and sloughs off its old skin. It does so because the life energy within its body steadily builds to reach uncontrollable levels.`, 'Normal', 'Fairy/Dragon/Ice', 'dragonair', 'Normal', 30, 147);

const dragonair = new Pokemon(`dragonair`, `img/dragonair.jpg`, `Dragonair stores an enormous amount of energy inside its body. It is said to alter weather conditions in its vicinity by discharging energy from the crystals on its neck and tail.`, 'Normal', 'Fairy/Dragon/Ice', 'dragonite', 'Normal', 55, 148);

const dragonite = new Pokemon(`dragonite`, `img/dragonite.jpg`, `Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land.`, 'Normal', 'Ice/Fairy/Dragon/Rock', false, 'Normal', false, 149);

const mewtwo = new Pokemon(`mewtwo`, `img/mewtwo.jpg`, `Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon's body, they failed to endow Mewtwo with a compassionate heart.`, 'Psychic', 'Bug/Dark/Ghost', false, false, false, 150);

const mew = new Pokemon(`mew`, `img/mew.jpg`, `Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.`, 'Psychic', 'Bug/Dark/Ghost', false, false, false, 151);

const pokemon = [bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard, squirtle, wartortle, blastoise, caterpie, metapod, butterfree, weedle, kakuna, beedrill, pidgey, pidgeotto, pidgeot, rattata, raticate, spearow, fearow, ekans, arbok, pikachu, raichu, sandshrew, sandslash, nidoranF, nidorina, nidoqueen, nidoranM, nidorino, nidoking, clefairy, clefable, vulpix, ninetales, jigglypuff, wigglytuff, zubat, golbat, oddish, gloom, vileplume, paras, parasect, venonat, venomoth, diglett, dugtrio, meowth, persian, psyduck, golduck, mankey, primeape, growlithe, arcanine, poliwag, poliwhirl, poliwrath, abra, kadabra, alakazam, machop, machoke, machamp, bellsprout, weepinbell, victreebel, tentacool, tentacruel, geodude, graveler, golem, ponyta, rapidash, slowpoke, slowbro, magnemite, magneton, farfetchd, doduo, dodrio, seel, dewgong, grimer, muk, shellder, cloyster, gastly, haunter, gengar, onix, drowzee, hypno, krabby, kingler, voltorb, electrode, exeggcute, exeggutor, cubone, marowak, hitmonlee, hitmonchan, lickitung, koffing, weezing, rhyhorn, rhydon, chansey, tangela, kangaskhan, horsea, seadra, goldeen, seaking, staryu, starmie, mrMime, scyther, jynx, electabuzz, magmar, pinsir, tauros, magikarp, gyarados, lapras, ditto, eevee, vaporeon, jolteon, flareon, porygon, omanyte, omastar, kabuto, kabutops, aerodactly, snorlax, articuno, zapdos, moltres, dratini, dragonair, dragonite, mewtwo, mew];