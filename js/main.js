/* ======================================================================
                            พบคนตายในหน้าที่ค่ะ
====================================================================== */
// Loop through Array of Objects
var objStudents = [
	{
    "id": 1,
    "studentId": 64070001,
    "fullname": "นายกมล เลิศธนสิน",
    "gate": "NOT"
  },
  {
    "id": 2,
    "studentId": 64070002,
    "fullname": "นายกฤษณธินันต์ ไชยบูรณพินิจ",
    "gate": "NOT"
  },
  {
    "id": 3,
    "studentId": 64070003,
    "fullname": "นายกษิดิส ฮะมงคล",
    "gate": "AND"
  },
  {
    "id": 4,
    "studentId": 64070004,
    "fullname": "นายก้องภพ อ่อนทอง",
    "gate": "OR"
  },
  {
    "id": 5,
    "studentId": 64070005,
    "fullname": "นางสาวกัลยกร ยี่นาง",
    "gate": "OR"
  },
  {
    "id": 6,
    "studentId": 64070006,
    "fullname": "นายกายกานต์ เจริญรูป",
    "gate": "AND"
  },
  {
    "id": 7,
    "studentId": 64070007,
    "fullname": "นายกิตตินันท์ เจริญทรง",
    "gate": "NOT"
  },
  {
    "id": 8,
    "studentId": 64070008,
    "fullname": "นางสาวกุลธิดา จำปา",
    "gate": "OR"
  },
  {
    "id": 9,
    "studentId": 64070009,
    "fullname": "นายเกียรติกำธร พูลผล",
    "gate": "NOT"
  },
  {
    "id": 10,
    "studentId": 64070010,
    "fullname": "นางสาวขวัญชนก ศิริตัน",
    "gate": "NOR"
  },
  {
    "id": 11,
    "studentId": 64070011,
    "fullname": "นายเขมฐิติ หวังทรัพย์ทวี",
    "gate": "OR"
  },
  {
    "id": 12,
    "studentId": 64070012,
    "fullname": "นายคณาวัชร์ ระดมกิจ",
    "gate": "OR"
  },
  {
    "id": 13,
    "studentId": 64070013,
    "fullname": "นายจิรภัทร ณ สงขลา",
    "gate": "NOT"
  },
  {
    "id": 14,
    "studentId": 64070014,
    "fullname": "นายจิรโรจน์ เลิศอัครนานนท์",
    "gate": "NOR"
  },
  {
    "id": 15,
    "studentId": 64070015,
    "fullname": "นายจิราพันธ์ ขวัญรักษ์",
    "gate": "NOR"
  },
  {
    "id": 16,
    "studentId": 64070016,
    "fullname": "นางสาวจุฑามาศ แคว้นโอฬาร",
    "gate": "OR"
  },
  {
    "id": 17,
    "studentId": 64070017,
    "fullname": "นายชญานนท์ สุภากิจ",
    "gate": "NOR"
  },
  {
    "id": 18,
    "studentId": 64070018,
    "fullname": "นางสาวชนากาญจน์ สุทธิกุล",
    "gate": "OR"
  },
  {
    "id": 19,
    "studentId": 64070019,
    "fullname": "นายชยธร ชูอ่อน",
    "gate": "NOR"
  },
  {
    "id": 20,
    "studentId": 64070020,
    "fullname": "นายชาญณรงค์ สุวรรณรัตน์",
    "gate": "NOR"
  },
  {
    "id": 21,
    "studentId": 64070021,
    "fullname": "นายชาติณโยดม วิบูลย์พานิช",
    "gate": "NOR"
  },
  {
    "id": 22,
    "studentId": 64070022,
    "fullname": "นายชุติภูมิ โลกสถาพร",
    "gate": "NOT"
  },
  {
    "id": 23,
    "studentId": 64070023,
    "fullname": "นายโชตชฎา อุปโยคิน",
    "gate": "OR"
  },
  {
    "id": 24,
    "studentId": 64070024,
    "fullname": "นายฐนกร อมตเวทย์",
    "gate": "NOT"
  },
  {
    "id": 25,
    "studentId": 64070025,
    "fullname": "นางสาวฐิติภา เอี่ยมสิริวงศ์",
    "gate": "NOT"
  },
  {
    "id": 26,
    "studentId": 64070026,
    "fullname": "นางสาวณนท ติขิณานนท์",
    "gate": "NOR"
  },
  {
    "id": 27,
    "studentId": 64070027,
    "fullname": "นายณัชนนท์ เรืองศรีนราพร",
    "gate": "OR"
  },
  {
    "id": 28,
    "studentId": 64070028,
    "fullname": "นายณัชพล ตั้งสาธิตพร",
    "gate": "AND"
  },
  {
    "id": 29,
    "studentId": 64070029,
    "fullname": "นายณัฐดนัย ปลื้มใจ",
    "gate": "NOT"
  },
  {
    "id": 30,
    "studentId": 64070030,
    "fullname": "นางสาวณัฐพร เกษมสุข",
    "gate": "OR"
  },
  {
    "id": 31,
    "studentId": 64070031,
    "fullname": "นายณัฐพล มิ่งแก้ว",
    "gate": "AND"
  },
  {
    "id": 32,
    "studentId": 64070032,
    "fullname": "นายณัฐภัทร บำรุงชู",
    "gate": "NOR"
  },
  {
    "id": 33,
    "studentId": 64070033,
    "fullname": "นางสาวณัฐรดา ธัญญานิตย์",
    "gate": "NOR"
  },
  {
    "id": 34,
    "studentId": 64070034,
    "fullname": "นายณัฐวัฒน์ จารุสิทธิ์รัตติ",
    "gate": "NOR"
  },
  {
    "id": 35,
    "studentId": 64070035,
    "fullname": "นายณัฐวุฒิ อุ่นวิเศษ",
    "gate": "AND"
  },
  {
    "id": 36,
    "studentId": 64070036,
    "fullname": "นางสาวณุทยา นิติอภัยธรรม",
    "gate": "AND"
  },
  {
    "id": 37,
    "studentId": 64070037,
    "fullname": "นางสาวทรรศยา มาสยะ",
    "gate": "AND"
  },
  {
    "id": 38,
    "studentId": 64070038,
    "fullname": "นายทักษ์ดนัย ปทุมวัน",
    "gate": "NOR"
  },
  {
    "id": 39,
    "studentId": 64070039,
    "fullname": "นายธนกร เผ่าพนัส",
    "gate": "NOT"
  },
  {
    "id": 40,
    "studentId": 64070040,
    "fullname": "นายธนกร ศรีวรรณวิทย์",
    "gate": "OR"
  },
  {
    "id": 41,
    "studentId": 64070041,
    "fullname": "นายธนดล สุขเจริญ",
    "gate": "AND"
  },
  {
    "id": 42,
    "studentId": 64070042,
    "fullname": "นายธนพล นิ่มนวล",
    "gate": "AND"
  },
  {
    "id": 43,
    "studentId": 64070043,
    "fullname": "นายธนพัฒน์ สุพัฒนานนท์",
    "gate": "NOR"
  },
  {
    "id": 44,
    "studentId": 64070044,
    "fullname": "นายธนวัฒน์ ศรีโท",
    "gate": "NOR"
  },
  {
    "id": 45,
    "studentId": 64070045,
    "fullname": "นายธนาธิป สิงหานนท์",
    "gate": "NOT"
  },
  {
    "id": 46,
    "studentId": 64070046,
    "fullname": "นายธรรมปพน ประทุม",
    "gate": "AND"
  },
  {
    "id": 47,
    "studentId": 64070047,
    "fullname": "นายธวิชญ์ จาวิสูตร",
    "gate": "NOR"
  },
  {
    "id": 48,
    "studentId": 64070048,
    "fullname": "นายธาม ถาวรกิจ",
    "gate": "OR"
  },
  {
    "id": 49,
    "studentId": 64070049,
    "fullname": "นายธีปพล สุทธิพันธ์",
    "gate": "NOR"
  },
  {
    "id": 50,
    "studentId": 64070050,
    "fullname": "นายนนทิวัฒน์ เพ็งพันธ์",
    "gate": "AND"
  },
  {
    "id": 51,
    "studentId": 64070051,
    "fullname": "นายนภัส จึงสมาน",
    "gate": "NOT"
  },
  {
    "id": 52,
    "studentId": 64070052,
    "fullname": "นางสาวนภัสรพี ธีร์ธวัชธนกร",
    "gate": "NOR"
  },
  {
    "id": 53,
    "studentId": 64070053,
    "fullname": "นางสาวนภัสสร คงงาม",
    "gate": "AND"
  },
  {
    "id": 54,
    "studentId": 64070054,
    "fullname": "นายนรภัทร ศรีมูลน้อย",
    "gate": "NOR"
  },
  {
    "id": 55,
    "studentId": 64070055,
    "fullname": "นายนวพันธ์ น้อยจินดา",
    "gate": "AND"
  },
  {
    "id": 56,
    "studentId": 64070056,
    "fullname": "นายนัธพัฒน์ หมีนพราน",
    "gate": "NOR"
  },
  {
    "id": 57,
    "studentId": 64070057,
    "fullname": "นายนันทนนท์ จินขุนทอง",
    "gate": "AND"
  },
  {
    "id": 58,
    "studentId": 64070058,
    "fullname": "นายบวรพจน์ ศรีวิชัย",
    "gate": "NOT"
  },
  {
    "id": 59,
    "studentId": 64070059,
    "fullname": "นายบุรินทร์ นฤนาทวานิช",
    "gate": "NOT"
  },
  {
    "id": 60,
    "studentId": 64070060,
    "fullname": "นายเบิกฤกษฺ์ อินฉาย",
    "gate": "NOR"
  },
  {
    "id": 61,
    "studentId": 64070061,
    "fullname": "นายปฏิภาณ เกตุผดุง",
    "gate": "NOT"
  },
  {
    "id": 62,
    "studentId": 64070062,
    "fullname": "นายปณต กุศลสัตย์",
    "gate": "AND"
  },
  {
    "id": 63,
    "studentId": 64070063,
    "fullname": "นายปภพพร ทองนรินทร์",
    "gate": "AND"
  },
  {
    "id": 64,
    "studentId": 64070064,
    "fullname": "นายปรินทร์ เดชากรณ์",
    "gate": "NOT"
  },
  {
    "id": 65,
    "studentId": 64070065,
    "fullname": "นางสาวปิยะภัทร์ กุลดิลกโกวิท",
    "gate": "AND"
  },
  {
    "id": 66,
    "studentId": 64070066,
    "fullname": "นายเปี่ยมเดช ยศเงินทองฟู",
    "gate": "OR"
  },
  {
    "id": 67,
    "studentId": 64070067,
    "fullname": "นายพงพันธุ์ ศักดาสาวิตร",
    "gate": "NOR"
  },
  {
    "id": 68,
    "studentId": 64070068,
    "fullname": "นายพงศ์พล พันธุ์เสน่ห์",
    "gate": "NOR"
  },
  {
    "id": 69,
    "studentId": 64070069,
    "fullname": "นายพงศ์ภัค ตั้งประกอบ",
    "gate": "NOT"
  },
  {
    "id": 70,
    "studentId": 64070070,
    "fullname": "นายพนธกร ธีรานุตร",
    "gate": "NOT"
  },
  {
    "id": 71,
    "studentId": 64070071,
    "fullname": "นายพรรษา ร่องยืด",
    "gate": "NOR"
  },
  {
    "id": 72,
    "studentId": 64070072,
    "fullname": "นายพลวิชญ์ ดวงสุข",
    "gate": "OR"
  },
  {
    "id": 73,
    "studentId": 64070073,
    "fullname": "นายพัสกร คำแก้ว",
    "gate": "NOT"
  },
  {
    "id": 74,
    "studentId": 64070074,
    "fullname": "นายพิชญุตม์ ศรีม่วง",
    "gate": "AND"
  },
  {
    "id": 75,
    "studentId": 64070075,
    "fullname": "นางสาวพีรณัฐ ทิพย์รักษ์",
    "gate": "NOT"
  },
  {
    "id": 76,
    "studentId": 64070076,
    "fullname": "นายพีรวิชญ์ กริชฉกาจ",
    "gate": "NOT"
  },
  {
    "id": 77,
    "studentId": 64070077,
    "fullname": "นายพุฒิพงศ์ บรรเริงศรี",
    "gate": "NOR"
  },
  {
    "id": 78,
    "studentId": 64070078,
    "fullname": "นายพุฒิพงศ์ พานิช",
    "gate": "AND"
  },
  {
    "id": 79,
    "studentId": 64070079,
    "fullname": "นายพุฒิพงษ์ ชอบงาม",
    "gate": "NOT"
  },
  {
    "id": 80,
    "studentId": 64070080,
    "fullname": "นางสาวเพ็ญพิชชา อยู่ประเสริฐ",
    "gate": "OR"
  },
  {
    "id": 81,
    "studentId": 64070081,
    "fullname": "นายไพรัช ชื่นชม",
    "gate": "OR"
  },
  {
    "id": 82,
    "studentId": 64070082,
    "fullname": "นายภณภัทร สมุทรผ่อง",
    "gate": "NOT"
  },
  {
    "id": 83,
    "studentId": 64070083,
    "fullname": "นายภัทรจาริน ไพทีกุล",
    "gate": "NOR"
  },
  {
    "id": 84,
    "studentId": 64070084,
    "fullname": "นางสาวภัทรานิษฐ์ สิริอุดมศักดิ์",
    "gate": "OR"
  },
  {
    "id": 85,
    "studentId": 64070085,
    "fullname": "นายภาพตะวัน ปัญญาพานิชกุล",
    "gate": "NOR"
  },
  {
    "id": 86,
    "studentId": 64070086,
    "fullname": "นายภูมิปัญญา สาธกุไร",
    "gate": "AND"
  },
  {
    "id": 87,
    "studentId": 64070087,
    "fullname": "นายภูวิศ พลาบดีวัฒน",
    "gate": "NOT"
  },
  {
    "id": 88,
    "studentId": 64070088,
    "fullname": "นายเมธิชัย มะราช",
    "gate": "NOR"
  },
  {
    "id": 89,
    "studentId": 64070089,
    "fullname": "นางสาวยลรดี ประยูรพันธุ์รัตน์",
    "gate": "NOR"
  },
  {
    "id": 90,
    "studentId": 64070090,
    "fullname": "นายยศกร ศรีอินกิจ",
    "gate": "OR"
  },
  {
    "id": 91,
    "studentId": 64070091,
    "fullname": "นายยศพนธ์ ผาประทะ",
    "gate": "AND"
  },
  {
    "id": 92,
    "studentId": 64070092,
    "fullname": "นายรวิภาส เพ็งรักษ์",
    "gate": "NOR"
  },
  {
    "id": 93,
    "studentId": 64070093,
    "fullname": "นายริมทวีป ทวีโชคเลิศชัยกุล",
    "gate": "NOT"
  },
  {
    "id": 94,
    "studentId": 64070094,
    "fullname": "นางสาวฤกษ์สุรัศมิ์ อตินันทชัย",
    "gate": "OR"
  },
  {
    "id": 95,
    "studentId": 64070095,
    "fullname": "นายฤทธิกานต์ ไชยก้านตรง",
    "gate": "AND"
  },
  {
    "id": 96,
    "studentId": 64070096,
    "fullname": "นายวชิรพล กลิ่นเกษร",
    "gate": "AND"
  },
  {
    "id": 97,
    "studentId": 64070097,
    "fullname": "นายวรดร น้อยนงเยาว์",
    "gate": "AND"
  },
  {
    "id": 98,
    "studentId": 64070098,
    "fullname": "นายวรสิทธิ์ มาฆะสิทธิ์",
    "gate": "NOT"
  },
  {
    "id": 99,
    "studentId": 64070099,
    "fullname": "นางสาววรัชนันท์ เนื่องอินทร์",
    "gate": "OR"
  },
  {
    "id": 100,
    "studentId": 64070100,
    "fullname": "นางสาววสุมดี ช่างสากล",
    "gate": "OR"
  },
  {
    "id": 101,
    "studentId": 64070101,
    "fullname": "นายวัชรวีร์ ศรีพิบูลย์",
    "gate": "NOT"
  },
  {
    "id": 102,
    "studentId": 64070102,
    "fullname": "นายวิชยุตม์ สืบวงษ์",
    "gate": "NOR"
  },
  {
    "id": 103,
    "studentId": 64070103,
    "fullname": "นายวิภูภัทร์ ชมถาวร",
    "gate": "AND"
  },
  {
    "id": 104,
    "studentId": 64070104,
    "fullname": "นายวีรพงศ์ ปานนิสัย",
    "gate": "NOR"
  },
  {
    "id": 105,
    "studentId": 64070105,
    "fullname": "นางสาวศศิกานต์ หลงกระจ่าง",
    "gate": "AND"
  },
  {
    "id": 106,
    "studentId": 64070106,
    "fullname": "นางสาวศศิธร ศรีจันทร์",
    "gate": "AND"
  },
  {
    "id": 107,
    "studentId": 64070107,
    "fullname": "นายศิวกร อัมรินทร์นุเคราะห์",
    "gate": "NOT"
  },
  {
    "id": 108,
    "studentId": 64070108,
    "fullname": "นายศุภกร เนตรสุวรรณ",
    "gate": "AND"
  },
  {
    "id": 109,
    "studentId": 64070109,
    "fullname": "นายศุภณัฐ แก้วกุลศรี",
    "gate": "OR"
  },
  {
    "id": 110,
    "studentId": 64070110,
    "fullname": "นายศุภวิชญ์ ส้มเกลี้ยง",
    "gate": "NOT"
  },
  {
    "id": 111,
    "studentId": 64070111,
    "fullname": "นายสันต์ภพ คล่องแคล่ว",
    "gate": "AND"
  },
  {
    "id": 112,
    "studentId": 64070112,
    "fullname": "นางสาวสุธีรา พิทักษ์ผลิน",
    "gate": "NOT"
  },
  {
    "id": 113,
    "studentId": 64070113,
    "fullname": "นายโหว้ย หมิง ลี",
    "gate": "OR"
  },
  {
    "id": 114,
    "studentId": 64070114,
    "fullname": "นางสาวอนัญพร จอมคำ",
    "gate": "OR"
  },
  {
    "id": 115,
    "studentId": 64070115,
    "fullname": "นายอนุวัฒน์ ประสิทธิ์",
    "gate": "NOT"
  },
  {
    "id": 116,
    "studentId": 64070116,
    "fullname": "นางสาวอริศรา จันทรมณี",
    "gate": "NOT"
  },
  {
    "id": 117,
    "studentId": 64070117,
    "fullname": "นายอัคภพ คุณกิตติ",
    "gate": "AND"
  },
  {
    "id": 118,
    "studentId": 64070118,
    "fullname": "นายเอกณัฐ หิรัญนุชนาถ",
    "gate": "OR"
  },
  {
    "id": 119,
    "studentId": 64070119,
    "fullname": "นายเอกวิทย์ ธเนศมณีกุล",
    "gate": "OR"
  },
  {
    "id": 120,
    "studentId": 64070120,
    "fullname": "นางสาวกชกร นิลกำแหง",
    "gate": "NOT"
  },
  {
    "id": 121,
    "studentId": 64070121,
    "fullname": "นางสาวกรกมล วิชชุธีระกุล",
    "gate": "NOR"
  },
  {
    "id": 122,
    "studentId": 64070122,
    "fullname": "นายกฤตธี เลาหะกุล",
    "gate": "AND"
  },
  {
    "id": 123,
    "studentId": 64070123,
    "fullname": "นายกฤตภาส ดวงครุฑ",
    "gate": "OR"
  },
  {
    "id": 124,
    "studentId": 64070124,
    "fullname": "นายกอบสุข สงวนตระกูล",
    "gate": "NOT"
  },
  {
    "id": 125,
    "studentId": 64070125,
    "fullname": "นายกัมปนาท คนคล่อง",
    "gate": "OR"
  },
  {
    "id": 126,
    "studentId": 64070126,
    "fullname": "นายกานต์ แก้วประภา",
    "gate": "NOR"
  },
  {
    "id": 127,
    "studentId": 64070127,
    "fullname": "นายเคน มูรากิ",
    "gate": "NOT"
  },
  {
    "id": 128,
    "studentId": 64070128,
    "fullname": "นายจักรา นครจันทร์",
    "gate": "OR"
  },
  {
    "id": 129,
    "studentId": 64070129,
    "fullname": "นางสาวจันทิมา เผ่าผาง",
    "gate": "OR"
  },
  {
    "id": 130,
    "studentId": 64070130,
    "fullname": "นายจิรการ ใจศิริ",
    "gate": "AND"
  },
  {
    "id": 131,
    "studentId": 64070131,
    "fullname": "นายจีรชยา เจริญผล",
    "gate": "OR"
  },
  {
    "id": 132,
    "studentId": 64070132,
    "fullname": "นายจีรวัฒน์ ไม้ไหว",
    "gate": "AND"
  },
  {
    "id": 133,
    "studentId": 64070133,
    "fullname": "นางสาวจุฑากานต์ เมฆกกตาลพีระ",
    "gate": "OR"
  },
  {
    "id": 134,
    "studentId": 64070134,
    "fullname": "นางสาวจุฬารัตน์ อภิวงค์",
    "gate": "OR"
  },
  {
    "id": 135,
    "studentId": 64070135,
    "fullname": "นายชนาธิป รอดบุญ",
    "gate": "AND"
  },
  {
    "id": 136,
    "studentId": 64070136,
    "fullname": "นายชยณัฐ ศุทธยาลัย",
    "gate": "AND"
  },
  {
    "id": 137,
    "studentId": 64070137,
    "fullname": "นายชยุตพล พุ่มทอง",
    "gate": "NOT"
  },
  {
    "id": 138,
    "studentId": 64070138,
    "fullname": "นายชยุตรัฐ ศรีอุ้มสุข",
    "gate": "NOT"
  },
  {
    "id": 139,
    "studentId": 64070139,
    "fullname": "นายชโยดม ไชยเทศ",
    "gate": "NOR"
  },
  {
    "id": 140,
    "studentId": 64070140,
    "fullname": "นายชวัลวิทย์ ควรพิพัฒน์กุล",
    "gate": "AND"
  },
  {
    "id": 141,
    "studentId": 64070141,
    "fullname": "นายชาญณรงค์ มากมณี",
    "gate": "OR"
  },
  {
    "id": 142,
    "studentId": 64070142,
    "fullname": "นายณฐยศ อรุณสุริยศักดิ์",
    "gate": "NOR"
  },
  {
    "id": 143,
    "studentId": 64070143,
    "fullname": "นายณรงค์วรรธน์ ถิระวุฒิ",
    "gate": "AND"
  },
  {
    "id": 144,
    "studentId": 64070144,
    "fullname": "นายณัฏฐพล สุขไผ่ตา",
    "gate": "AND"
  },
  {
    "id": 145,
    "studentId": 64070145,
    "fullname": "นายณัฐ ไทยวัฒนานนท์",
    "gate": "NOR"
  },
  {
    "id": 146,
    "studentId": 64070146,
    "fullname": "นายณัฐพล ดิษฐวิบูลย์",
    "gate": "NOT"
  },
  {
    "id": 147,
    "studentId": 64070147,
    "fullname": "นายณัฐพล ยุทธชนะ",
    "gate": "OR"
  },
  {
    "id": 148,
    "studentId": 64070148,
    "fullname": "นายณัฐวุฒิ สอนเขียว",
    "gate": "OR"
  },
  {
    "id": 149,
    "studentId": 64070149,
    "fullname": "นางสาวดวงกมล พบสูงเนิน",
    "gate": "NOR"
  },
  {
    "id": 150,
    "studentId": 64070150,
    "fullname": "นายตรัยธรรม แสงเดือน",
    "gate": "AND"
  },
  {
    "id": 151,
    "studentId": 64070151,
    "fullname": "นางสาวตรียา เอื้อเจริญศรี",
    "gate": "NOR"
  },
  {
    "id": 152,
    "studentId": 64070152,
    "fullname": "นายติณณภูมิ เกิดอินทร์",
    "gate": "OR"
  },
  {
    "id": 153,
    "studentId": 64070153,
    "fullname": "นางสาวทัตพร ตันนารัตน์",
    "gate": "NOT"
  },
  {
    "id": 154,
    "studentId": 64070154,
    "fullname": "นางสาวทิพย์ธิดา นามวงศ์",
    "gate": "AND"
  },
  {
    "id": 155,
    "studentId": 64070155,
    "fullname": "นายธนกฤต ฟูธนาทรัพย์",
    "gate": "OR"
  },
  {
    "id": 156,
    "studentId": 64070156,
    "fullname": "นายธนดล พันเลิศรักษ์",
    "gate": "NOR"
  },
  {
    "id": 157,
    "studentId": 64070157,
    "fullname": "นายธนเดช เจิ้ง",
    "gate": "OR"
  },
  {
    "id": 158,
    "studentId": 64070158,
    "fullname": "นายธนวรรษ นันทะกูล",
    "gate": "OR"
  },
  {
    "id": 159,
    "studentId": 64070159,
    "fullname": "นายธาดา ธีรวรกุล",
    "gate": "NOR"
  },
  {
    "id": 160,
    "studentId": 64070160,
    "fullname": "นางสาวธิติสุดา รักชาติเจริญ",
    "gate": "AND"
  },
  {
    "id": 161,
    "studentId": 64070161,
    "fullname": "นายธีรภัทร โพธิ์ศรี",
    "gate": "AND"
  },
  {
    "id": 162,
    "studentId": 64070162,
    "fullname": "นายธีรวัฒน์ ใจมิภักดิ์",
    "gate": "NOT"
  },
  {
    "id": 163,
    "studentId": 64070163,
    "fullname": "นายธีระภพ เพ็ชรนิล",
    "gate": "NOR"
  },
  {
    "id": 164,
    "studentId": 64070164,
    "fullname": "นายธีระวัฒน์ แสงจันทร์",
    "gate": "NOR"
  },
  {
    "id": 165,
    "studentId": 64070165,
    "fullname": "นายธีราทร ชิตทนนท์",
    "gate": "AND"
  },
  {
    "id": 166,
    "studentId": 64070166,
    "fullname": "นายไธพัตย์ ล้อธนวิจิตร",
    "gate": "NOT"
  },
  {
    "id": 167,
    "studentId": 64070167,
    "fullname": "นายนนทพัทธ์ จิ๋วน๊อต",
    "gate": "NOT"
  },
  {
    "id": 168,
    "studentId": 64070168,
    "fullname": "นายนนพิพัฒน์ บุญเรืองขาว",
    "gate": "NOR"
  },
  {
    "id": 169,
    "studentId": 64070169,
    "fullname": "นางสาวนภิศา พัศระ",
    "gate": "NOR"
  },
  {
    "id": 170,
    "studentId": 64070170,
    "fullname": "นางสาวนัชชา สุรพงษ์วุฒิกุล",
    "gate": "NOT"
  },
  {
    "id": 171,
    "studentId": 64070171,
    "fullname": "นางสาวนารากร คงสักบัน",
    "gate": "NOT"
  },
  {
    "id": 172,
    "studentId": 64070172,
    "fullname": "นางสาวนุ่มนวล มาไข่",
    "gate": "NOT"
  },
  {
    "id": 173,
    "studentId": 64070173,
    "fullname": "นายบวรวิช กิตติดำเกิง",
    "gate": "NOT"
  },
  {
    "id": 174,
    "studentId": 64070174,
    "fullname": "นายบัญญพงษ์ มุติวัฒนาสวัสดิ์",
    "gate": "NOT"
  },
  {
    "id": 175,
    "studentId": 64070175,
    "fullname": "นางสาวบุษบาวรรณ ประเสริฐสุข",
    "gate": "OR"
  },
  {
    "id": 176,
    "studentId": 64070176,
    "fullname": "นางสาวเบญญาภา สุบินดี",
    "gate": "NOR"
  },
  {
    "id": 177,
    "studentId": 64070177,
    "fullname": "นายปฏิภาณ พูลปั้น",
    "gate": "OR"
  },
  {
    "id": 178,
    "studentId": 64070178,
    "fullname": "นางสาวปนิดา ไพจิตรประภาภรณ์",
    "gate": "NOR"
  },
  {
    "id": 179,
    "studentId": 64070179,
    "fullname": "นางสาวประภัสสร ไชยเพ็ชร",
    "gate": "AND"
  },
  {
    "id": 180,
    "studentId": 64070180,
    "fullname": "นายปราโมทย์ จันทโสก",
    "gate": "NOR"
  },
  {
    "id": 181,
    "studentId": 64070181,
    "fullname": "นางสาวปริยกร แพงวาปี",
    "gate": "AND"
  },
  {
    "id": 182,
    "studentId": 64070182,
    "fullname": "นายปัณณทัต สมอโพรง",
    "gate": "OR"
  },
  {
    "id": 183,
    "studentId": 64070183,
    "fullname": "นางสาวปัณณพร จึงเปี่ยมสุข",
    "gate": "AND"
  },
  {
    "id": 184,
    "studentId": 64070184,
    "fullname": "นายปัณณ์ วะชังเงิน",
    "gate": "OR"
  },
  {
    "id": 185,
    "studentId": 64070185,
    "fullname": "นางสาวปัทมาภรณ์ บุญเรือง",
    "gate": "AND"
  },
  {
    "id": 186,
    "studentId": 64070186,
    "fullname": "นายปิยะ ไชยนิตย์",
    "gate": "NOT"
  },
  {
    "id": 187,
    "studentId": 64070187,
    "fullname": "นายปิยะณัฐ เฉยพ่วง",
    "gate": "OR"
  },
  {
    "id": 188,
    "studentId": 64070188,
    "fullname": "นายปุญญพันธ์ ทิพย์ชัชวาลกุล",
    "gate": "AND"
  },
  {
    "id": 189,
    "studentId": 64070189,
    "fullname": "นายปุณณวิช สิทธิเสือ",
    "gate": "NOT"
  },
  {
    "id": 190,
    "studentId": 64070190,
    "fullname": "นางสาวไปรยา เงาธัมมะสกุล",
    "gate": "NOT"
  },
  {
    "id": 191,
    "studentId": 64070191,
    "fullname": "นายพงศ์พันธุ์ แสงพล",
    "gate": "NOT"
  },
  {
    "id": 192,
    "studentId": 64070192,
    "fullname": "นายพงศภัค ปานประเสริฐ",
    "gate": "OR"
  },
  {
    "id": 193,
    "studentId": 64070193,
    "fullname": "นายพงศ์ศิริ สุวรรณศิลป์",
    "gate": "NOR"
  },
  {
    "id": 194,
    "studentId": 64070194,
    "fullname": "นางสาวพรนภัส สิงห์คำ",
    "gate": "NOR"
  },
  {
    "id": 195,
    "studentId": 64070195,
    "fullname": "นายพรพินิต หนองนา",
    "gate": "NOR"
  },
  {
    "id": 196,
    "studentId": 64070196,
    "fullname": "นางสาวพรไพลิน วงศ์ศรีตรัง",
    "gate": "AND"
  },
  {
    "id": 197,
    "studentId": 64070197,
    "fullname": "นางสาวพัณณิตา สายศร",
    "gate": "AND"
  },
  {
    "id": 198,
    "studentId": 64070198,
    "fullname": "นายพิชญะ โลหะ",
    "gate": "NOR"
  },
  {
    "id": 199,
    "studentId": 64070199,
    "fullname": "นางสาวพิริยาภรณ์ บัวกาญจน์",
    "gate": "OR"
  },
  {
    "id": 200,
    "studentId": 64070200,
    "fullname": "นายพีรัช งดงามจรัส",
    "gate": "NOR"
  },
  {
    "id": 201,
    "studentId": 64070201,
    "fullname": "นายโพธิ อริยธนะฐิติวงศ์",
    "gate": "OR"
  },
  {
    "id": 202,
    "studentId": 64070202,
    "fullname": "นางสาวภวพร เณรตาก้อง",
    "gate": "AND"
  },
  {
    "id": 203,
    "studentId": 64070203,
    "fullname": "นายภัทรชัย เทิบจันทึก",
    "gate": "NOT"
  },
  {
    "id": 204,
    "studentId": 64070204,
    "fullname": "นางสาวภัทรลดา เหมหัตถภร",
    "gate": "OR"
  },
  {
    "id": 205,
    "studentId": 64070205,
    "fullname": "นางสาวภัทรานิษฐ์ วรรณฤทธิ์",
    "gate": "NOT"
  },
  {
    "id": 206,
    "studentId": 64070206,
    "fullname": "นายภาคิณ กีรติภักดีพงศ์",
    "gate": "AND"
  },
  {
    "id": 207,
    "studentId": 64070207,
    "fullname": "นายภาคิน เค้าภูไทย",
    "gate": "OR"
  },
  {
    "id": 208,
    "studentId": 64070208,
    "fullname": "นายภูบดินทร์ แดงสำราญ",
    "gate": "NOR"
  },
  {
    "id": 209,
    "studentId": 64070209,
    "fullname": "นายภูเบศ ฝีปากเพราะ",
    "gate": "OR"
  },
  {
    "id": 210,
    "studentId": 64070210,
    "fullname": "นายภูมินทร์ ขจรศักดา",
    "gate": "NOR"
  },
  {
    "id": 211,
    "studentId": 64070211,
    "fullname": "นายภูมิพิสิฐ เหมือนดวง",
    "gate": "OR"
  },
  {
    "id": 212,
    "studentId": 64070212,
    "fullname": "นายภูริ ศิริภูล",
    "gate": "NOR"
  },
  {
    "id": 213,
    "studentId": 64070213,
    "fullname": "นายภูริวัจน์ ปิติพงศ์มนตรี",
    "gate": "OR"
  },
  {
    "id": 214,
    "studentId": 64070214,
    "fullname": "นางสาวเมธานุช บุญไทย",
    "gate": "NOT"
  },
  {
    "id": 215,
    "studentId": 64070215,
    "fullname": "นายเมธาสิทธิ์ ประทีปเมธากุล",
    "gate": "NOR"
  },
  {
    "id": 216,
    "studentId": 64070216,
    "fullname": "นายเมธิส โพธิ์กิ่ง",
    "gate": "NOT"
  },
  {
    "id": 217,
    "studentId": 64070217,
    "fullname": "นายยงศิลป์ ลิ้มวิไลกุล",
    "gate": "OR"
  },
  {
    "id": 218,
    "studentId": 64070218,
    "fullname": "นางสาวเยาวพา กาญสอาด",
    "gate": "NOR"
  },
  {
    "id": 219,
    "studentId": 64070219,
    "fullname": "นายรณชัย ศรีสังวาลย์",
    "gate": "NOR"
  },
  {
    "id": 220,
    "studentId": 64070220,
    "fullname": "นายรัชชานนท์ กาทิพย์",
    "gate": "NOT"
  },
  {
    "id": 221,
    "studentId": 64070221,
    "fullname": "นางสาวรุ้งลาวัณย์ สุรินทร์",
    "gate": "NOR"
  },
  {
    "id": 222,
    "studentId": 64070222,
    "fullname": "นายเลิศนริทธิ์ เทอดสถีรศักดิ์",
    "gate": "NOT"
  },
  {
    "id": 223,
    "studentId": 64070223,
    "fullname": "นายวงศพัทธ์ พันธุประภาส",
    "gate": "OR"
  },
  {
    "id": 224,
    "studentId": 64070224,
    "fullname": "นายวงศพัทธ์ พึ่งปัญญาเลิศ",
    "gate": "OR"
  },
  {
    "id": 225,
    "studentId": 64070225,
    "fullname": "นายวชิรวิทย์ ปรางค์นวรัตน์",
    "gate": "AND"
  },
  {
    "id": 226,
    "studentId": 64070226,
    "fullname": "นางสาววณิชาภรณ์ ชัยศุภสิน",
    "gate": "NOT"
  },
  {
    "id": 227,
    "studentId": 64070227,
    "fullname": "นายวรลภย์ ดอกคำ",
    "gate": "NOT"
  },
  {
    "id": 228,
    "studentId": 64070228,
    "fullname": "นายวรวีร์ วิลาวรรณ",
    "gate": "NOR"
  },
  {
    "id": 229,
    "studentId": 64070229,
    "fullname": "นางสาววรัญญา กันทะมา",
    "gate": "AND"
  },
  {
    "id": 230,
    "studentId": 64070230,
    "fullname": "นายวิชัย คำมงคุณ",
    "gate": "OR"
  },
  {
    "id": 231,
    "studentId": 64070231,
    "fullname": "นางสาววิรัลยุพา เพ็ชรอินทร์",
    "gate": "NOT"
  },
  {
    "id": 232,
    "studentId": 64070232,
    "fullname": "นายวิวรรธน์ เหลียงกอบกิจ",
    "gate": "NOR"
  },
  {
    "id": 233,
    "studentId": 64070233,
    "fullname": "นายวีระวิทธ์ มนต์เหลา",
    "gate": "NOR"
  },
  {
    "id": 234,
    "studentId": 64070234,
    "fullname": "นางสาวศรุตา จรูญกีรติโรจน์",
    "gate": "NOR"
  },
  {
    "id": 235,
    "studentId": 64070235,
    "fullname": "นายศิลา ชูนาม",
    "gate": "AND"
  },
  {
    "id": 236,
    "studentId": 64070236,
    "fullname": "นายศิวนาถ ธิศาเวช",
    "gate": "NOR"
  },
  {
    "id": 237,
    "studentId": 64070237,
    "fullname": "นายศิวนาถ วรศักดิ์สิริกุล",
    "gate": "NOR"
  },
  {
    "id": 238,
    "studentId": 64070238,
    "fullname": "นายศุภกร ดาราสุนทโร",
    "gate": "NOT"
  },
  {
    "id": 239,
    "studentId": 64070239,
    "fullname": "นายศุภกิตติ ทองสุข",
    "gate": "AND"
  },
  {
    "id": 240,
    "studentId": 64070240,
    "fullname": "นายศุภณัฐ อนุมาตร",
    "gate": "NOT"
  },
  {
    "id": 241,
    "studentId": 64070241,
    "fullname": "นายศุภวัฒน์ รองสูงเนิน",
    "gate": "NOR"
  },
  {
    "id": 242,
    "studentId": 64070242,
    "fullname": "นางสาวสขิล์รดา จีนแสร์",
    "gate": "AND"
  },
  {
    "id": 243,
    "studentId": 64070243,
    "fullname": "นายสหัสวรรษ บุญเผื่อน",
    "gate": "AND"
  },
  {
    "id": 244,
    "studentId": 64070244,
    "fullname": "นายสัณห์พิชญ์ พูลศิลป์",
    "gate": "NOT"
  },
  {
    "id": 245,
    "studentId": 64070245,
    "fullname": "นางสาวสิริกร ณ อุบล",
    "gate": "OR"
  },
  {
    "id": 246,
    "studentId": 64070246,
    "fullname": "นายสุกฤษฎิ์ บุญสิทธิ์",
    "gate": "OR"
  },
  {
    "id": 247,
    "studentId": 64070247,
    "fullname": "นายสุนันท์ อ่วมทรัพย์",
    "gate": "OR"
  },
  {
    "id": 248,
    "studentId": 64070248,
    "fullname": "นางสาวสุพิชฌาย์ ปัญจภาคีนุกุล",
    "gate": "AND"
  },
  {
    "id": 249,
    "studentId": 64070249,
    "fullname": "นายอนพัทย์ นันทนพิบูล",
    "gate": "OR"
  },
  {
    "id": 250,
    "studentId": 64070250,
    "fullname": "นายอภิรติ โคตธารินทร์",
    "gate": "AND"
  },
  {
    "id": 251,
    "studentId": 64070251,
    "fullname": "นายอภิวิชญ์ ร่มโพธิ์ใหญ่",
    "gate": "NOT"
  },
  {
    "id": 252,
    "studentId": 64070252,
    "fullname": "นางสาวอภิสรา สนธิ",
    "gate": "AND"
  },
  {
    "id": 253,
    "studentId": 64070253,
    "fullname": "นายอลงกรณ์ จุฑาทัศน์",
    "gate": "AND"
  },
  {
    "id": 254,
    "studentId": 64070254,
    "fullname": "นางสาวอัญชิสา เชิดสัตยานุกูล",
    "gate": "NOR"
  },
  {
    "id": 255,
    "studentId": 64070255,
    "fullname": "นางสาวอัญทิชา ประภาศรีกวิน",
    "gate": "NOT"
  },
  {
    "id": 256,
    "studentId": 64070256,
    "fullname": "นายอาชัญ พลานุพัฒน์",
    "gate": "NOT"
  },
  {
    "id": 257,
    "studentId": 64070257,
    "fullname": "นางสาวอินทุมดี มะลิแย้ม",
    "gate": "NOR"
  },
  {
    "id": 258,
    "studentId": 64070258,
    "fullname": "นายอภิวัฒน์ บุญญศาสตร์พันธุ์",
    "gate": "NOT"
  },
  {
    "id": 259,
    "studentId": 64070259,
    "fullname": "นางสาวบงกชมาศ วิไลประสงค์",
    "gate": "OR"
  },
  {
    "id": 260,
    "studentId": 64070260,
    "fullname": "นางสาวชนัญธิดา ขวัญเชิด",
    "gate": "NOR"
  },
  {
    "id": 261,
    "studentId": 64070261,
    "fullname": "นางสาวจิรณัฏฐ์ จันทรนนท์",
    "gate": "AND"
  },
  {
    "id": 262,
    "studentId": 64070262,
    "fullname": "นางสาวจิรัชญา ทวิมาตร์",
    "gate": "AND"
  },
  {
    "id": 263,
    "studentId": 64070263,
    "fullname": "นายกฤติน ทวี?อภิรดี?วิชา?",
    "gate": "AND"
  },
  {
    "id": 264,
    "studentId": 64070264,
    "fullname": "นางสาวณวิสา ธนศุทธวงศ์",
    "gate": "OR"
  },
  {
    "id": 265,
    "studentId": 64070265,
    "fullname": "นางสาวพชรพร โพธิ์จันทร์",
    "gate": "NOT"
  },
  {
    "id": 266,
    "studentId": 64070266,
    "fullname": "นางสาวภิญญา เนื่องอุดม",
    "gate": "OR"
  },
  {
    "id": 267,
    "studentId": 64070267,
    "fullname": "นายพงศ์พล แซ่ลี้",
    "gate": "OR"
  },
  {
    "id": 268,
    "studentId": 64070268,
    "fullname": "นายรามันพรีท ซิงห์",
    "gate": "OR"
  },
  {
    "id": 269,
    "studentId": 64070269,
    "fullname": "นายรพีพัทธ์ จารุศิริเปรมสกุล",
    "gate": "OR"
  },
  {
    "id": 270,
    "studentId": 64070270,
    "fullname": "นางสาวสิริกร หมื่นกล้า",
    "gate": "AND"
  },
  {
    "id": 271,
    "studentId": 64070271,
    "fullname": "นายศิวกร บุญเนตร",
    "gate": "OR"
  },
  {
    "id": 272,
    "studentId": 64070272,
    "fullname": "นายสรวิศ พาณิชยะกิจกุล",
    "gate": "AND"
  },
  {
    "id": 273,
    "studentId": 64070273,
    "fullname": "นายตั้งปณิธาน สมภักดี",
    "gate": "AND"
  },
  {
    "id": 274,
    "studentId": 64070274,
    "fullname": "นายธณายุทธ ทัพพ์จันทร์",
    "gate": "OR"
  }

]

