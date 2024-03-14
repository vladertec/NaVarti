import DonationDetails from "../../components/DonationDetails/DonationDetails"
import MainTitle from "../../components/MainTitle/MainTitle"
import TransferredThings from "../../components/TransferredThings/TransferredThings"
import Question from "../../components/Question/Question"
import Line from "../../components/Line/Line"
import Gallery from "../../components/Gallery/Gallery"
import OurTeam from "../../components/OurTeam/OurTeam"
import MakeRequest from "../../components/MakeRequest/MakeRequest"
import CurrentReport from "../../components/CurrentReport/CurrentReport"
import CurrentFee from "../../components/CurrentFee/CurrentFee"
import Partners from "../../components/Partners/Partners"
import Volunteers from "../../components/Volunteers/Volunteers"

const Home = () => {
  const currentFeeItems = [
    {
      photoUrl: "./img/content/currentFee/drone.png",
      title: "DJI Mavic 3T ",
      text: "Цей сучасний засіб оснащений тепловізором, дозволить військовим здійснювати моніторинг, розвідку та реагувати на небезпеку з висоти пташиного польоту. Допоможіть нам зібрати необхідні кошти для придбання цього важливого обладнання та підтримки наших військових. Будь-яка ваша пожертва буде великим внеском у підтримку наших захисників. Приєднуйтесь до нашої ініціативи та допоможіть нам забезпечити наших військових необхідним обладнанням!",
      link: "https://3vm4ue3e.forms.app/untitled-form",
    },
    {
      photoUrl: "./img/content/currentFee/plasticStretchers.png",
      title: "Пластикові ноші",
      text: "Підтримайте нашу кампанію збору коштів на пластикові ноші, щоб допомогти нашим військовим отримати необхідну медичну допомогу якнайшвидше та ефективно.  За допомогою нош можна швидше та безпечніше переносити поранених на передові пункти медичної допомоги.  Ваша пожертва може зробити різницю між життям і смертю для наших захисників.  Приєднуйтесь до нас сьогодні, щоб разом дати нашим воїнам кращі шанси на виживання якомога швидше",
      link: "https://3vm4ue3e.forms.app/untitled-form",
    },
    {
      photoUrl: "./img/logo.jpg",
      title: "Б/у машини",
      text: "Підтримайте наш збір коштів на придбання бу машин на передову. Ваш внесок допоможе забезпечити військових транспортом для різноманітних потреб, включаючи транспортування поранених, вантажу, патрулювання, технічної підтримки та евакуаціїї.  Кожен автомобіль стане необхідним засобом транспортування, допомагаючи військовим ефективно виконувати завдання та зберігати безпеку нашої країни.      ",
      link: "https://3vm4ue3e.forms.app/untitled-form",
    },
    {
      photoUrl: "./img/content/currentFee/nets.png",
      title: "Маскувальні сітки",
      text: "Збір коштів на маскувальні сітки для 135 ОБ ТРО. Ці сітки допоможуть ефективно маскувати озброєння, техніку та інженерні споруди на передовій, забезпечуючи захист від різних методів розвідки противника. Ваша пожертва допоможе забезпечити наших військових необхідними засобами для безпеки та ефективності на полі бою.",
      link: "https://3vm4ue3e.forms.app/untitled-form",
    },
    {
      photoUrl: "./img/content/currentFee/atv.png",
      title: "Квадроцикл",
      text: "Ці мобільні транспортні засоби допоможуть військовим швидко пересуватися на передовій, евакуювати поранених, перевозити необхідні вантажі та підвозити боєприпаси на позиції. За допомогою квадроциклів, наші військові зможуть більш ефективно виконувати свої бойові завдання та забезпечувати безпеку нашої країни. Ваша пожертва допоможе нам забезпечити їх необхідним обладнанням для успішного виконання місії.      ",
      link: "https://3vm4ue3e.forms.app/untitled-form",
    },
  ]

  const teamPositionItems = [
    {
      photoUrl: "./img/content/ourTeam/Vitaly.jpg",
      title: "Віталій Нечипорчук",
      position: "Засновник",
      text: "Засновник компанії BUD AIR виявляє важливу підтримку військовим, надаючи медикаменти та забезпечуючи автомобілями від початку повномаcштабного вторгнення. Додатково, він взяв на себе активну роль у допомозі дітям військовослужбовців, забезпечуючи підтримку на всіх етапах дорослішання. Регулярно вирушає на передову лінію фронту, щоб особисто передати військовим все необхідне.       ",
    },
    {
      photoUrl: "./img/content/ourTeam/Morika.jpg",
      title: "Данайканич-Рябченко Моріка",
      position: "Засновник",
      text: "З самого початку повносмаштабного вторгнення, Моріка відзначається активною участю у підтримці військових під час оборони Києва, забезпечуючи їх будівельними матеріалами, раціями, коптерами, амуніцією, їжею, а також іншими необхідними ресурсами. На сьогоднішній день батько Моріки залишається в зоні бойових дій, відданий обороні України.",
    },
    {
      photoUrl: "./img/content/ourTeam/Anastasia.jpg",
      title: "Коротка Анастасія",
      position: "Директор",
      text: "На початку повномасштабного вторгнення будинок батьків Анастасії згорів, і багато її друзів вирушили захищати Україну. Перед тим, як розпочати роботу у фонді, Анастасія вже брала участь у допомозі військовим, допомагаючи закупити одяг, електроніку та спеціальне обладнання. Також вона активно приєднувалася до благодійних акцій та заходів, проявляючи велике прагнення допомагати тим, хто цього потребує.",
    },
  ]

  const volunteerPositionItems = [
    {
      photoUrl: "./img/content/volunteer/Alexandra.jpg",
      title: "Олександра",
      text: "Фандрайзер",
    },
    {
      photoUrl: "./img/content/volunteer/Viktor.jpg",
      title: "Віктор",
      text: "Водій",
    },
    {
      photoUrl: "./img/logo.jpg",
      title: "Олександра",
      text: "Фандрайзер",
    },
    {
      photoUrl: "./img/logo.jpg",
      title: "Віктор",
      text: "Водій",
    },
  ]

  const currentReportItems = [
    {
      positionNumber: 1,
      title: "Поїздка в Кліщіївку",
      date: "25.12.23",
      text: "Ми передали військовим необхідне знаряддя: хімічні грілки для утеплення одягу та льодоступи, оскільки земля змерзає, забезпечуючи безпечне пересування. Також вони отримали протигази для захисту від хімічної загрози ворога. Діти з Ірпінської школи виразили свою підтримку, передавши військовим кілька кілограмів мандаринів. До того ж, ми передали сушарки для взуття, щоб військові могли швидко висушити взуття та зберегти комфорт під час служби.      ",
      photoUrl: "./img/content/currentReport/tripKlishchiivka.jpg",
    },
    {
      positionNumber: 2,
      title: "Привітання дітей військових з Новим Роком",
      date: "28.12.23",
      text: "Наш фонд вирішив зробити святковий сюрприз для дітей військових, які святкували новорічні свята без свого батька. Ми були впевнені, що це призведе до щасливих посмішок на їхніх обличчях та зробить ці свята для них незабутніми.",
      photoUrl: "./img/content/currentReport/militaryChildren.jpg",
    },
    {
      positionNumber: 3,
      date: "18.01.24",
      title: "Передача пластикових нош",
      text: "Успішно була передана перша партія нош для 135-го окремого батальйону територіальної оборони. Ці ноші є важливими засобами для транспортування поранених та забезпечення медичної допомоги на передовій. Вони були передані згідно з усіма вимогами та процедурами, і зараз знаходяться в розпорядженні 135-го ОБ ТРО.",
      photoUrl: "./img/content/currentReport/plasticStretchers.jpg",
    },
    {
      positionNumber: 4,
      date: "22.01.24",
      title: "Передача Mavic 3T",
      text: "Зібравши кошти у кількості 210 000 гри ми передали тепловізійний дрон Mavic 3T  для 135 ОБ ТРО, що знаходиться на першій лінії оборони в Донецькій області. Цей апарат є важливим засобом для здійснення аеріального нагляду та моніторингу ситуації на передовій. Він був отриманий відповідно до умов та вимог, і тепер знаходиться в експлуатації нашого підрозділу.      ",
      photoUrl: "./img/content/currentReport/mavicDrone.jpg",
    },
    {
      positionNumber: 5,
      date: "15.03.23",
      title: "Поїздка в Бахмут",
      text: "Успішна передача 135-му окремому батальйону територіальної оборони (135 ОБ ТРО) трьох навігаторів, трьох камер нічного бачення і 5 комплектів акумуляторів. Ці засоби навігації та спостереження є невід'ємною частиною нашої підтримки та допомагають військовим ефективно керувати ситуацією на передовій.",
      photoUrl: "./img/content/currentReport/tripBackhmut.jpg",
    },
    {
      positionNumber: 6,
      date: "20.03.23",
      title: "Допомога від Ірпінського ліцею №2 ",
      text: "Щира подяка учням та освітянам Ірпінського Ліцею №2 Ірпінської міської ради Бучанського району Київської області за щиро надану допомогу нашим бійцям, у вигляді новорічних смаколиків та грілок. Допомога не може бути маленькою.",
      photoUrl: "./img/content/currentReport/helpLyceum.jpg",
    },
  ]

  const requestItems = [
    {
      photoUrl: "./img/logo.jpg",
      title: "Допомога для військових ",
      text: "Якщо ви отримали поранення та потребуєте допомоги, будь ласка, заповніть форму та очікуйте нашого зворотного зв'язку.",
      link: "https://3vm4ue3e.forms.app/untitled-form-4",
    },
    {
      photoUrl: "./img/logo.jpg",
      title: "Допомога для дружин військових",
      text: "Якщо ви - дружина військового й вам потрібна допомога, будь ласка, заповніть форму та очікуйте нашого відповіді.",
      link: "https://3vm4ue3e.forms.app/untitled-form-2",
    },
    {
      photoUrl: "./img/logo.jpg",
      title: "Допомога для дітей",
      text: "Якщо вам потрібна допомога для вашої дитини, будь ласка, заповніть форму та очікуйте нашого відгуку.      ",
      link: "https://3vm4ue3e.forms.app/untitled-form",
    },
    {
      photoUrl: "./img/logo.jpg",
      title: "Допомога для військових",
      text: "Якщо ви - військовослужбовець й вам потрібна допомога, будь ласка, заповніть форму та очікуйте нашого зворотного зв'язку.",
      link: "https://3vm4ue3e.forms.app/untitled-form-2-1",
    },
  ]

  const transferredThingsItems = [
    { name: "Грілок для тіла", quantity: 3, unit: "тис. шт." },
    { name: "Мандаринів", quantity: 7, unit: "кг." },
    { name: "Пластикових нош", quantity: 20, unit: "шт." },
    { name: "Подарунки дітям", quantity: 28, unit: "шт." },
  ]

  const donationDetailsItems = [
    {
      description: "Гривня 🇺🇦",
      account: "UA833052990000026002020128082",
      recipientCode: 45258405,
      companyName: "БО БФ НА ВАРТІ ЖИТТЯ",
      bankName: 'АТ КБ "ПриватБанк"',
    },
    {
      description: "Євро 🇪🇺",
      account: "UA223052990000026005040126016",
      companyName: "БО БФ НА ВАРТІ ЖИТТЯ",
      bankName:
        'JSC CB "PRIVATBANK" 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE',
    },
    {
      description: "Долар США 🇺🇸",
      account: "UA223052990000026002020124718",
      companyName: "БО БФ НА ВАРТІ ЖИТТЯ",
      bankName:
        'JSC CB "PRIVATBANK" 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE',
    },
  ]

  const photosItems = [
    { photoUrl: "path_to_photo_1.jpg", alt: "Опис фото 1" },
    { photoUrl: "path_to_photo_2.jpg", alt: "Опис фото 2" },
    { photoUrl: "path_to_photo_3.jpg", alt: "Опис фото 3" },
    { photoUrl: "path_to_photo_3.jpg", alt: "Опис фото 3" },
    { photoUrl: "path_to_photo_3.jpg", alt: "Опис фото 3" },
    { photoUrl: "path_to_photo_N.jpg", alt: "Опис фото N" },
  ]

  const questionItems = [
    {
      question: "Як подати заявку?",
      answer:
        "Текст текст текс текст текст текст текст текс текст текст текст текст текс текст текст текст текст текс текст текст текст ",
    },
    {
      question: "Коли отримаю відповідь на запит?",
      answer:
        "Час очікування на допомогу може варіюватися залежно від багатьох факторів...",
    },
    {
      question: "Як можна стати волонтером?",
      answer:
        "Текст текст текс текст текст текст текст текс текст текст текст текст текс текст текст текст текст текс текст текст текст ",
    },
    {
      question: "Як задонатити ?",
      answer:
        "Текст текст текс текст текст текст текст текс текст текст текст текст текс текст текст текст текст текс текст текст текст ",
    },
  ]

  const partnerItems = [
    { photoUrl: "./img/logo.jpg" },
    { photoUrl: "./img/logo.jpg" },
    { photoUrl: "./img/logo.jpg" },
    { photoUrl: "./img/logo.jpg" },
    { photoUrl: "./img/logo.jpg" },
    { photoUrl: "./img/logo.jpg" },
  ]

  return (
    <div className="home">
      <MainTitle />
      <CurrentFee currentFeeItems={currentFeeItems} current />
      <OurTeam teamPositionItems={teamPositionItems} />
      <Volunteers volunteerPositionItems={volunteerPositionItems} />
      <Line />
      <CurrentReport currentReportItems={currentReportItems} />
      <div className="home__line">
        <Line />
      </div>
      <MakeRequest requestItems={requestItems} />
      <Line />
      <TransferredThings transferredThingsItems={transferredThingsItems} />
      <div className="home__line">
        <Line />
      </div>
      <DonationDetails donationDetailsItems={donationDetailsItems} />
      <div className="home__line">
        <Line />
      </div>
      <Gallery photosItems={photosItems} />
      <Question questionItems={questionItems} />
      <Partners partnerItems={partnerItems} />
    </div>
  )
}

export default Home
