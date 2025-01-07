// เลือกปุ่มทั้งหมดในหน้าเว็บ
const buttons = document.querySelectorAll('button');

// วนลูปผ่านทุกปุ่ม
buttons.forEach(button => {
  // เมื่อเมาส์ชี้
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'red'; // เปลี่ยนสีพื้นหลังเป็นสีแดง
  });

  // เมื่อเมาส์ออกจากปุ่ม
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#4CAF50'; // เปลี่ยนสีพื้นหลังกลับเป็นสีเดิม
  });
});