function getGate() {
	var studentId = document.getElementById('studentId').value
  // var studentId = $('#studentId').val();
  
	for(var i = 0; i < objStudents.length; i++) {
		// check is user input matches studentId and password of a current index of the objStudents array
		if(studentId == objStudents[i].studentId) {
			console.log("Gate of " + studentId + " is " + objStudents[i].gate)

			// stop the function if this is found to be true
            // alert(objStudents[i].gate)
            if (objStudents[i].gate == "AND"){
              setTimeout(() => {
                $(".eevee").hide();
                $(".charizard").hide();
                $(".mewtwo").hide();
              }, 2000);
            }
            if (objStudents[i].gate == "OR"){
              setTimeout(() => {
                $(".pika").hide();
                $(".charizard").hide();
                $(".mewtwo").hide();
              }, 2000);
            }
            if (objStudents[i].gate == "NOR"){
              setTimeout(() => {
                $(".pika").hide();
                $(".eevee").hide();
                $(".mewtwo").hide();
              }, 2000);
            }
            if (objStudents[i].gate == "NOT"){
              setTimeout(() => {
                $(".pika").hide();
                $(".eevee").hide();
                $(".charizard").hide();
              }, 2000);
            }
            setInterval(() => {
              $("#gateName").text("ยินดีต้อนรับ "+objStudents[i].fullname+" เข้าสู่ Gate "+objStudents[i].gate);
              
            }, 2200);
			return
		}
	}
}

