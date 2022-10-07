const fakeAPI = [
   {
      id: '13',
      song_name: 'Có chơi có chịu ',
      artists_names: 'Karik - OnlyC',
      lyric: ' ',
      source:
         'https://stream.nixcdn.com/NhacCuaTui2028/CoChoiCoChiu-KarikOnlyC-7976227.mp3?st=RbP_VQMjl-Wx68RfwWj5SQ&e=1665210725&t=1665124325223',
      thumbnail:
         'https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2022/10/3/photo-1-16647835833721006462978.jpg',
   },
   {
      id: '0',
      song_name: 'Waiting For You',
      artists_names: 'MONO',
      lyric: '',
      source:
         'https://stream.nixcdn.com/NhacCuaTui2026/WaitingForYou-MONOOnionn-7733882.mp3?st=7Cuw9LxxzhWkChCdl0RAVg&e=1664543470&t=1664457071316',
      thumbnail:
         'https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/e/6/2/8e62fe317658a5c4fc4db6f2f5c75a62.jpg',
   },
   {
      id: '1',
      song_name: 'Tòng Phu',
      artists_names: 'Keyo',
      lyric: '',
      source:
         'https://aredir.nixcdn.com/NhacCuaTui2027/TongPhu-KeyoVietNam-7802406.mp3?st=8TOYISQcAE8yN-5D6BUvYQ&e=1664543519&t=1664457120124',
      thumbnail:
         'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/f/9/b/df9b187a2b0e565ebe5b6bd60bdef622.jpg',
   },
   {
      id: '2',
      song_name: 'Hãy trao cho anh',
      artists_names: 'Sơn Tùng MTP',
      lyric: ' ',
      source:
         'https://stream.nixcdn.com/NhacCuaTui985/HayTraoChoAnh-SonTungMTPSnoopDogg-6010660.mp3?st=z5QeshGiWbJPL0YtPRC9Jw&e=1664366478&t=1664280078267',
      thumbnail: 'https://i.ytimg.com/vi/knW7-x7Y7RE/maxresdefault.jpg',
   },
   {
      id: '3',
      song_name: 'Chạy ngay đi',
      artists_names: 'Sơn Tùng MTP',
      lyric: ' ',
      source:
         'https://stream.nixcdn.com/NhacCuaTui964/ChayNgayDi-SonTungMTP-5468704.mp3?st=wxDvLfNrrRoJ890j8jgtew&e=1664366703&t=1664280303703',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/vi/thumb/8/85/Chay_ngay_di.png/220px-Chay_ngay_di.png',
   },
   {
      id: '4',
      song_name: 'Bên trên tầng lầu',
      artists_names: 'Tăng Duy Tân',
      lyric: ' ',
      source:
         'https://stream.nixcdn.com/NhacCuaTui2022/BenTrenTangLau-TangDuyTan-7412012.mp3?st=XrwYWrHakGL_GS6M7Bxo7g&e=1664366877&t=1664280496526',
      thumbnail: 'https://i.ytimg.com/vi/LaxkmhiECfM/maxresdefault.jpg',
   },
   {
      id: '5',
      song_name: 'Dạ Vũ',
      artists_names: 'Tăng Duy Tân',
      lyric: ' ',
      source:
         'https://stream.nixcdn.com/Warner_Audio72/DaVu-TangDuyTan-7068051.mp3?st=l_m5NUH54AOr2Y7dWouqFg&e=1664367003&t=1664280603634',
      thumbnail: 'https://i.ytimg.com/vi/1So7VBehCQg/maxresdefault.jpg',
   },
   {
      id: '6',
      song_name: 'Em của ngày hôm qua',
      artists_names: 'Sơn Tùng MTP',
      lyric: 'https://static-zmp3.zmdcdn.me/lyrics/2/d/5/6/2d56089f263ed082e281c23928ca3e38.lrc',
      source:
         'https://stream.nixcdn.com/NhacCuaTui926/EmCuaNgayHomQua-SonTungMTP-2882720.mp3?st=n637tYrhi2Q1fnmXQnG9wA&e=1664367439&t=1664281040085',
      thumbnail: 'https://znews-photo.zingcdn.me/w660/Uploaded/qfssu/2021_03_06/1.jpg',
   },
   {
      id: '7',
      song_name: 'Tòng Phu',
      artists_names: 'Nguyễn ĐÌnh Vũ - Út Nhị',
      lyric: ' ',
      source:
         'https://stream.nixcdn.com/NhacCuaTui2028/TongPhuCover-UtNhiNguyenDinhVu-7858432.mp3?st=EGNZsu8xIkBdrC9KsAfubA&e=1664367253&t=1664280853998',
      thumbnail: 'https://i.ytimg.com/vi/L2Ir7tDK3Mg/maxresdefault.jpg',
   },
   {
      id: '8',
      song_name: 'Lời xin lỗi vụng về',
      artists_names: 'Quân AP',
      lyric: ' ',
      source:
         'https://stream.nixcdn.com/NhacCuaTui1011/LoiXinLoiVungVe-QuanAP-6943959.mp3?st=rSB6eGmy1PtOCL5aMFXPUA&e=1664450990&t=1664364590613',
      thumbnail: 'https://i.scdn.co/image/ab67616d0000b273d889b959d36fd957b05c5799',
   },
   {
      id: '9',
      song_name: 'Mộng tàn hoa',
      artists_names: 'Thiên Tú',
      lyric: ' ',
      source:
         'https://stream.nixcdn.com/NhacCuaTui2022/MongTanHoa-ThienTu-7053775.mp3?st=4y2da2QXBNwJrXN3HpE5YQ&e=1664451404&t=1664365004539',
      thumbnail: 'https://dj24h.com/wp-content/uploads/2022/06/mong-tan-hoa-orinn-remix-thien-tu.jpg',
   },
   {
      id: '10',
      song_name: 'Ngây thơ',
      artists_names: 'Tăng Duy Tân, Phong Max',
      lyric: ' ',
      source:
         'https://stream.nixcdn.com/NhacCuaTui1003/NgayTho-TangDuyTanPhongMax-6590759.mp3?st=6ca16cpywL5thc44o4DT6w&e=1664541533&t=1664455134339',
      thumbnail: 'https://avatar-ex-swe.nixcdn.com/mv/2020/09/04/7/2/2/c/1599201055428_640.jpg',
   },
   {
      id: '11',
      song_name: 'Em Iu (Cukak Remix) - Andree ',
      artists_names: 'Wxrdie, Bình Gold, V.A',
      lyric: ' ',
      source:
         'https://stream.nixcdn.com/NhacCuaTui2023/EmIuCukakRemix-AndreeWxrdieBinhGold2Pillz-7591494.mp3?st=CW44gKtcKN88sZg8m2_6wA&e=1664541317&t=1664454917997',
      thumbnail: 'https://images.genius.com/eddcb9b1c7dc36833434127f7ba313ce.1000x1000x1.jpg',
   },
   {
      id: '12',
      song_name: 'Em hát ai nghe (2Ao Remix) ',
      artists_names: 'Orange',
      lyric: ' ',
      source:
         'https://stream.nixcdn.com/NhacCuaTui2026/EmHatAiNghe2AoRemix-Orange-7663237.mp3?st=SkROgTbEofIYjVoYWN4N2w&e=1664541766&t=1664455367262',
      thumbnail: 'https://data.chiasenhac.com/data/cover/146/145004.jpg',
   },
];

export default fakeAPI;
