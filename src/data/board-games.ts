const boardGames = [
  {
    img: 'https://cf.geekdo-images.com/MjeJZfulbsM1DSV3DrGJYA__imagepage/img/0ksox22FKLq-Z-rsbBlF2IDG9x0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5100691.jpg',
    title: 'Cascadia',
    cols: 2,
    rows: 2,
  },
  {
    img: 'https://cf.geekdo-images.com/N8bL53-pRU7zaXDTrEaYrw__imagepage/img/qdivOjtkEd8Jma35bdI3mOwaoZg=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2691976.png',
    title: 'Exploding kittens',
  },
  {
    img: 'https://cf.geekdo-images.com/_k736Etdsm6zTTOnF3RXYw__imagepage/img/Tc0lrdzE2r0a_RFASxBw_i1gaKg=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5410171.jpg',
    title: 'Café',
  },
  {
    img: 'https://cf.geekdo-images.com/Q7gnq4qbG73YRprMOicBEQ__imagepage/img/ROCtXeIxJAq2riUeSHpC6WfPltU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4261952.png',
    title: 'Cubirds',
  },
  {
    img: 'https://cf.geekdo-images.com/0K1AOciqlMVUWFPLTJSiww__imagepage/img/pC5hC440R46jn4EpfdYV5rL4VOc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic66668.jpg',
    title: 'Ticket to ride europe',
  },
  {
    img: 'https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__imagepage/img/M_3Vg1j2HlNgkv7PL2xl2BJE2bw=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2419375.jpg',
    title: 'Catan',
  },
  {
    img: 'https://cf.geekdo-images.com/elmZegVZ6gp4_5izUgxGQQ__imagepage/img/rC8YvN1x0vj-3ot8WK9YDzDxORU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1632539.jpg',
    title: 'Stone age',
  },
  {
    img: 'https://cf.geekdo-images.com/rwOMxx4q5yuElIvo-1-OFw__imagepage/img/qXhBOrqJMEeA0pe6TMzWNZUTlbk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1904079.jpg',
    title: 'Splendor',
  },
  {
    img: 'https://cf.geekdo-images.com/t8bTlZmxz6PiskMSjcBHcw__imagepage/img/9UZRCElqqy34hB72SA4kB6EIgbQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4815033.jpg',
    title: 'Calico',
  },
  {
    img: 'https://cf.geekdo-images.com/6GqH14TJJhza86BX5HCLEQ__imagepage/img/eImUMUWzDaUiHkUBzOL9EFdQY10=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5674958.jpg',
    title: 'Lost ruins arnak',
    cols: 2,
    rows: 1,
  },
  {
    img: 'https://cf.geekdo-images.com/98LnQShydr11OBKS46xY-Q__imagepage/img/zMKI-BwvaWQiVVwg91Pb5P56uN8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5687013.jpg',
    title: 'The crew',
  },
  {
    img: 'https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__imagepage/img/uIjeoKgHMcRtzRSR4MoUYl3nXxs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4458123.jpg',
    title: 'Wingspan',
    cols: 2,
    rows: 1,
  },
  {
    img: 'https://cf.geekdo-images.com/JUAUWaVUzeBgzirhZNmHHw__imagepage/img/ZF-dta5ffawuKAkAt2LB-QTIv5M=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4254509.jpg',
    title: 'Root',
    cols: 3,
    rows: 1,
  },
  {
    img: 'https://cf.geekdo-images.com/wluXjLsnVPwmSLgth-rk2A__imagepage/img/spenRDS08sQQDQKFOw3Wa6vJIQ8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4936953.jpg',
    title: 'Porto',
  },
  {
    img: 'https://cf.geekdo-images.com/2f9uTicUSXkdPp2Yks6zFw__imagepage/img/BeU9AH0pcKCbXi7ViuC87zS1WfI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5885689.jpg',
    title: 'Sushi go party',
  },
  {
    img: 'https://cf.geekdo-images.com/okM0dq_bEXnbyQTOvHfwRA__imagepage/img/axGbn7f0x6UUb07DmzX9hg5TwIo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6544250.png',
    title: 'Carcassonne',
  },
  {
    img: 'https://cf.geekdo-images.com/Q2u-Nk68Wb1iLjxh_dfsIg__imagepage/img/_kMN1ENZOJYdiL8dVS_ZpdmVl9w=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3476592.jpg',
    title: 'Codenames pictures',
  },
  {
    img: 'https://cf.geekdo-images.com/qKcKjHpzAvLddwBhyindag__imagepage/img/owlHk1F1GA9lm2yNCC0wvPLoFFA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4268499.jpg',
    title: 'Just one',
  },
  {
    img: 'https://cf.geekdo-images.com/85t1wkwgvh3d2mmjsRcDrw__imagepage/img/c8OMb2vjHqVu0oiPjpuQIaTDiKk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6039256.jpg',
    title: 'Paleo',
    cols: 2,
    rows: 1,
  },
  {
    img: 'https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__imagepage/img/BjM3LyahJ4IQ2ov5MkzkHatbmUc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5666597.jpg',
    title: 'Dune imperium',
    cols: 3,
    rows: 2,
  },
  {
    img: 'https://cf.geekdo-images.com/Zwx2ZXS6r6PaxhkaVEe75Q__imagepage/img/lMCi5k5uFhKaxckP0v0lNPUVLi0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4309147.jpg',
    title: 'Project L',
  },
  {
    img: 'https://cf.geekdo-images.com/J0PlHArkZDJ57H-brXW2Fw__imagepage/img/j3bmkyVXJ2tOOXQzARtHqT__vzY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6738336.jpg',
    title: 'Dixit',
  },
  {
    img: 'https://cf.geekdo-images.com/uvz-5V6A2R6dp2oWIXmj_g__imagepage/img/DZl5Nd3-LjtQ9iLJRG-hiQtzBaI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1912529.jpg',
    title: 'Takenoko',
  },
  {
    img: 'https://cf.geekdo-images.com/m_RzXpHURC0_xLkvRSR_sw__imagepage/img/oSNvtltDuWj3LP74IEFj8Ov2B0k=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3043734.jpg',
    title: 'King of tokyo',
  },
  {
    img: 'https://cf.geekdo-images.com/_-eHW9MfHjAClQpKkX1kMw__imagepage/img/lZTdvQ0taDH-UvrDqpYZPTMyEN8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6097313.png',
    title: 'Throw throw burrito',
  },
  {
    img: 'https://cf.geekdo-images.com/KuiDNcMdWaeDe5_-rISFRQ__imagepage/img/GZIcftEHC6m8rmTLN7yMEA2zZKY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6222695.jpg',
    title: 'Brazil imperial',
    cols: 2,
    rows: 2,
  },
  {
    img: 'https://cf.geekdo-images.com/HSywVkDj7IXUFOsoZCNUtg__imagepage/img/p7BIUxyaZyItSMzFsFlxcGwBoDI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5425721.jpg',
    title: 'Rossio',
  },
  {
    img: 'https://cf.geekdo-images.com/pR7dcr6bs5TIOHOhKIoe_A__imagepage/img/4x33PQekKSWMzaJKaII4AkZ11AU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4946885.jpg',
    title: 'Pictures',
  },
  {
    img: 'https://cf.geekdo-images.com/39fOjf88wN-R7h_qe5yt_Q__imagepage/img/T_eqeTXdduSctVEJGTJXLnoKXpY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4936961.jpg',
    title: 'Carrossel',
  },
  {
    img: 'https://cf.geekdo-images.com/faJfKYz6tG8JvDYqYHBjHg__imagepage/img/XQW3-5CMAS6YuiVUC1Cb24ue-Zc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5322689.jpg',
    title: 'Dungeon mayhem',
  },
];

export default boardGames;