console.clear();

var MAX_LIFE = 50;
var canvas = document.querySelector('canvas');
var input = document.querySelector('input');
var field = {}
var hasFocus = false;
var caret = document.createElement('span');
caret.style.position = 'absolute';
caret.style.left = 0;
caret.style.top = 0;
caret.style.margin = 0;
caret.style.width = 'auto';
caret.style.visibility = 'hidden';
document.body.appendChild(caret);

function reposition() {
	field = input.getBoundingClientRect();
}
window.onload = reposition;
window.onresize = reposition;
reposition();

input.onfocus = function() {hasFocus = true}
input.onblur = function() {hasFocus = false}

var keys = [8,9,13,16,17,18,27,32,33,34,35,36,37,38,39,40,46,91,93,112,113,114,115,116,117,118,119,120,121,122,123];
function spawnsCharacter(keyCode) {
	return keys.indexOf(keyCode) === -1;
}

function burst(intensity) {
	
	var behavior = [
		this.behavior.force(-.015,-.015),
		this.behavior.cohesion(50),
		this.behavior.move()
	];
	
	var size = 1.25;
	var force = .7;
	var lifeMin = 0;
	var progress = Math.min(field.width, caret.offsetWidth) / field.width;
	var offset = field.left + (field.width * progress);
	var rangeMin = Math.max(field.left, offset - 30);
	var rangeMax = Math.min(field.right, offset + 10);
	
	this.spray(intensity,function(){ return [
		null,null,
		Vector.create(
			Random.between(rangeMin + 10, rangeMax - 20),
			Random.between(field.top + 15, field.bottom - 15)
		),
		Vector.random(force),
		size + Math.random(),
		Random.between(lifeMin,0),behavior
	]});
	
	// top edge
	this.spray(intensity * .5,function(){ return [
		null,null,
		Vector.create(
			Random.between(rangeMin, rangeMax),
			field.top
		),
		Vector.random(force),
		size + Math.random(),
		Random.between(lifeMin,0),behavior
	]});
	
	// bottom edge
	this.spray(intensity * .5,function(){ return [
		null,null,
		Vector.create(
			Random.between(rangeMin, rangeMax),
			field.top + field.height
		),
		Vector.random(force),
		size + Math.random(),
		Random.between(lifeMin,0)
		,behavior
	]});
	
	// left edge
	if (input.value.length === 1) {
		
		this.spray(intensity * 2,function(){ return [
			null,null,
			Vector.create(
				field.left + (Math.random() * 20),
				Random.between(field.top,field.bottom)
			),
			Vector.random(force),
			size + Math.random(),
			Random.between(lifeMin,0),behavior
		]});
	}
	
	// right edge
	if (rangeMax == field.right) {

		this.spray(intensity * 2,function(){ return [
			null,null,
			Vector.create(
				field.right,
				Random.between(field.top,field.bottom)
			),
			Vector.random(force),
			size + Math.random(),
			Random.between(lifeMin,0),behavior
		]});

	}
	
}



