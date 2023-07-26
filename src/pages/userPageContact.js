import React, {useState} from 'react'

import "../assets/css/Contact.css"
import VCard from 'vcard-creator'



const UserPageContact = (data) => {
    const props = data.data;

    const [activeNav, setActiveNav] = useState("1");
    const handleNavBtnClick = (key) => {
        setActiveNav(key);
    };


    const card = new VCard();
    const vcf = () => {
        const lastname = props.name;
        const firstname = props.name2;
        const additional = '';
        const prefix = '';
        const suffix = '';
        card.addName(lastname, firstname, additional, prefix, suffix)
            .addPhoto("data:image/jpeg;base64,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AUAAAAAAAAAACwUAAAAAACgABAALBQLBQJYALKAAAcIAAFAsoAAAsoAAAAAsoBUoAAAAoAAAALBQAAAKAAAApFgBQAAAAAFAAAAAAAAAAAACgAAAAAAKAAAJYACgACygEAoAAAcIAAoABUoAAsoAAAAAsoAsFAAABQAAAAALKAALKAAAALBQAAAAAAAUAAAAAAFikAAAAKAAAAJYUACwUAACUQCgAABQRYUAAAHCAAsoAAsFABQAAAAAUAAFSgAAoAAAAAABUoBQAAAAALKAAAAAAALKAAAAAAAWWAAAFAAAAABLBQALKAAARQAAAAsFlhUoAABwgALKAAAVKAUAAAAAFAAABQALKAAAAAAALBbKAAAAAAAVKAAAAAAAVKAAAAAALAWAAFSgAAAAEWFAABQAAAAAAAAUEBQAAcIACygAAAFBQAAAACgAAACwUCgAAAAAAABbBQAAAAAALBQAAAAAALBQAAAAAAWAAABQAAAACkAAAsFAAKQAAACygEAsFAspwQALKAAAALKVKAAAALKAAAAAVKUAAAAAAACygFSgAAAAAAFSgAAAAAACygAAAAAChAAALKAAACgEAAABUoAAAAABQAJYAVKLKcEACygAAACygFAAAAsoAAAAAsGQAAAAAAAFABYKAAAAAAACgAAAAAAAoAAABSUAEogAAKAABZQBLAAABZQAAAABQAASwAWUA4QAFlAAAAFlAFlAAAFlAAAAAFlFgoAAAAAAKAABZQAAAAAABZQAAAAAABYKAABYKAACAAAWCgAAqUSwAAFAAAAAAKlAAAICgA4QAKAAAABZQACpQACgAAAAAWUAqUAAAAAWUAAFICpQAAAAAACpQAAAAAACpQAACpQACLAAACgAAWCggAFAAAACWUAAoAAJQAA4QAKAAAABZQABYKACgAAAAAWUAsoAAAAAWUAAAqUlAAAAAAABYKAAAAAAoAAAAAoAEogAFAAAACpSAAoAAAAJQAAWCgFIsAAOEACgAAAAWUAAAqUAoAAAAAKABYKAAAACgAAAWCgAAAAAAAAqUAAAAAoAAAAAFlAAIBZQAAAAACywAWUAAAFIAAACpQCywAA4QAKAAAABZQAAACgoAAAAAKAACpQAAACgAAAAqUAAAAAAWCgAAAAAAWUAAAAAAqUAgFgoAAAABRLAACpQABZRLAAABZQAAAD/xAArEAAB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CAAAAAAAAAAEAAAAJAAAEBCAAAAAAAAIEDAAAAAAAICMAAAAAAAEAAAAAAAEAAAAAAAECEACAAAAAACABAAAAAAAAAAAIAAAAAAAAIEAAAAAAAACMAAAAAAACIAAEAAAAAAABADBCBDCBAAAAAAABAAEBHAAAAEAAAAAAAAAAABABAAAAAAAAACACAAAAAGAAAEAAAAAAAAAAJAAAAAACMAAEAAAEAAAAAAAAIAAAEBAAAAIAAAAAAABAAAJACAAAAAAAEAAAAAAAGAAAAAIAAAAAAAAAACAAACIBCBDDKBABCADAAAAAEAAAAEGAAAEAAAAAAAAAAABJIAAAAAABIAAAEAAGAAAAAAADACAAAAAAABAAHIMAAAAAAAAAAMEIAAAAABAAAABAJAABAAAAAAAIAAAAFAAAAAACAAAAAADAAAAAAAGAAAAAAAAAABNGAECAAAAAAAIAAAAAAIDAAACAAAAAAACACAAAAAABAAAEADAACABAAAAAABACAAAAAGAAAAEAAAADEAAAAABAAAAAAAAAAAAAAIAEBAAAAAAIAAECEAACAAAAAAAAIBAAEACAAAAAAAABAAAAGAAAAAAAAAEAAAAAAAAAAAAAGIABAAAAAECAAECIAAAFAAAAAJAAAAAAKAAAACCCAIOAAAAAEAAAIOAAAAAAAAAACIAAAAAAAAAEAAAACAAAAAAAAABAAAAMAAAEAAAAAECAIAAAAAAAABEEACAIAAAAAAAAEABIAAAAAAAAAIAAAAAAAAAAIAABAGAAAAAAAAEAAAAABJAAIAAAAABAEAAAFAAAAAAIBAAACAACAAAAAACBAAAAAAAAAEAAAAAAAAAHBBAAAABIBAAAAAAKAAAAAAIAAAAAAAAAABAAFECAAAAACAAABABAAAAAAEAAAAAAAAAAAABAECAAADMACAAEAIAJCADCAAAAAAAAAEAACAAAAAACAAAAAAAAAACAIAAAAICAAAAAAIAAEAAACAAAAAAAAEADGIDOAABIAIAAFBANIBAAAAAAAABAAAAAAAAKBAAAAAAIAAKAAAAAAFAAAAAACAAAAIAAAAAAAAAEABEFACIAAAAAAAAAAFCAKAECAAAAAAACAAAAAAAKAAAIAIAACAKAAAAAAGAACAABAAAAAADIAAAAAAAAKAAMBABBAAAADAAAAIAAKAAAKCAAAAAAAAAAAAAKAAAACEAABAKAAAAAAIAAAAACAAAAAAAIBAAAAAAGAAAECFBAMABACAAEADOIECAAEEAAAAAAIAAAAAAIAAAABABAAIIAAAAAEAAAAIAAAAAAAFAAAAAAAAGAAAAABAEJEAFACCACCAAAABAAAIAAAAAAAAAACAAAAAAAFAACAECAAAAACAAAAAAAAAAAAIAAAAAAAGAAAAAAACAAAADFAAAEAAAAAAAAAACAIAAACAAAAAAAAAAEEAAEAABAAAAAIAAAAAMAAAAAEAAAAAAAAAAAAAAAAEAAAACAAAAAAAAAAAAAAABAAAABAAAAACAAAAAAAAAAIEACCAABAAAAAFABAAAAKAAAAAACIAAAAAAAAAIAAACFDCEAAAAAABIAAAAIAECFAAAAAECACAAAGAAAACJIAAAAAAAAAAAAAAAFAAAAAAACIAAAAAAAAAACCEAAAAAACCAAACAAAAAEAAECAAAAAABAAAAAAIAAAKACAIACAAAAAIAAEAAAAAAAAAAAEAAAAAAAAACIAAAAAAAABAICBAAAAAAAIAAAAAAAABACAAAFAEAAAAAAAECIAAAABAAAAIAIAAAAAAIAAJAAAAAAAEAABAAAAAAAAIAABIAAAAAAACAAAAAAAAABAEAACAIAFAAAAABBAAAAEAAAAADIAAAAAEAAAACAAAABAAAAAAAAAAAAAFAAAAAAAAAAABAAAAAAAIAAAABAAABACAAAAABAIAAAAAAAAAAECAAAAAAAAAAAAAAAAAAIBEAAAAABEAAAAAACAAAAAAAAAAAAEAAAAAEAAIACIAAAAAEAACAAKAAAAAKABAAABAAAAAAIAACAAAAAAAAAAAAEAAAAAAAEAAAAEAAAAFAAAAAAEAAAAEANAAAAAAAAABAAAAAAAAAAAAAAEAAAAAAECBAAAAAAAAAAAAAAIAAAAAAEBAABAAAAAADAAIAAAAAAAABBAAAAAAAAAAAAAAAAAFAAAEAAKAAAAAAABCAAAAAAACAAAAAAACAAAAAAJAAACAAAAAJAAAAAADAAAABAEAAAAACAAAEEAAAAAEAAAAJAIAAAAAAAFBAAAAAAABAAAAAAABAAAAAAADAAEAAAAACAAABAAMAAAACAKJACAAKAAAAIAAAAAAAAAAAHAAAAAAAACACAAAAAAAAAAAAAAAIAAAAABICAAIAAAAA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")
            .addAddress('IT park', "", "Maxtumquli 1A", "Toshkent", "Uzbekistan")
            .addCompany(`${props.companyName}`)
            .addEmail('xibroxim11@gmail.com')
            .addJobtitle(`${props.jobName}`)
            .addPhoneNumber(998993045475, 'WORK')
            .addSocial(`${props.instagram}`, 'instagram', 'khasanov_ibroxim');

        return card.toString()
    }
    const handleDownload = () => {
        const vCardData = vcf();
        const blob = new Blob([vCardData], {type: "text/vcard"});
        const url = URL.createObjectURL(blob);
        console.log(url)
        const link = document.createElement("a");
        link.href = url;
        link.download = "ibroxim.vcf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // URLni tozalash
        URL.revokeObjectURL(url);

        setTimeout(() => {
            window.location.reload(true)

        }, 2000)
    };
    const contactContent = (
        <>
            <div className="contact-info-item">
                <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.98 7.023v-4a1 1 0 1 1 2 0v2.611C17.61 5 21.681.908 22.273.316a1 1 0 1 1 1.414 1.414c-.592.592-4.642 4.665-5.268 5.293h2.561a1 1 0 1 1 0 2h-4a2 2 0 0 1-2-2Zm8.095 9.739a3.1 3.1 0 0 1 0 4.378l-.912 1.05c-8.19 7.838-28.119-12.084-20.4-20.3l1.15-1A3.081 3.081 0 0 1 7.24.929c.031.03 1.883 2.438 1.883 2.438a3.109 3.109 0 0 1-.006 4.282L7.96 9.105a12.783 12.783 0 0 0 6.931 6.945l1.465-1.165a3.1 3.1 0 0 1 4.28-.006s2.41 1.853 2.44 1.883ZM21.7 18.216s-2.393-1.842-2.424-1.872a1.1 1.1 0 0 0-1.549 0c-.027.026-2.044 1.634-2.044 1.634a1 1 0 0 1-.979.152A15.008 15.008 0 0 1 5.88 9.319a1 1 0 0 1 .145-1s1.608-2.014 1.635-2.04a1.1 1.1 0 0 0 0-1.549c-.03-.03-1.872-2.425-1.872-2.425a1.1 1.1 0 0 0-1.51.039l-1.15 1c-5.642 6.783 11.63 23.097 17.573 17.483l.912-1.051a1.12 1.12 0 0 0 .088-1.56Z"
                        fill="var(--incoming-call-icon-color, currentColor)"
                    ></path>
                </svg>
                <div className="item-text">
                    <span className="info-label">Mobile Phone</span>
                    <a href={`tel: ${props.tel}`}>
                        <span>{props.tel}</span>
                    </a>
                </div>
            </div>
            <div className="contact-info-item">
                <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#id1)">
                        <path
                            d="M19 1H5a5 5 0 0 0-5 5v12a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5ZM5 3h14a3 3 0 0 1 2.78 1.89l-7.66 7.66a3 3 0 0 1-4.24 0L2.22 4.89A3 3 0 0 1 5 3Zm14 18H5a3 3 0 0 1-3-3V7.5l6.46 6.46a5 5 0 0 0 7.08 0L22 7.5V18a3 3 0 0 1-3 3Z"
                            fill="var(--envelope-icon-color, currentColor)"
                        ></path>
                    </g>
                    <defs>
                        <clipPath id="id1">
                            <path fill="#fff" d="M0 0h24v24H0z"></path>
                        </clipPath>
                    </defs>
                </svg>
                <div className="item-text">
                    <span className="info-label">Email</span>
                    <a>
                        <span>{props.email}</span>
                    </a>
                </div>
            </div>
            <div className="contact-info-item">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g
                        clip-path="url(#id2)"
                        fill="var(--map-marker-icon-color, currentColor)"
                    >
                        <path d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"></path>
                        <path d="M12 24a5.27 5.27 0 0 1-4.31-2.2c-3.812-5.257-5.745-9.209-5.745-11.747a10.055 10.055 0 0 1 20.11 0c0 2.538-1.933 6.49-5.744 11.747a5.271 5.271 0 0 1-4.31 2.2Zm0-21.819a7.883 7.883 0 0 0-7.874 7.874c0 2.01 1.893 5.727 5.33 10.466a3.145 3.145 0 0 0 5.09 0c3.435-4.739 5.328-8.456 5.328-10.466A7.883 7.883 0 0 0 12 2.181Z"></path>
                    </g>
                    <defs>
                        <clipPath id="id2">
                            <path fill="#fff" d="M0 0h24v24H0z"></path>
                        </clipPath>
                    </defs>
                </svg>
                <div className="item-text">
                    <span className="info-label">Location</span>
                    <a>
                        <span>Tashkent Uzbekistan</span>
                    </a>
                </div>
            </div>
        </>
    );
    const companyContent = (
        <>
            <div className="contact-info-item">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#id3)">
                        <path
                            d="M7 14a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm4-1h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-5 4H5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm5 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2ZM6 5H5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm5 0h-1a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2ZM6 9H5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm5 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm13 1v9a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5h3a5.006 5.006 0 0 1 5 5ZM5 22h9V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3Zm17-12a3 3 0 0 0-3-3h-3v15h3a3 3 0 0 0 3-3v-9Zm-3 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
                            fill="var(--building-icon-color, currentColor)"
                        ></path>
                    </g>
                    <defs>
                        <clipPath id="id3">
                            <path fill="#fff" d="M0 0h24v24H0z"></path>
                        </clipPath>
                    </defs>
                </svg>
                <div className="item-text">
                    <span className="info-label">Company</span>
                    <span>{props.companyName}</span>
                </div>
            </div>
            <div className="contact-info-item">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M19 4h-4V3a3 3 0 0 0-6 0v1H5a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5Zm-8-1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V3Zm11 16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h4.18a2.98 2.98 0 0 0 5.64 0H19a3 3 0 0 1 3 3v10Zm-12-9H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Zm-1 8H6v-6h3v6Zm11-3a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1Zm0-4a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1Zm-2 8a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1Z"
                        fill="var(--id-badge-icon-color, currentColor)"
                    ></path>
                </svg>
                <div className="item-text">
                    <span className="info-label">Profession</span>
                    <span>{props.jobName}</span>
                </div>
            </div>
        </>
    );
    const socialsContent = (
        <>
            <div className="contact-info-item">
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 3.33a16.67 16.67 0 1 0 0 33.34 16.67 16.67 0 0 0 0-33.34Z"
                        fill="#29B6F6"
                    ></path>
                    <path
                        d="m27.96 12.75-2.8 14.34s-.13.66-.94.66c-.43 0-.66-.2-.66-.2l-6.08-5.06L14.5 21l-3.82-1.01s-.68-.2-.68-.76c0-.47.7-.7.7-.7l15.99-6.34s.48-.18.84-.18c.22 0 .47.1.47.38 0 .18-.04.37-.04.37Z"
                        fill="#fff"
                    ></path>
                    <path
                        d="m19.75 24.38-2.57 2.53s-.11.09-.26.09c-.05 0-.1 0-.16-.03l.72-4.48 2.27 1.89Z"
                        fill="#B0BEC5"
                    ></path>
                    <path
                        d="M24.92 15.15a.38.38 0 0 0-.52-.07L14.5 21s1.58 4.42 1.82 5.18c.24.77.44.79.44.79l.72-4.48 7.37-6.82c.17-.12.2-.36.07-.52Z"
                        fill="#CFD8DC"
                    ></path>
                </svg>
                <div className="item-text">
                    <span className="info-label">Telegram</span>
                    <a href={props.telegram}>
            <span>
              {props.name} {props.name2}
            </span>
                    </a>
                </div>
            </div>
            <div className="contact-info-item">
                <img
                    srcset="https://img.icons8.com/?size=512&amp;id=Xy10Jcu1L2Su&amp;format=png 2x, https://img.icons8.com/?size=512&amp;id=Xy10Jcu1L2Su&amp;format=png 1x"
                    src="https://img.icons8.com/?size=512&amp;id=Xy10Jcu1L2Su&amp;format=png 2x"
                    alt="Instagram icon"
                    width="256"
                    height="256"
                    style={{ width: "32px", height: "32px" }}
                />
                <div className="item-text">
                    <span className="info-label">Instagram</span>
                    <a href={props.instagram}>
            <span>
              {props.name} {props.name2}
            </span>
                    </a>
                </div>
            </div>
            <div className="contact-info-item">
                <img
                    srcset="https://img.icons8.com/?size=512&amp;id=xuvGCOXi8Wyg&amp;format=png 2x, https://img.icons8.com/?size=512&amp;id=xuvGCOXi8Wyg&amp;format=png 1x"
                    src="https://img.icons8.com/?size=512&amp;id=xuvGCOXi8Wyg&amp;format=png 2x"
                    alt="LinkedIn icon"
                    width="256"
                    height="256"
                    style={{ width: "32px", height: "32px" }}
                ></img>
                <div className="item-text">
                    <span className="info-label">LinkedIn</span>
                    <a href={props.linkedin}>
            <span>
              {props.name} {props.name2}
            </span>
                    </a>
                </div>
            </div>
        </>
    );

    return (
        <div className="contact">
            <div key={props.id} className="contact-box">
                <div className="container">
                    <div className="contact-top">
                        <div className="contact-header">
                            <img className="contact-img" src={props.avatar} />
                            <div className="contact-name">{`${props.name} ${props.name2}`}</div>
                        </div>
                        <div className="button-box">
                            <button className="contact-button" onClick={handleDownload}>
                <span className="contact-icon">
                  <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 4c.6 0 1 .4 1 1v14a1 1 0 1 1-2 0V5c0-.6.4-1 1-1Z"
                        fill="var(--plus-icon-color, currentColor)"
                    ></path>
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4 12c0-.6.4-1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
                        fill="var(--plus-icon-color, currentColor)"
                    ></path>
                  </svg>
                </span>
                                <span>Add to contacts</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="contact-navbar">
                    <div
                        key="1"
                        onClick={() => handleNavBtnClick("1")}
                        className={`${activeNav === "1" ? "active-nav" : ""} navbar-button`}
                    >
                        <span>Contact</span>
                    </div>
                    <div
                        key="1"
                        onClick={() => handleNavBtnClick("2")}
                        className={`${activeNav === "2" ? "active-nav" : ""} navbar-button`}
                    >
                        <span>Company</span>
                    </div>
                    <div
                        key="1"
                        onClick={() => handleNavBtnClick("3")}
                        className={`${activeNav === "3" ? "active-nav" : ""} navbar-button`}
                    >
                        <span>Socials</span>
                    </div>
                </div>
                <div className="container">
                    <div className="contact-info">
                        {activeNav === "1" && contactContent}
                        {activeNav === "2" && companyContent}
                        {activeNav === "3" && socialsContent}
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default UserPageContact
