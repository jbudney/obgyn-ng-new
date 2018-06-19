import { Injectable } from '@angular/core';
 
@Injectable()
export class ProductsService {

  constructor() {}
  
    getProducts():string[]{
        return ['Obstetrics','Gynecologic Surgery', 'Annual Exams', 'Infertility', 'Prenatal Care','Urinary Dysfunction','Menopausal Medicine', 'Ultrasound', 'Bone Density','Minimally Invasive Surgery','Endometriosis','Robotic Surgery','Hormone Replacement Therapy','MonaLisa Touch','Urodynamics Testing','Pelvic Floor Muscle Training' ];   
    }
    getHTML():string[]{
        return ['<obstetrics></obstetrics>','<obstetrics></obstetrics>', '<obstetrics></obstetrics>'];   
    }
  
  products = ['Obstetrics','Gynecologic Surgery', 'Annual Exams'];
    
  productsData(){
          return 'A new member of your family is always an exciting event, and a healthy outcome starts with the care that you can find with the doctors of Boca Raton Ob/Gyn Specialists. <br><br>We offer comprehensive obstetric services, including complicated obstetrics. <br><br>Our physicians do all the deliveries for our practice. <br><br> We believe that each woman is an individual and will respond to pregnancy, labor and delivery uniquely. <br><br>Accordingly, we do not have pre-defined labor protocols.  <br><br>We believe that you are an active partner in your medical care. We will discuss available options together and encourage you to be an active participant in the decision-making process. Our goal is to have a healthy baby and a healthy you.'; 
    }    
  obstetricsData(){
          return 'A new member of your family is always an exciting event, and a healthy outcome starts with the care that you can find with the doctors of Boca Raton Ob/Gyn Specialists. <br><br>We offer comprehensive obstetric services, including complicated obstetrics. <br><br>Our physicians do all the deliveries for our practice. <br><br>We believe that each woman is an individual and will respond to pregnancy, labor and delivery uniquely. Accordingly, we do not have pre-defined labor protocols.  <br><br>We believe that you are an active partner in your medical care. We will discuss available options together and encourage you to be an active participant in the decision-making process. Our goal is to have a healthy baby and a healthy you.'; 
    }
  gynecologicData(){
          return 'From the latest state-of-the-art techniques to the simplest of procedures, we\'re dedicated to offering you the best in gynecological care. <br><br>It is this philosophy that allows us to offer minimally-invasive alternatives to major surgeries.<br>Some surgeries that once required lengthy hospital stays can now be performed comfortably and confidentially on an outpatient basis allowing you can return to work and your daily routine within a short time.  <br><br>Our physicians have years of experience and are trained in the latest minimally invasive surgical procedures including laparospcopic and laser surgery of endometriosis treatment of irregular menstruation by the latest outpatient methods called endometrial ablation via the HTA-Hydrothermablation, Novasure, and Therm-achoice techniques, to the Essure sterilization, and Myosure fibroid and polyp procedures that requires no abdominal scars.  <br><br>From my first visit, I was aware of what a wonderful practice you have. <br><br>What impressed me the most was that I was seen first in an office, wearing my clothes. I loved the cloth gowns that allow you to preserve your dignity rather than the cheap paper that sticks to your body that most practices have. It was a pleasure to be treated with kindness and respect.';
  }
  annualExamsData(){
          return 'A woman\'s exam often creates anxiety. That\'s why at Boca Raton Ob/Gyn Specialists before your initial exam even begins, we will speak with you in our consultation office. <br><br>We will take the time to listen to your concerns and answer your questions. <br><br>An annual exam is an integral part of preventive healthcare. We believe that health maintenance and preventive care is an important part of your overall health; from contraception to hormone changes to cancer detection and prevention.  <br><br>Tests can be done to find the cause of the problem. Based on the results of these tests, treatment may be offered through our office or by referral to a subsequent center.' ; 
    }
  infertilityData(){
          return 'About 10% of couples in the United States are infertile. Many factors are involved in diagnosing and treating infertility. <br><br>The physicians at Boca Raton Ob/Gyn Specialists can provide an individualized infertility examination that will often be covered by most insurance plans rather than spending thousands of dollars at an infertility clinic.' ; 
    }
  roboticsurgeryData(){
          return `Dr. Douglas with over twenty-five years of experience as a surgeon, utilizes the da Vinci robotic instrumentation to perform laparoscopically complicated hysterectomies, myomectomies, ovarian cyst and tumor removals, and resection of endometriosis and treatment for infertility. <br><br>This cutting edge minimally invasive surgical approach allows for same day or next day home discharge and an earlier recovery to a normal lifestyle.`;
  }
  ultrasoundData(){
           return `Boca Raton Ob/Gyn Specialists provides the latest in technology in the convenience of our office. No unnecessary trips to the hospital or lab to have ultrasounds, bone densities or blood testing. <br><br>
Often we can provide you with immediate results. We also offer you the opportunity to view your unborn baby by using our latest ultrasound technology and provide a DVD video of the experience as well as printed pictures plus a CD of photos to save and email loved ones.`;
  }
     prenatalcareData(){
           return 'A new member of your family is always an exciting event, and a healthy outcome starts with the care that you can find with the doctors of Boca Raton Ob/Gyn Specialists. <br><br>We offer comprehensive obstetric services, including complicated obstetrics. Our physicians do all the deliveries for our practice. <br><br>We believe that each woman is an individual and will respond to pregnancy, labor and delivery uniquely. Accordingly, we do not have pre-defined labor protocols.  <br><br>We believe that you are an active partner in your medical care. We will discuss available options together and encourage you to be an active participant in the decision-making process. Our goal is to have a healthy baby and a healthy you.';
 }
    urinarydysfunctionData(){
        return`Boca Raton Ob/Gyn Specialists provide evaluation 
        and treatment for overactive bladder, urinary incontinence, and pelvic 
        relaxation or prolapse.  <br><br>The evaluation may include urodynamics testing in the Boca Raton office for 
        assessment of voiding and bladder function and disorders.Treatment options involve medical or surgical modalities, as well as in office 
        pessary fitting and maintenance cleanings.`;
 }
    menopausalmedicineData(){
          return `As you approach your 50s, the depletion of female hormones and organ changes can manifest themselves in physical and emotional symptoms that may include hot flashes, anxiety, and depression. 
<br><br>Menopause is a natural stage in a woman's life. But even a natural stage can be fraught with discomfort and confusion. 
That's why we will be with you every step of the way with emotional and medical support. <br><br>We will sit down and explain your hormonal shifts to make sure you understand the changes going on within your body. The onset of menopause is often the time to think about preventing osteoporosis, heart disease, breast cancer, and other disorders. 
<br><br>The doctors of Boca Raton Ob/Gyn Specialists can help you with prevention, detection, and treatment.`;}