// start particle simulation
simulate(
		'2d', {
				init: function() {
					
				},
				tick: function(particles) {

					if (!particles){ return; }

					particles.forEach(function(p){

						if (p.life > MAX_LIFE) {
							this.destroy(p);
						}
						
					});
					
				},
				beforePaint: function() {
						this.clear();
				},
				paint: function(particle) {
					
					var p = particle.position;
					var s = particle.size;
					var o = 1 - (particle.life / MAX_LIFE);
					
					this.paint.circle(p.x, p.y, s, 'rgba(255,255,255,' + o +')');
					this.paint.circle(p.x, p.y, s + 1.5, 'rgba(231,244,255,' + (o * .25) + ')');
					
					// extra
					var w = 2;
					var wh = w * .5;
					var h = 35;
					var hh = h * .5;
					this.context.rect(p.x -wh, p.y - hh, w, h);
					this.context.fillStyle = 'rgba(231,244,255,' + (o * .025) + ')';
					this.context.fill();
					this.context.closePath();
					
				},
				afterPaint: function() {
						// nothing
				},
				action: function(e) {
					
					if (!spawnsCharacter(e.keyCode)) {
						return;
					}
					
					caret.textContent = input.value;
					
					burst.call(this,12);
					
					input.classList.add('keyup');
					setTimeout(function(){input.classList.remove('keyup')},100);
					
				}
		}
);

















