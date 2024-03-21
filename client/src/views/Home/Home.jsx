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
      text: "Збір коштів на сучасний засіб з тепловізором для моніторингу та розвідки військових з висоти пташиного польоту. Підтримайте наших військових.",
      link: "https://send.monobank.ua/jar/3iDPWEskZm",
    },
    {
      photoUrl: "./img/content/currentFee/plasticStretchers.png",
      title: "Пластикові ноші",
      text: "Збір коштів для швидкого та безпечного транспортування поранених військових до передових пунктів медичної допомоги. Ваша пожертва рятуює життя наших захисників.",
      link: "https://send.monobank.ua/jar/3iDPWEskZm",
    },
    {
      photoUrl: "./img/content/currentFee/car.png",
      title: "Б/у машини",
      text: "Підтримайте наш збір коштів на придбання б/у машин на передову. Ваш внесок допоможе забезпечити військових транспортом для різноманітних потреб, включаючи транспортування поранених, вантажу, патрулювання, технічної підтримки та евакуаціїї. ",
      link: "https://send.monobank.ua/jar/3iDPWEskZm",
    },
    {
      photoUrl: "./img/content/currentFee/nets.png",
      title: "Маскувальні сітки",
      text: "Збір коштів на ефективне маскування озброєння та техніки на передовій. Ваша пожертва допоможе забезпечити нашим військовим засобами для безпеки на полі бою.",
      link: "https://send.monobank.ua/jar/3iDPWEskZm",
    },
    {
      photoUrl: "./img/content/currentFee/atv.png",
      title: "Квадроцикл",
      text: "Мобільний транспорт, що допоможе військовим швидко пересуватися, евакуювати поранених та перевозити вантажі. Ваша підтримка допоможе виконувати бойові завдання та забезпечити безпеку країни.",
      link: "https://send.monobank.ua/jar/3iDPWEskZm",
    },
  ]

  const teamPositionItems = [
    {
      photoUrl: "./img/content/ourTeam/Vitaly.jpg",
      title: "Віталій Нечипорчук",
      position: "Засновник",
      text: "Засновник компанії BUDAIR активно підтримує військових, надаючи медикаменти та автомобілі з початку вторгнення. Також допомагає дітям військових, забезпечуючи підтримку на всіх етапах їхнього зростання, включаючи регулярні відвідини передової лінії фронту для особистої доставки необхідного.",
    },
    {
      photoUrl: "./img/content/ourTeam/Morika.jpg",
      title: "Данайканич-Рябченко Моріка",
      position: "Засновник",
      text: "З початку вторгнення Моріка активно допомагає військовим у захисті Києва, забезпечуючи їх різноманітними ресурсами, включаючи будівельні матеріали, рації, коптери, амуніцію та інше. Її батько залишається в зоні бойових дій, відданий обороні України.",
    },
    {
      photoUrl: "./img/content/ourTeam/Anastasia.jpg",
      title: "Анастасія Коротка",
      position: "Директор",
      text: "На початку вторгнення будинок батьків Анастасії згорів та багато її друзів вирушили захищати Україну. Перед вступом у роботу у фонді, вона вже допомагала військовим, забезпечуючи їх різними ресурсами. Також активно приєднувалася до благодійних заходів, показуючи велике бажання допомагати.",
    },
  ]

  const volunteerPositionItems = [
    {
      photoUrl: "./img/content/volunteer/yaroslav.png",
      title: "Ярослав",
      text: "Волонтер",
    },
    {
      photoUrl: "./img/content/volunteer/alexandra.png",
      title: "Олександра",
      text: "Фандрайзер",
    },
    {
      photoUrl: "./img/content/volunteer/viktor.png",
      title: "Віктор",
      text: "Водій",
    },
    {
      photoUrl: "./img/content/volunteer/german.png",
      title: "Герман",
      text: "Волонтер",
    },
  ]

  const currentReportItems = [
    {
      positionNumber: 1,
      date: "22.01.24",
      title: "Передача Mavic 3T",
      text: "Зібравши кошти у кількості 210 000 гри ми передали тепловізійний дрон Mavic 3T  для 135 ОБ ТРО, що знаходиться на першій лінії оборони в Донецькій області. Цей апарат є важливим засобом для здійснення аеріального нагляду та моніторингу ситуації на передовій. Він був отриманий відповідно до умов та вимог й тепер знаходиться в експлуатації нашого підрозділу.",
      photoUrl: "./img/content/currentReport/mavicDrone.jpg",
    },

    {
      positionNumber: 2,
      date: "18.01.24",
      title: "Передача пластикових нош",
      text: "Успішно була передана перша партія нош для 135-го окремого батальйону територіальної оборони. Ці ноші є важливими засобами для транспортування поранених та забезпечення медичної допомоги на передовій. Вони були передані згідно з усіма вимогами та процедурами й зараз знаходяться в розпорядженні 135-го ОБ ТРО.",
      photoUrl: "./img/content/currentReport/plasticStretchers.jpg",
    },
    {
      positionNumber: 3,
      title: "Привітання дітей військових з Новим Роком",
      date: "28.12.23",
      text: "Наш фонд вирішив зробити святковий сюрприз для дітей військових, які святкували новорічні свята без свого батька. Ми були впевнені, що це призведе до щасливих посмішок на їхніх обличчях та зробить ці свята для них незабутніми. Цей проект був результатом титанічної праці нашої команди й щирої підтримки волонтерів та спонсорів.",
      photoUrl: "./img/content/currentReport/militaryChildren.jpg",
    },
    {
      positionNumber: 4,
      title: "Поїздка в Кліщіївку",
      date: "25.12.23",
      text: "Ми передали військовим необхідне знаряддя: хімічні грілки для утеплення одягу та льодоступи, оскільки земля змерзає, забезпечуючи безпечне пересування. Також вони отримали протигази для захисту від хімічної загрози ворога. Діти з Ірпінської школи виразили свою підтримку, передавши військовим кілька кілограмів мандаринів. До того ж, ми передали сушарки для взуття, щоб військові могли швидко висушити взуття та зберегти комфорт під час служби.",
      photoUrl: "./img/content/currentReport/tripKlishchiivka.jpg",
    },

    {
      positionNumber: 5,
      date: "15.03.23",
      title: "Поїздка в Бахмут",
      text: "Успішна передача 135-му окремому батальйону територіальної оборони (135 ОБ ТРО) чотирьох навігаторів, трьох камер нічного бачення та 5 комплектів акумуляторів. Ці засоби навігації та спостереження є невід'ємною частиною нашої підтримки та допомагають військовим ефективно керувати ситуацією на передовій.",
      photoUrl: "./img/content/currentReport/tripBackhmut.jpg",
    },
    {
      positionNumber: 6,
      date: "20.03.23",
      title: "Допомога від Ірпінського ліцею №2 ",
      text: "Щира подяка учням та вчителям Ірпінського Ліцею №2 Ірпінської міської ради Бучанського району Київської області за сердечну та неоціненну допомогу, яку вони надали нашим військовим. Наразі, коли наші бійці стоять на передовій, ваша підтримка набуває особливого значення.",
      photoUrl: "./img/content/currentReport/helpLyceum.jpg",
    },
  ]

  const requestItems = [
    {
      photoUrl: "./img/footerHeader/logo.jpg",
      title: "Допомога для військових",
      text: "Якщо Ви отримали поранення та потребуєте допомоги, будь ласка, заповніть форму та очікуйте нашого зворотного зв'язку.",
      link: "https://3vm4ue3e.forms.app/untitled-form-4",
    },
    {
      photoUrl: "./img/footerHeader/logo.jpg",
      title: "Допомога для дітей",
      text: "Якщо Вам потрібна допомога для вашої дитини, будь ласка, заповніть форму та очікуйте нашого відгуку.",
      link: "https://3vm4ue3e.forms.app/untitled-form",
    },
    {
      photoUrl: "./img/footerHeader/logo.jpg",
      title: "Допомога для військових",
      text: "Якщо Ви - військовослужбовець й вам потрібна допомога, будь ласка, заповніть форму та очікуйте нашого зворотного зв'язку.",
      link: "https://3vm4ue3e.forms.app/untitled-form-2-1",
    },
    {
      photoUrl: "./img/footerHeader/logo.jpg",
      title: "Допомога для дружин",
      text: "Якщо Ви - дружина військового й вам потрібна допомога, будь ласка, заповніть форму та очікуйте нашого відповіді.",
      link: "https://3vm4ue3e.forms.app/untitled-form-2",
    },
  ]

  const transferredThingsItems = [
    { name: "Грілок для тіла", quantity: 3, unit: "тис. шт." },
    { name: "Мандаринів", quantity: 7, unit: "кг." },
    { name: "Пластикових нош", quantity: 20, unit: "шт." },
    { name: "Подарунки дітям", quantity: 28, unit: "шт." },
    { name: "Противогазів", quantity: 53, unit: "шт." },
    { name: "Навігаторів", quantity: 4, unit: "шт." },
    { name: "Камер ніч. бачення", quantity: 28, unit: "шт." },
    { name: "Банок тушкованої", quantity: 300, unit: "шт." },
    { name: "Павербенків", quantity: 20, unit: "шт." },
    { name: "Планшетів", quantity: 10, unit: "шт." },
  ]

  const donationDetailsItems = [
    {
      description: "Гривня 🇺🇦",
      account: "UA833052990000026002020128082",
      recipientCode: 45258405,
      paymentPurpose: "Благодійний внесок",
      companyName: 'БО БФ "НА ВАРТІ ЖИТТЯ"',
      bankName: 'АТ КБ "ПриватБанк"',
    },
    {
      description: "Євро 🇪🇺",
      account: "UA223052990000026005040126016",
      paymentPurpose: "Charitable contribution",
      companyName: 'BF "Na Varty Zhyttya"',
      bankName:
        'JSC CB "PRIVATBANK" 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE',
    },
    {
      description: "Долар США 🇺🇸",
      account: "UA223052990000026002020124718",
      paymentPurpose: "Charitable contribution",
      companyName: 'BF "Na Varty Zhyttya"',
      bankName:
        'JSC CB "PRIVATBANK" 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE',
    },
  ]

  const galleryItems = [
    { photoUrl: "./img/content/gallery/galleryFirst.png" },
    { photoUrl: "./img/content/gallery/gallerySecond.png" },
    { photoUrl: "./img/content/gallery/galleryThird.png" },
    { photoUrl: "./img/content/gallery/galleryFourth.png" },
    { photoUrl: "./img/content/gallery/galleryFifth.jpg" },
    { photoUrl: "./img/content/gallery/gallerySixth.jpg" },
  ]

  const questionItems = [
    {
      question: "Як подати заявку?",
      answer: `Щоб отримати допомогу, слід заповнити одну із форм в розділі "Зробити запит". Вона обов’язково має містити заповнені поля корректно, а в коментарях може бути прописана інформація про вид допомоги або вашу ситуацію.`,
    },
    {
      question: "Коли отримаю відповідь на запит?",
      answer:
        "Час обробки може коливатися від 2  робочих днів до тижня. Це залежить від ряду важливих факторів, таких як статус закупівель та поставок, обсяг благодійних внесків, кількість отриманих запитів до фонду, а також наявність всіх необхідних деталей у вашому запиті. Ми завжди прагнемо надати найкращу можливу підтримку й допомогу. Дякуємо вам за ваше терпіння та розуміння.",
    },
    {
      question: "Наша компанія хоче бути партнером фонду, куди звернутись?",
      answer:
        "Дякуємо за ваш інтерес до партнерства з нашою компанією та бажання бути партнером фонду.  Наша команда з нетерпінням чекає на ваші запити та готова обговорити можливості співпраці. Щоб дізнатися більше про можливості партнерства та подати заявку, будь ласка, звертайтеся до нас за наступними контактними даними: bfnavartyzyttya@gmail.com  або ж за номером телефону +380673890823.",
    },
    {
      question: "Як задонатити?",
      answer: `Щоб зробити донат, будь ласка, перейдіть на вверх сторінки та скористайтесь кнопкою "Зробити донат". Ви також можете перейти на частину сторінки з нашими активними зборами  або на розділ реквізитів й скористатись вказаною платіжною інформацією.`,
    },
    {
      question: "Як стати волонтером?",
      answer: `Щоб дізнатися більше про можливості волонтерства та подати заявку, будь ласка, звертайтеся до нас за наступними контактними даними: електронна пошта bfnavartyzyttya@gmail.com  або ж за номером телефону +380673890823.`,
    },
  ]

  const partnerItems = [
    { photoUrl: "./img/content/partner/budair.jpg" },
    { photoUrl: "./img/content/partner/mixxen.png" },
    { photoUrl: "./img/content/partner/perla.png" },
    { photoUrl: "./img/footerHeader/logo.jpg" },
    { photoUrl: "./img/footerHeader/logo.jpg" },
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
      <Gallery galleryItems={galleryItems} />
      <Question questionItems={questionItems} />
      <Partners partnerItems={partnerItems} />
    </div>
  )
}

export default Home