    endometriosisData(){
          return ``;}
    
    hormonereplacementtherapyData(){
          return `H `;}
    
    monalisatouchData(){
          return `HALO Breast Pap Smear `;
}

    bonedensityData(){
          return `Boca Raton Ob/Gyn Specialists provides the latest in technology in the convenience of our office. <br><br>No unnecessary trips to the hospital or lab to have ultrasounds, bone densities or blood testing. 
Often we can provide you with immediate results. <br><br>We also offer you the opportunity to view your unborn baby by using our latest ultrasound technology and provide a DVD video of the experience as well as printed pictures plus a CD of photos to save and email loved ones.`;}

    minimallyinvasivesurgeryData(){
          return `From the latest state-of-the-art techniques to the simplest of procedures, we're dedicated to offering you the best in gynecological care. <br><br>It is this philosophy that allows us to offer minimally-invasive alternatives to major surgeries.
<br><br>Some surgeries that once required lengthy hospital stays can now be performed comfortably and confidentially on an outpatient basis allowing you can return to work and your daily routine within a short time.
  <br><br>Our physicians have years of experience and are trained in the latest minimally invasive surgical procedures including laparospcopic and laser surgery of endometriosis treatment of irregular menstruation by the latest outpatient methods called endometrial ablation via the HTA-Hydrothermablation, Novasure, and Therm-achoice techniques, to the Essure sterilization, and Myosure fibroid and polyp procedures that requires no abdominal scars.`;}
}