// "simulate" particle simulation logic
/**
 * Constants
 */
PI_2 = Math.PI / 2;
PI_180 = Math.PI / 180;

/**
 * Random
 */
var Random = {
		between: function(min, max) {
				return min + (Math.random() * (max - min));
		}
}

/**
 * 2D Vector Class
 */
function Vector(x, y) {
		this._x = x || 0;
		this._y = y || 0;
}

Vector.create = function(x, y) {
		return new Vector(x, y);
};

Vector.add = function(a, b) {
		return new Vector(a.x + b.x, a.y + b.y);
};

Vector.subtract = function(a, b) {
		return new Vector(a.x - b.x, a.y - b.y);
};

Vector.random = function(range) {
		var v = new Vector();
		v.randomize(range);
		return v;
};

Vector.distanceSquared = function(a, b) {
		var dx = a.x - b.x;
		var dy = a.y - b.y;
		return dx * dx + dy * dy;
};

Vector.distance = function(a, b) {
		var dx = a.x - b.x;
		var dy = a.y - b.y;
		return Math.sqrt(dx * dx + dy * dy);
};

Vector.prototype = {
		get x() {
				return this._x;
		},
		get y() {
				return this._y;
		},
		set x(value) {
				this._x = value;
		},
		set y(value) {
				this._y = value;
		},
		get magnitudeSquared() {
				return this._x * this._x + this._y * this._y;
		},
		get magnitude() {
				return Math.sqrt(this.magnitudeSquared);
		},
		get angle() {
				return Math.atan2(this._y, this._x) * 180 / Math.PI;
		},
		clone: function() {
				return new Vector(this._x, this._y);
		},
		add: function(v) {
				this._x += v.x;
				this._y += v.y;
		},
		subtract: function(v) {
				this._x -= v.x;
				this._y -= v.y;
		},
		multiply: function(value) {
				this._x *= value;
				this._y *= value;
		},
		divide: function(value) {
				this._x /= value;
				this._y /= value;
		},
		normalize: function() {
				var magnitude = this.magnitude;
				if (magnitude > 0) {
						this.divide(magnitude);
				}
		},
		limit: function(treshold) {
				if (this.magnitude > treshold) {
						this.normalize();
						this.multiply(treshold);
				}
		},
		randomize: function(amount) {
				amount = amount || 1;
				this._x = amount * 2 * (-.5 + Math.random());
				this._y = amount * 2 * (-.5 + Math.random());
		},
		rotate: function(degrees) {
				var magnitude = this.magnitude;
				var angle = ((Math.atan2(this._x, this._y) * PI_HALF) + degrees) * PI_180;
				this._x = magnitude * Math.cos(angle);
				this._y = magnitude * Math.sin(angle);
		},
		flip: function() {
				var temp = this._y;
				this._y = this._x;
				this._x = temp;
		},
		invert: function() {
				this._x = -this._x;
				this._y = -this._y;
		},
		toString: function() {
				return this._x + ', ' + this._y;
		}
}

