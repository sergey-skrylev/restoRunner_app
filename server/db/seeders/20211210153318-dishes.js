module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Dishes', [{
      name: 'Борщ',
      picture: '/img/soups/borsh.jpg',
      price: 210,
      time: 20,
      category_id: 2,
      ingredients: 'Морковь, петрушка, уксус, сахар, сметана, лук репчатый, ростки подсолнуха, риет утиный, свекла, картофель',
      description: 'Борщ — густой и наваристый суп знакомый всем с самого детства. Для нашего меню мы сделали особенную подачу, где классика славянской кухни превращается в насыщенный и густой крем.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Овощной суп',
      picture: '/img/soups/ovoshnoi_sup.jpg',
      price: 220,
      time: 20,
      category_id: 2,

      ingredients: 'Перец болгарский, кабачок, бульон говяжий, баклажаны, риет утиный, грибы вешенки',
      description: 'Овощной суп с утиным риетом — это превосходное сочетание приятного вкуса и полезного сочетания мяса и овощей. К нежной утиной ножке мы добавляем баклажаны, цуккини, болгарский перец, оттеняем луком пореем и вешенками.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Дал индийский ',
      picture: '/img/soups/schi.jpg',
      price: 220,
      time: 20,
      category_id: 2,
      ingredients: 'Морковь, масло кунжутное, кумин, паста карри, пряные индийские специи, томаты, лук репчатый, чечевица красная, нут',
      description: 'Индийский вегетарианский густой суп-пюре из разваренных бобовых. Пряный и острый Дал в нашем рецепте в своей основе имеет турецкий горох – нут. ',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Уха',
      picture: '/img/soups/finskaya_uxa.jpg',
      price: 200,
      time: 20,
      category_id: 2,

      ingredients: 'Лосось, петрушка, картофель молодой в мундире, бульон рыбный, сельдерей, сливки',
      description: 'Уха по-фински — соблазнительное и аппетитное первое блюдо из красной рыбы. Наша Уха приготовлена по традиционному рецепту скандинавской кухни: из филе лосося, в сливочном бульоне с картофелем в мундире. ',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Томатный суп',
      picture: '/img/soups/tomat_sup.jpg',
      price: 180,
      time: 20,
      category_id: 2,
      ingredients: 'Морковь, моцарелла, мясной бульон, прованские травы, томаты, лук репчатый, чеснок, сельдерей, Гриссини, сливки, бекон',
      description: 'Настоящая гордость рецепта Супреме де томат – свежие, сочные, мясистые томаты. Именно из них мы делаем воздушное горячее пюре, разбавляя насыщенный вкус томатов сливочным сыром моцарелла, пикантным обжаренным беконом, терпким сельдереем и хрустящими гриссини.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Крем суп',
      picture: '/img/soups/krem_sup.jpg',
      price: 170,
      time: 20,
      category_id: 2,
      ingredients: 'Морковь, лук зеленый, сыр плавленый, сыр горгонзола, бульон овощной, картофель, лук фри',
      description: 'Наверное, самый комфортный суп из нашего арсенала! Нежный и бархатистый по текстуре, ароматный и очень сырный. Добавляют +100 к уюту. Поддержит и придаст сил не хуже лучшего друга.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Французский томатный суп',
      picture: '/img/soups/france_sup.jpg',
      price: 450,
      time: 20,
      category_id: 2,
      ingredients: 'Молюски вонголе, соус Наполи, петрушка, креветки, лук порей, лосось, бульон рыбный, мидии в створках, томаты черри, масло сливочное, чеснок',
      description: 'В Марселе этот суп обозвали бы «Буйабес». Густой, пряный томатный бульон с кучей пряностей, помидорами, зеленью и большой морской тусовкой из лосося, креветок, мидий и ракушек вонголе. С бокалом белого вина и закрытыми глазами кажется, что вы сидите на террасе у Средиземного моря, проверяли.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Фо бо',
      picture: '/img/soups/fobo.jpg',
      price: 320,
      time: 20,
      category_id: 2,
      ingredients: 'Мята, лук зеленый, кинза, лапша рисовая, бульон фо бо, корица, говяжья вырезка',
      description: 'Традиционно вьетнамский суп Фо Бо подают в миске с белой рисовой лапшой, плавающей в прозрачном говяжьем бульоне с тонкими ломтиками говядины. Чтобы достичь насыщенного мясного вкуса, бульон вываривают несколько часов по специальной технологии.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Coca-Cola 0,33 л',
      picture: '/img/drinks/coca_cola.jpg',
      price: 140,
      time: 2,
      category_id: 8,
      ingredients: 'Вода, сироп глюкозно-фруктозный, сахар, экстракт матe 0,4 г/100 мл, лимонная кислота, натуральный ароматизатор, натуральный краситель сахарный колер IV',
      description: 'Самый популярный напиток за всю историю компании Coca‑Cola был придуман аптекарем Доктором Джоном Пэмбертоном в 1886 года. Этот прохладительный напиток был сразу признан одновременно вкусным и освежающим. ',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Club Mate Сola 0,33 л.',
      picture: '/img/drinks/mate_cola.jpg',
      price: 190,
      time: 2,
      category_id: 8,
      ingredients: 'Вода, сироп глюкозно-фруктозный, сахар, экстракт матe 0,4 г/100 мл, лимонная кислота, натуральный ароматизатор, натуральный краситель сахарный колер IV',
      description: 'Бодрящий безалкогольный напиток со вкусом колы приготовлен по оригинальному рецепту на основе натурального экстракта чая мате. Напиток обладает приятным тонизирующим вкусом с растительными нотками, отлично утоляет жажду и заряжает энергией. ',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Red Bull 0,25 л.',
      picture: '/img/drinks/red_bull.jpg',
      price: 160,
      time: 2,
      category_id: 8,
      ingredients: 'Газированная вода, сахароза, глюкоза, регуляторы кислотности (лимонная кислота, гидрокарбонат натрия, карбонат магния), таурин (400 мг/100 мл), натуральный кофеин (32 мг/100 мл), витамины (ниацин, пантотеновая кислота, В6, В12), ароматизаторы',
      description: 'Безалкогольный тонизирующий сильногазированный пастеризованный энергетический напиток для лиц подвергающихся значительным физическим и психоэмоциональным нагрузкам.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Морс из чёрной смородины 1 л.',
      picture: '/img/drinks/smorodina.jpg',
      price: 220,
      time: 2,
      category_id: 8,
      ingredients: 'Сахар, чёрная смородина, вода',
      description: 'Не торопитесь замораживать на зиму оставшуюся после еды черную смородину. Приготовьте лучше морс. Пряный морс из черной смородины  и жажду утолит в жару, и настроение поднимет.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Морс из клубники и черники 1 л.',
      picture: '/img/drinks/chernika.jpg',
      price: 220,
      time: 2,
      category_id: 8,
      ingredients: 'Сахар, клубника, черника, вода, земляника',
      description: 'Освежающий напиток из ягодного или фруктового сока и воды с добавлением сахара (а в старину – меда). Чаще всего для приготовления морса используют ягоды: клюкву, бруснику, красную или черную смородину, вишню, ежевику. Их перетирают, заливают водой и варят в течение нескольких минут. ',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Морс из клюквы 1 л.',
      picture: '/img/drinks/klukva.jpg',
      price: 220,
      time: 2,
      category_id: 8,
      ingredients: 'Сахар, клюква, ягоды можжевельника, вода',
      description: 'Отличный клюквенный морс, освежает в жару, плюс витамины! Не слишком сладкий и в меру кисловат! В сезон можно было бы и подешевле продавать, а так покупаем его круглый год! Вкусно и полезно! Рекомендую!',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Fritz-Kola Кофе-Карамель 0,33 л.',
      picture: '/img/drinks/fritz.jpg',
      price: 220,
      time: 2,
      category_id: 8,
      ingredients: 'Вода, сироп глюкозно-фруктозный, сахар, экстракт матe 0,4 г/100 мл, лимонная кислота, натуральный ароматизатор, натуральный краситель сахарный колер IV',
      description: 'Fritz-Kola с карамельно-кофейным вкусом приготовлена на основе натуральных ингредиентов. В состав напитка входит большое содержание кофеина (25 мг на 100 мл) и натуральный экстракт ореха колы.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Зелёный чай Teatone с ароматом мяты',
      picture: '/img/drinks/greentea.jpg',
      price: 150,
      time: 2,
      category_id: 8,
      ingredients: 'Зеленый чай',
      description: 'Зелёный чай с натуральной мятой издавна ценят за мягкий освежающий вкус и природную пользу. Вот почему этот легкий ароматный напиток является непременным атрибутом динамичного стиля жизни. Чай в стиках. 15 стиков в упаковке.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Салат Овощной',
      picture: '/img/salats/ovoshnoi.jpg',
      price: 320,
      time: 10,
      category_id: 1,
      ingredients: 'Соевый соус, редис, перец болгарский, микс салатов, масло кунжутное, томаты, сельдерей, огурец, соус ворчестер, масло оливковое',
      description: 'В этом салате встретились душевность, актуальность и полезность. Ностальгические томаты, огурцы и перец, пикантный сельдерей и дерзкий редис, микс салатов — все это мы заправляем кунжутным маслом, насыщенным соевым и выразительным ворчестерскими соусами.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Салат Оливье',
      picture: '/img/salats/olivie.jpg',
      price: 280,
      time: 10,
      category_id: 1,
      ingredients: 'Морковь, петрушка, свиной окорок, огурец, картофель, горошек зеленый, яйцо, майонез',
      description: 'Иногда душа просит родной и праздничный вкус, ведь так? Мы используем традиционную рецептуру и превосходный окорок, чтобы ответить на запросы по-настоящему щедро.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Салат с ростбифом и вешенками',
      picture: '/img/salats/rostbif.jpg',
      price: 400,
      time: 10,
      category_id: 1,
      ingredients: 'Петрушка, микс салатов, соус шрирачи, сахар, базилик свежий, соус соевый, говяжья вырезка, имбирь, кинза, томаты черри, грибы вешенки, ростки сои, лайм, масло оливковое, чеснок',
      description: 'Вы когда-нибудь задумывались, что ростбиф с соусом на основе кинзы, петрушки и маринованного имбиря может быть обалденно гармоничным и вкусным? Для баланса еще бросили горсть соевых ростков, обжаренные вешенки, томаты и базилик. Бодрит!',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Цезарь с куриной грудкой',
      picture: '/img/salats/cezar.jpg',
      price: 380,
      time: 10,
      category_id: 1,
      ingredients: 'Соус Цезарь, грана падано, томаты, гренки из чиабатты, ромейн, яйцо, куриная грудка',
      description: 'Основа салата «Цезарь» – его особая заправка, приготовленная из свежих яиц. Яйца густо взбиваются с оливковым маслом и приправляются чесноком, лимонным соком и пикантным вустерским соусом. Среди ингредиентов в рецепте присутствуют листья салата-латук, пшеничные сухари и сыр грана падано. ',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Салат с цыплёнком и запеченным картофелем',
      picture: '/img/salats/chicken.jpg',
      price: 380,
      time: 10,
      category_id: 1,
      ingredients: 'Петрушка, микс салатов, картофель молодой в мундире, соус шрирачи, сахар, соус соевый, томаты, имбирь, кинза, сельдерей, оливки гигант зеленые, лук красный маринованный, лайм, масло оливковое, чеснок, куриная грудка',
      description: 'Сытный легкий салат с кусочками обжаренного куриного филе и ломтиками запеченного картофеля, где за исключительный вкус отвечают оливки: гигантские мясистые зеленые. Добавляем микс салатов и томатов, щепотку пряных специй и получаем сбалансированное и яркое блюдо.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Салат чука с ореховым соусом',
      picture: '/img/salats/chuka.jpg',
      price: 410,
      time: 10,
      category_id: 1,
      ingredients: 'Водоросли чука, соус ореховый',
      description: 'Маняще-изумрудный, чуть хрустящий, с обволакивающим ореховым соусом. Волшебный дар Посейдона или русалок, как вам больше нравится.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Тартар из лосося и авокадо',
      picture: '/img/salats/losos.jpg',
      price: 320,
      time: 10,
      category_id: 1,
      ingredients: 'Чили перец, авокадо, лосось, кинза, соус Унаги, перец черный, руккола, лук красный, лайм, масло оливковое',
      description: 'Наш вариант очень близок к классическому рецепту — нарезанные ровными кусочками лосось и авокадо в совершенной гармонии с зеленью и пряным соусом Унаги. Отличный стартер для ужина!',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Нисуаз с тунцом розе',
      picture: '/img/salats/tunec.jpg',
      price: 320,
      time: 10,
      category_id: 1,
      ingredients: 'микс салатов, тунец, масло растительное, оливки гигант зеленые, Фасоль романо, томаты черри, картофель стоун, яйцо, медово-горчичный соус',
      description: 'Нисуаз — настоящая гордость солнечной Ниццы. Еще бы: это очень хитрый замес, который нравится всем, даже хейтерам салатов. Ну а как можно не любить сочетание беби-картофеля, горчичного соуса и тунца розе.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Спагетти карбонара',
      picture: '/img/garnish/spagetti.jpg',
      price: 420,
      time: 20,
      category_id: 3,

      ingredients: 'Тимьян, паста собственного приготовления, чеснок, перец черный, яйцо, сливки, бекон',
      description: 'Секрет традиционного вкуса спагетти Карбонара в соусе, который доходит до полной готовности благодаря горячей только что сваренной пасте. Среди ингредиентов соуса яйца, черный перец и сытный, ароматный бекон, нарезанный небольшими кусочками.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Куриная грудка с пюре',
      picture: '/img/garnish/grudka.jpg',
      price: 400,
      time: 20,
      category_id: 3,

      ingredients: 'Соус BBQ, соус соевый, мёд, молоко, базиликовое масло, кетчуп, пюре картофельное, масло сливочное, соус ворчестер, куриная грудка',
      description: 'Ломтики нежного куриного филе слегка обжарены на гриле и действительно тают во рту. А в паре с воздушным картофельным пюре на молоке с добавлением кусочка сливочного масла составляют по-настоящему сытное и сбалансированное блюдо.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Плов с бараниной',
      picture: '/img/garnish/plov.jpg',
      price: 370,
      time: 20,
      category_id: 3,

      ingredients: 'Морковь, чили перец, петрушка, кумин, масло растительное, лук репчатый, томатная паста, баранина, чеснок, рис, барбарис',
      description: 'Рис, тушеный с мясом — это еще не плов. Мы долго изучали тонкости приготовления двоюродного брата вока и, кажется, пришли к идеалу. Главное — хорошая баранина и не жалеть ароматных специй: барбариса, зиры, чили и чеснока. Вот мы и не жалеем, главное же — чтобы вам было вкусно.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Лазанья аль форно',
      picture: '/img/garnish/lazaniya.jpg',
      price: 520,
      time: 20,
      category_id: 3,

      ingredients: 'Моцарелла, соус Наполи, чеснок, молоко, филе куриное, паста собственного приготовления, свинина, лук репчатый, баранина',
      description: 'Лазанья Аль форно – настоящая звезда итальянской кухни. Большая и сытная порция от Yami Yami — это свежая паста собственного приготовления, три вида аппетитного мясного фарша, моцарелла и классический соус Болоньезе.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Бифштекс из баранины',
      picture: '/img/garnish/bifshteks.jpg',
      price: 560,
      time: 20,
      category_id: 3,
      ingredients: 'Тимьян свежий, соус BBQ, соус соевый, мёд, масло растительное, лук репчатый, чеснок, картофель стоун, кетчуп, перец черный, масло сливочное, соус ворчестер, баранина, говядина',
      description: 'Наш фирменный ароматный бифштекс из баранины — отличный выбор для основного блюда. Сытный и сочный бифштекс готовится по классическому рецепту лучшими поварами из отборного мяса, его нежный вкус удовлетворит запросы самых придирчивых гурманов.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Рис с цыплёнком в соусе унаги',
      picture: '/img/garnish/unagi.jpg',
      price: 410,
      time: 20,
      category_id: 3,
      ingredients: 'Морковь, лук зеленый, перец болгарский, кабачок, филе куриное, баклажаны, кунжут, соус Унаги, рис',
      description: 'Традиционные рецепты японской кухни весьма аскетичны, как во времена самураев. Это блюдо сочетает в себе свежий рассыпчатый рис, сочные кусочки курицы и овощи, приправленные классическим соусом японской кухни — Унаги.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Томленые телячьи щечки с мятым картофелем',
      picture: '/img/garnish/shechki.jpg',
      price: 420,
      time: 20,
      category_id: 3,
      ingredients: 'Cладкая красная паприка, лук зеленый, говядина, сахар, бульон мясной, молоко, лук фри, картофель, томатная паста, масло сливочное',
      description: 'Томленая говядина с картофелем, блюдо для тех, кто хочет вкусно и сытно поесть. Гарнир, в качестве которого выступает мятый картофель со сливками и зеленью, придавая ей вкусовую завершённость.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Утиная ножка конфи',
      picture: '/img/garnish/shechki.jpg',
      price: 490,
      time: 20,
      category_id: 3,
      ingredients: 'Утиная ножка конфи, микс салатов, картофель молодой в мундире, соус томатный, грибы вешенки',
      description: 'Медленное томление конфи отлично позволяет раскрыть яркий вкус утки. Мы поддерживаем этот вкус вешенками и оттеняем молодым картофелем. Получается горячее, за которым идет настоящая охота.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Пицца четыре сыра',
      picture: '/img/pizza/chees.jpg',
      price: 560,
      time: 20,
      category_id: 5,
      ingredients: 'Соус сырный, сыр горгонзола, сыр моцарелла, пармезан, тесто для пиццы, моцарелла в рассоле',
      description: 'Встречайте главную пиццу этого лета, которая объединяет людей со всеми вкусовыми предпочтениями. В любой непонятной ситуации выбираем сыр.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Пицца с ветчиной и грибами',
      picture: '/img/pizza/vetchina.jpg',
      price: 580,
      time: 20,
      category_id: 5,
      ingredients: 'Ветчина, соус томатный, сыр моцарелла, шампиньоны, тесто для пиццы, грибы вешенки, бекон, трюфельная паста, майонез',
      description: 'Классическое сочетание ветчины, сыра и грибов в объемном прочтении. Разные грани копченого мясного вкуса раскрывают ветчина и бекон. И, конечно, грибы: шампиньоны, вешенками, а также особенный глубокий аромат трюфельного крема.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Пицца Маргарита',
      picture: '/img/pizza/margarita.jpg',
      price: 420,
      time: 20,
      category_id: 5,

      ingredients: 'Соус песто, соус томатный, сыр моцарелла, томаты черри, тесто для пиццы',
      description: 'Самая классическая в мире, прародительница всех пицц – пицца Маргарита, невероятно проста в исполнении, но неповторима по вкусу и аромату. Для приготовления мы используем горячее пышное тесто, томатный соус и нежнейшую моцареллу.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Пицца с грибами',
      picture: '/img/pizza/grib.jpg',
      price: 480,
      time: 20,
      category_id: 5,

      ingredients: 'Соус сырный, петрушка, сыр моцарелла, шампиньоны, тесто для пиццы, грибы вешенки, соус маскарпоне, трюфельная паста',
      description: 'В рецепте этой пиццы правят исключительно грибы. Мы выбрали те, что имеют наиболее насыщенный вкус: вешенки и шампиньоны. За основу взяли свежеиспеченное тесто, политое горячим сырным соусом, тающие во рту сливочный сыр маскарпоне и кремовый сыр гауда.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Пицца с вешенками, беконом и куриным филе',
      picture: '/img/pizza/veshenki.jpg',
      price: 520,
      time: 20,
      category_id: 5,

      ingredients: 'Соус сырный, петрушка, филе куриное, сыр моцарелла, тесто для пиццы, грибы вешенки, бекон, соус маскарпоне',
      description: 'Румяная основа из воздушного теста, ароматный бекон, нежное куриное филе, грибы вешенки и расплавленный сыр, невозможно удержаться от соблазна съесть всё, до последнего кусочка.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Пицца с грушей и горгонзолой',
      picture: '/img/pizza/grusha.jpg',
      price: 580,
      time: 20,
      category_id: 5,
      ingredients: 'Соус сырный, сыр горгонзола, слайсы миндаля, груша, сыр моцарелла, мёд, тесто для пиццы',
      description: 'Груша и горгонзола — пицца хитрая. Вроде бы в ней и сочетается сладкая груша, ароматный мед и лепестки миндаля, но десертной ее назвать никто не осмелится. Любители сочетания сладкого и соленого — это ваша остановка.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Пицца Диавола',
      picture: '/img/pizza/diablo.jpg',
      price: 600,
      time: 20,
      category_id: 5,
      ingredients: 'Масло острое, соус томатный, сыр моцарелла, тесто для пиццы, пепперони',
      description: 'Пицца «Диавола» — блюдо для тех, кто любит поострее. Горячая пышная основа нашей пиццы дополнена аппетитными кусочками пепперони и итальянским сыром моцарелла. Все вместе щедро приправлено острым маслом.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Пицца инферно',
      picture: '/img/pizza/inferno.jpg',
      price: 660,
      time: 20,
      category_id: 5,
      ingredients: 'Cоус майо, моцарелла, перец халапеньо, соус томатный, свиной окорок, тесто для пиццы, бекон, пепперони.',
      description: ' Мясное разнообразие мы приправляем жгучим перцем халапеньо, оттеняем его нежным сливочным сыром моцарелла и подаем все это вкусовое безумие на свежеиспеченном горячем тесте.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Тирамису',
      picture: '/img/deserts/tiramisu.jpg',
      price: 260,
      time: 5,
      category_id: 7,

      ingredients: 'Крем маскарпоне, сироп амаретто, кофе, печенье савойарди, яйцо, какао',
      description: '«Тирамису» состоит из трех итальянских слов: tira mi su, что буквально можно перевести как «поднимай меня вверх» — по одной из версий, из-за своей высокой калорийности. Но большинство утверждает, что итальянцы имеют в виду эмоциональное состояние и этот перевод следует понимать как «подними мне настроение»',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Торт Чизкейк',
      picture: '/img/deserts/chizcake.jpg',
      price: 1500,
      time: 5,
      category_id: 7,

      ingredients: 'Печенье, сахар, сливочный сыр, мука, фундук, яйцо, масло сливочное, сливки',
      description: 'Чизкейк – американский десерт, один из самых популярных десертов в мире. Мы используем классический рецепт, чей особый нежный вкус знаком каждому. В основе лакомства основа из толченного орехового печенья Бачи ди дама и слой начинки с воздушным сыром креметта.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Торт Медовый кейк',
      picture: '/img/deserts/medovii-keik.jpg',
      price: 1500,
      time: 5,
      category_id: 7,

      ingredients: 'Сахар, сливочный сыр, мука, мёд, фундук, яйцо, сливки',
      description: 'Тающие во рту ароматные медовые коржи признаны бесспорным лакомством ни одним поколением искушенных сладкоежек. Сладость меда в своем рецепте мы разбавили мягкой кремовой текстурой фундука и молочным вкусом воздушных сливок, обильно нанесенных на каждый из слоев десерта.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Малиновый сорбет',
      picture: '/img/deserts/malinovii-sorbet.jpg',
      price: 490,
      time: 5,
      category_id: 7,

      ingredients: 'Лимонная кислота, сахар, свежие ягоды малины, вода, крахмальная патока',
      description: 'Легкий, тонкий и звонкий ответ традиционным десертам. Поможем освежиться в жару посреди дня или замять плотный ужин кислинкой. Никаких вам жирных сливок, только много свежей и спелой малины, чуть сахара и лимонные нотки.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Джелато йогурт страчателла',
      picture: '/img/deserts/jellato-strachella.jpg',
      price: 550,
      time: 5,
      category_id: 7,
      ingredients: 'Сливки 35%, молочные протеины, кокосовое масло, какао с пониженным содержанием жира, молоко 3,2%',
      description: 'Для любителей классики на максималках: традиционный итальянский рецепт мороженого на свежих сливках, с щедрой порцией шоколадной крошки и нежной йогуртовой кислинкой. Секрет прост: нет времени, чтобы таять или откладывать на потом, съедается сразу.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Донатс Yami',
      picture: '/img/deserts/donats.jpg',
      price: 100,
      time: 5,
      category_id: 7,
      ingredients: 'Растительный жир, лактоза, сахар, молоко сухое, мука, масло растительное, сливочный крем, дрожжи, соль, белок яичный, красители пищевые, кондитерская посыпка, вода',
      description: 'Просто идеальный пончик — круглый и сладкий. Точно такой же ел Гомер в Симпсонах и Патрик из Губки Боба. Ребенок хочет сладкого, вы даете ему пончик — и все довольны.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Панчо с белым шоколадом и голубикой',
      picture: '/img/deserts/pancho.jpg',
      price: 260,
      time: 5,
      category_id: 7,
      ingredients: 'Мята, разрыхлитель, голубика, йогурт греческий, сода, сливочный сыр, мука, масло растительное, белый шоколад, яйцо, масло сливочное, какао, корица',
      description: 'Помните лет десять назад ни одно чаепитие не обходилось без легендарного торта «Панчо»? Мы переосмыслили любимый всеми десерт и сделали его более легким и ярким: заменили жирный крем греческим йогуртом, добавили свежей голубики и мяты. Если коротко: вышла нежность.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Панчо с белым шоколадом и голубикой',
      picture: '/img/deserts/pano.jpg',
      price: 260,
      time: 5,
      category_id: 7,
      ingredients: 'Печенье, желатин, сахар, молоко, мёд, клубничный джем, фундук, сливки',
      description: 'Воздушный итальянский десерт Панакотта – изысканное молочное лакомство с ярко выраженным сливочным вкусом. В основе десерта кремовый пудинг из молока и сливок с добавлением легкого печенья Бачи ди дама с ореховой ноткой, капелькой меда и густым клубничным джемом.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Блин с курицей и грибами',
      picture: '/img/blins/blin1.jpg',
      price: 260,
      time: 5,
      category_id: 6,
      ingredients: 'Филе куриное, сахар, Трюфельный соус, мука, масло растительное, молоко, сыр моцарелла, шампиньоны, соль, грибы вешенки, яйцо, масло сливочное',
      description: 'Это мог бы быть совершенно обычный, ничем не примечательный блин с курицой и грибами, но ситуация вышла из под контроля. Нежную куриную грудку, мы приготовили в су-виде, и это дало +100 к сочности, а к обжаренным вешенкам и шампиньонам добавили сливочный трюфельный соус.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Блин с грибами и сыром горгонзола',
      picture: '/img/blins/blin2.jpg',
      price: 250,
      time: 5,
      category_id: 6,
      ingredients: 'Cыр горгонзола, петрушка, сахар, Трюфельный соус, мука, масло растительное, молоко, сыр моцарелла, шампиньоны, соль, грибы вешенки, яйцо, масло сливочное',
      description: 'Блин счастья: начинка из пикантной горгонзолы с кремовой текстурой обволакивает хрустящие шампиньоны и вешенки. Аромат представляете сами. Комфортный и нежный с правильным балансом ярких вкусов. На завтрак, обед и ужин.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Блин с уткой по-пекински',
      picture: '/img/blins/blin3.jpg',
      price: 290,
      time: 5,
      category_id: 6,
      ingredients: 'Cахар, мука, масло растительное, молоко, сыр моцарелла, огурец, соль, риет утиный, кунжут, Соус хойсин, яйцо, масло сливочное',
      description: 'Вместо классических нано-блинчиков из риса, идеально приготовленный блин. Во-первых, так удобнее есть, а во-вторых – безопаснее: со стороны никто не додумается, что в твоем блине спряталась утка по-пекински. А это не тот случай, когда хочется делиться.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Блин с лососем',
      picture: '/img/blins/blin4.jpg',
      price: 290,
      time: 5,
      category_id: 6,
      ingredients: 'Лосось, Яйцо куриное, сахар, сливочный сыр, мука, масло растительное, икра масаго, молоко, соль, руккола, масло сливочное',
      description: 'Свежая или копчёная? Две стороны лосося в завтраках. Это более деликатная версия: блин со сливочным сыром, свежим лососем и рукколой. Деликатно и питательно.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Блин с ветчиной и сыром',
      picture: '/img/blins/blin5.jpg',
      price: 290,
      time: 5,
      category_id: 6,
      ingredients: 'Яйцо куриное, сахар, мука, масло растительное, молоко, сыр моцарелла, свиной окорок, соус сливочный, соль, масло сливочное, чеснок',
      description: 'Блин с ветчиной и сыром-беспроигрышное сочетание вкусов. В нашей вариации мы используем тамбовский окорок и моцареллу, чтобы создать яркий контраст настоящего мясного вкуса и сливочной нежности.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Блины со сметаной',
      picture: '/img/blins/blin6.jpg',
      price: 290,
      time: 5,
      category_id: 6,
      ingredients: 'Яйцо куриное, сахар, сметана, мука, масло растительное, молоко, черничный соус, соль, масло сливочное',
      description: 'Нежные блинчики для воскресных чаепитий или кофе по будням. Простые, натуральные ингредиенты и свежая сметана. Любимый с детства вкус.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Блин с курицей и грибами ',
      picture: '/img/breakfast/breakfast1.jpg',
      price: 250,
      time: 5,
      category_id: 4,
      ingredients: 'Филе куриное, сахар, Трюфельный соус, мука, масло растительное, молоко, сыр моцарелла, шампиньоны, соль, грибы вешенки, яйцо, масло сливочное',
      description: 'Это мог бы быть совершенно обычный, ничем не примечательный блин с курицой и грибами, но ситуация вышла из под контроля. Нежную куриную грудку, мы приготовили в су-виде, а к обжаренным вешенкам и шампиньонам добавили сливочный трюфельный соус.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Блин с грибами и сыром горгонзола',
      picture: '/img/breakfast/breakfast2.jpg',
      price: 250,
      time: 5,
      category_id: 4,
      ingredients: 'Сыр горгонзола, петрушка, сахар, Трюфельный соус, мука, масло растительное, молоко, сыр моцарелла, шампиньоны, соль, грибы вешенки, яйцо, масло сливочное',
      description: 'Блин счастья: начинка из пикантной горгонзолы с кремовой текстурой обволакивает хрустящие шампиньоны и вешенки. Аромат представляете сами. Комфортный и нежный с правильным балансом ярких вкусов. На завтрак, обед и ужин.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Блин с лососем',
      picture: '/img/breakfast/breakfast3.jpg',
      price: 350,
      time: 5,
      category_id: 4,
      ingredients: 'Лосось, Яйцо куриное, сахар, сливочный сыр, мука, масло растительное, икра масаго, молоко, соль, руккола, масло сливочное',
      description: 'Свежая или копчёная? Две стороны лосося в завтраках. Это более деликатная версия: блин со сливочным сыром, свежим лососем и рукколой. Деликатно и питательно.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Блин с лососем',
      picture: '/img/breakfast/breakfast4.jpg',
      price: 350,
      time: 5,
      category_id: 4,
      ingredients: 'Лосось, Яйцо куриное, сахар, сливочный сыр, мука, масло растительное, икра масаго, молоко, соль, руккола, масло сливочное',
      description: 'Свежая или копчёная? Две стороны лосося в завтраках. Это более деликатная версия: блин со сливочным сыром, свежим лососем и рукколой. Деликатно и питательно.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Брекфаст боул с гранолой и хурмой',
      picture: '/img/breakfast/breakfast5.jpg',
      price: 320,
      time: 5,
      category_id: 4,
      ingredients: 'Хурма, йогурт греческий, пшеница карамельная, пюре манго, мёд, манго, тыквенные семечки, семена чиа, эстрагон, хлопья кукурузные',
      description: 'Три слова: лето, утро, солнце. Это наш утренний боул. Когда ешь его, автоматически начинают петь птички и порхать бабочки. Хотя, может, это просто так кажется...',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Сырники со сметаной',
      picture: '/img/breakfast/breakfast6.jpg',
      price: 270,
      time: 5,
      category_id: 4,
      ingredients: 'Яйцо куриное, ванилин, сахар, сливочный сыр, сметана, мука, масло растительное, молоко, соль, творог, масло сливочное',
      description: 'Хит завтраков- сырники. Мы тщательно отбираем нежный творог и свежие яйца, чтобы вкус сырников был именно таким, как вы ждёте.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Скрэмбл с креветками',
      picture: '/img/breakfast/breakfast7.jpg',
      price: 350,
      time: 5,
      category_id: 4,
      ingredients: 'Яйцо куриное, авокадо, микс салатов, креветки, сливочный сыр, Чиабатта, пармезан, томаты черри, масло сливочное',
      description: 'Скрэмбл-текстурный и нескучный вариант яичницы.Добавляем упругие креветки, свежий салат с сочными черри- получается щедрая порция пользы и удовольствия. И ломтик чиабатты, чтобы похрустеть.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Скрэмбл с лососем',
      picture: '/img/breakfast/breakfast8.jpg',
      price: 420,
      time: 5,
      category_id: 4,
      ingredients: 'Яйцо куриное, авокадо, микс салатов, сливочный сыр, лосось, Чиабатта, пармезан, масло сливочное',
      description: 'Белковый, богатый полезными жирами, сытный- если кто-то скажет скучно, мы скажем: вы просто не умеете их готовить. И наш скрэмбл с лососем- яркое тому подтверждение. Всё, что вы уже прочитали про него, плюс насыщенный и небанальный вкус.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Dishes', null, {});
  },
};