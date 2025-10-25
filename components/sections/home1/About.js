"use client";
import Link from "next/link"
import Image from "next/image";
export default function About() {
    return (
        <>
            <section className="about-one about_spacing" id="welcome-to-dubai-hills-estate" dir="rtl">
                {/* <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div> */}
                <div className="container banner_container_main_except component_container">
                    <div className="row">

                           <div className="col-xl-12 wow animated fadeInLeft" data-wow-delay="0.1s">
                            <div className="about-one__content">
                                <div>
                                    <p className="small_heading">
                                        <span>ارتقِ بأسلوب حياتك</span>
                                    </p>
                                </div>
                                <div className="sec-title">
                                    <h2 className="welcome_emaar_styling"><span className="welcome_emaar_styling_span">مرحباً بكم في دبي هيلز استيت</span></h2>
                                </div>

                                {/* <div className="text-box">
                                    <h3 className="about_subheading">"Our goal is to build sustainable, livable, and dynamic urban spaces for generations to come."</h3>
                                </div> */}

                                <div className="text-box">
<p className="about_paragraph">
    <span className="about_paragraph_span">يقع دبي هيلز استيت من إعمار في قلب دبي، ويُعدّ مجمّعاً فاخراً يجسّد مفهوماً راقياً للحياة العصرية المتكاملة. يضمّ مجموعة مميزة من الفلل والشقق الفاخرة، مقدّماً فرصة استثمارية استثنائية في واحد من أكثر أسواق العقار ازدهاراً في المنطقة. يتميّز هذا المجتمع بتصميمه المتقن وتوازنه المثالي بين الحداثة والطبيعة، ليمنح سكانه أسلوب حياة راقٍ ينبض بالراحة والرفاهية.</span>
</p><br/>
<p className="about_paragraph">
    <span className="about_paragraph_span">كما يُعدّ دبي هيلز استيت محوراً رئيسياً للمشاريع العقارية المستقبلية في دبي، ما يجعله وجهة مفضّلة للمستثمرين الطامحين إلى اقتناص الفرص في مشاريع تُعيد رسم ملامح أفق المدينة المتطوّر. وبفضل إطلالاته البانورامية على معالم بارزة مثل برج خليفة، يرسّخ هذا المجمّع مكانته كرمز للرؤية الطموحة لدبي في بناء مجتمعات عقارية عالمية المستوى.</span>
</p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInRight" data-wow-delay="0.1s">
                            <div className="about-one__img about_i">
                                <div className="inner">
                                    <Image
  src="/assets/img/about/about_us.jpg"
  alt="About Us"
  width={600} 
  height={350}
  style={{objectFit: "cover"}}
/>

                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
                
            </section>
        </>
    )
}