/**
 * Particle Class
 */
function Particle(id, group, position, velocity, size, life, behavior) {

		this._id = id || 'default';
		this._group = group || 'default';

		this._position = position || new Vector();
		this._velocity = velocity || new Vector();
		this._size = size || 1;
		this._life = Math.round(life || 0);

		this._behavior = behavior || [];

}

Particle.prototype = {
		get id() {
				return this._id;
		},
		get group() {
				return this._group;
		},
		get life() {
				return this._life;
		},
		get size() {
				return this._size;
		},
		set size(size) {
				this._size = size;
		},
		get position() {
				return this._position;
		},
		get velocity() {
				return this._velocity;
		},
		update: function(stage) {

				this._life++;

				var i = 0;
				var l = this._behavior.length;

				for (; i < l; i++) {
						this._behavior[i].call(stage, this);
				}

		},
		toString: function() {
				return 'Particle(' + this._id + ') ' + this._life + ' pos: ' + this._position + ' vec: ' + this._velocity;
		}
}

// setup DOM
function simulate(dimensions, options) {

		// private vars
		var particles = [];
		var destroyed = [];
		var update = update || function() {};
		var stage = stage || function() {};
		var canvas;
		var context;

		if (!options) {
				console.error('"options" object must be defined');
				return;
		}

		if (!options.init) {
				console.error('"init" function must be defined');
				return;
		}

		if (!options.paint) {
				console.error('"paint" function must be defined');
				return;
		}

		if (!options.tick) {
				options.tick = function() {};
		}

		if (!options.beforePaint) {
				options.beforePaint = function() {};
		}

		if (!options.afterPaint) {
				options.afterPaint = function() {};
		}

		if (!options.action) {
				options.action = function() {};
		}

		if (document.readyState === 'interactive') {
				setup();
		} else {
				document.addEventListener('DOMContentLoaded', setup);
		}

		// resizes canvas to fit window dimensions
		function fitCanvas() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
		}

		// create canvas for drawing
		function setup() {

				// create
				canvas = document.createElement('canvas');
				document.body.appendChild(canvas);

				// correct canvas size on window resize
				window.addEventListener('resize', fitCanvas);

				// go
				go();
		}

		// canvas has been attached, let's go!
		function go() {

				// set initial canvas size
				fitCanvas();

				// get context for drawing
				context = canvas.getContext(dimensions);

				// simulation update loop
				function act() {

						// update particle states
						var i = 0;
						var l = particles.length;
						var p;
						for (; i < l; i++) {
								particles[i].update(this);
						}

						// clean destroyed particles
						while (p = destroyed.pop()) {

								do {
										
										// has not been found in destroyed array?
										if (p !== particles[i]) {
												continue;
										}
									
										// remove particle
										particles.splice(i, 1);

								} while (i-- >= 0)
						}
						
						// repaint context
						options.beforePaint.call(this);

						// repaint particles
						i = 0;
						l = particles.length;
						for (; i < l; i++) {
								options.paint.call(this, particles[i]);
						}

						// after particles have been painted
						options.afterPaint.call(this);
				}

				function tick() {

						// call update method, this allows for inserting particles later on
						options.tick.call(this, particles);

						// update particles here
						act();

						// on to the next frame
						window.requestAnimationFrame(tick);

				}

				/**
				 * API
				 **/
				function clear() {
						context.clearRect(0, 0, canvas.width, canvas.height);
				}

				function destroy(particle) {
						destroyed.push(particle);
				}

				function add(id, group, position, velocity, size, life, behavior) {
						particles.push(new Particle(id, group, position, velocity, size, life, behavior));
				}

				function spray(amount, config) {
						var i = 0;
						for (; i < amount; i++) {
								add.apply(this, config());
						}
				}

				function debug(particle) {
						this.paint.circle(
								particle.position.x,
								particle.position.y,
								particle.size,
								'rgba(255,0,0,.75)'
						);
						context.beginPath();
						context.moveTo(particle.position.x, particle.position.y);
						context.lineTo(particle.position.x + (particle.velocity.x * 10), particle.position.y + (particle.velocity.y * 10));
						context.strokeStyle = 'rgba(255,0,0,.1)';
						context.stroke();
						context.closePath();
				};

				this.clear = clear;
				this.destroy = destroy;
				this.add = add;
				this.spray = spray;
				this.debug = debug;

				this.paint = {
						circle: function(x, y, size, color) {
								context.beginPath();
								context.arc(x, y, size, 0, 2 * Math.PI, false);
								context.fillStyle = color;
								context.fill();
						},
						square: function(x, y, size, color) {
								context.beginPath();
								context.rect(x - (size * .5), y - (size * .5), size, size);
								context.fillStyle = color;
								context.fill();
						}
				}

				this.behavior = {
						cohesion: function(range, speed) {
								range = Math.pow(range || 100, 2);
								speed = speed || .001;
								return function(particle) {

										var center = new Vector();
										var i = 0;
										var l = particles.length;
										var count = 0;

										if (l <= 1) {
												return;
										}

										for (; i < l; i++) {

												// don't use self in group
												if (particles[i] === particle || Vector.distanceSquared(particles[i].position, particle.position) > range) {
														continue;
												}

												center.add(Vector.subtract(particles[i].position, particle.position));
												count++;
										}

										if (count > 0) {

												center.divide(count);

												center.normalize();
												center.multiply(particle.velocity.magnitude);

												center.multiply(.05);
										}

										particle.velocity.add(center);

								}
						},
						separation: function(distance) {

								var distance = Math.pow(distance || 25, 2);

								return function(particle) {

										var heading = new Vector();
										var i = 0;
										var l = particles.length;
										var count = 0;
										var diff;

										if (l <= 1) {
												return;
										}

										for (; i < l; i++) {

												// don't use self in group
												if (particles[i] === particle || Vector.distanceSquared(particles[i].position, particle.position) > distance) {
														continue;
												}

												// stay away from neighbours
												diff = Vector.subtract(particle.position, particles[i].position);
												diff.normalize();

												heading.add(diff);
												count++;
										}

										if (count > 0) {

												// get average
												heading.divide(count);

												// make same length as current velocity (so particle won't speed up)
												heading.normalize();
												heading.multiply(particle.velocity.magnitude);

												// limit force to make particle movement smoother
												heading.limit(.1);
										}

										particle.velocity.add(heading);

								}
						},
						alignment: function(range) {
								range = Math.pow(range || 100, 2);
								return function(particle) {

										var i = 0;
										var l = particles.length;
										var count = 0;
										var heading = new Vector();

										if (l <= 1) {
												return;
										}

										for (; i < l; i++) {

												// don't use self in group also don't align when out of range
												if (particles[i] === particle || Vector.distanceSquared(particles[i].position, particle.position) > range) {
														continue;
												}

												heading.add(particles[i].velocity);
												count++;
										}

										if (count > 0) {

												heading.divide(count);
												heading.normalize();
												heading.multiply(particle.velocity.magnitude);

												// limit
												heading.multiply(.1);

										}

										particle.velocity.add(heading);

								}
						},
						move: function() {
								return function(particle) {
										particle.position.add(particle.velocity);

										// handle collisions?

								}
						},
						eat: function(food) {
								food = food || [];
								return function(particle) {

										var i = 0;
										var l = particles.length;
										var prey;

										for (; i < l; i++) {

												prey = particles[i];

												// can't eat itself, also, needs to be tasty
												if (prey === particle || food.indexOf(prey.group) === -1) {
														continue;
												}

												// calculate force vector
												if (Vector.distanceSquared(particle.position, neighbour.position) < 2 && particle.size >= neighbour.size) {
														particle.size += neighbour.size;
														destroy(neighbour);
												}

										}
								}
						},
						force: function(x, y) {
								return function(particle) {
										particle.velocity.x += x;
										particle.velocity.y += y;
								}
						},
						limit: function(treshold) {
								return function(particle) {
										particle.velocity.limit(treshold);
								}
						},
						attract: function(forceMultiplier, groups) {
								forceMultiplier = forceMultiplier || 1;
								groups = groups || [];
								return function(particle) {

										// attract other particles
										var totalForce = new Vector(0, 0);
										var force = new Vector(0, 0);
										var i = 0;
										var l = particles.length;
										var distance;
										var pull;
										var attractor;
										var grouping = groups.length;

										for (; i < l; i++) {

												attractor = particles[i];

												// can't be attracted by itself or mismatched groups
												if (attractor === particle || (grouping && groups.indexOf(attractor.group) === -1)) {
														continue;
												}

												// calculate force vector
												force.x = attractor.position.x - particle.position.x;
												force.y = attractor.position.y - particle.position.y;
												distance = force.magnitude;
												force.normalize();

												// the bigger the attractor the more force
												force.multiply(attractor.size / distance);

												totalForce.add(force);
										}

										totalForce.multiply(forceMultiplier);

										particle.velocity.add(totalForce);
								}
						},
						wrap: function(margin) {
								return function(particle) {

										// move around when particle reaches edge of screen
										var position = particle.position;
										var radius = particle.size * .5;

										if (position.x + radius > canvas.width + margin) {
												position.x = radius;
										}

										if (position.y + radius > canvas.height + margin) {
												position.y = radius;
										}

										if (position.x - radius < -margin) {
												position.x = canvas.width - radius;
										}

										if (position.y - radius < -margin) {
												position.y = canvas.height - radius;
										}

								}
						},
						reflect: function() {

								return function(particle) {

										// bounce from edges
										var position = particle.position;
										var velocity = particle.velocity;
										var radius = particle.size * .5;

										if (position.x + radius > canvas.width) {
												velocity.x = -velocity.x;
										}

										if (position.y + radius > canvas.height) {
												velocity.y = -velocity.y;
										}

										if (position.x - radius < 0) {
												velocity.x = -velocity.x;
										}

										if (position.y - radius < 0) {
												velocity.y = -velocity.y;
										}
								}

						},
						edge: function(action) {
								return function(particle) {

										var position = particle.position;
										var velocity = particle.velocity;
										var radius = particle.size * .5;

										if (position.x + radius > canvas.width) {
												action(particle);
										}

										if (position.y + radius > canvas.height) {
												action(particle);
										}

										if (position.x - radius < 0) {
												action(particle);
										}

										if (position.y - radius < 0) {
												action(particle);
										}
								}
						}
				}

				// public
				Object.defineProperties(this, {
						'particles': {
								get: function() {
										return particles;
								}
						},
						'width': {
								get: function() {
										return canvas.width;
								}
						},
						'height': {
								get: function() {
										return canvas.height;
								}
						},
						'context': {
								get: function() {
										return context;
								}
						}
				});

				// call init method so the scene can be setup
				options.init.call(this)

				// start ticking
				tick();

				// start listening to events
				var self = this;
				document.addEventListener('keyup', function(e) {
						options.action.call(self, e);
				});

		}

};