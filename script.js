// Boot-sequence terminal animation — the site's one orchestrated motion moment.
// Respects prefers-reduced-motion by rendering instantly instead of typing.

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('terminal-body');
  if (!el) return;

  const lines = [
    { text: '> init firmware_profile.bin', cls: 'dim' },
    { text: '  loading platforms: ESP32, STM32, nRF52, RA-series ... OK', cls: '' },
    { text: '  loading protocols: SPI, I2C, UART, CAN, BLE, MQTT ... OK', cls: '' },
    { text: '  mounting rtos: FreeRTOS, Zephyr ... OK', cls: '' },
    { text: '> status: READY', cls: 'ok' },
  ];

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    el.innerHTML = lines.map(l => `<div class="${l.cls}">${l.text}</div>`).join('');
    return;
  }

  el.innerHTML = '';
  let lineIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) {
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      el.appendChild(cursor);
      return;
    }
    const { text, cls } = lines[lineIndex];
    const lineEl = document.createElement('div');
    if (cls) lineEl.className = cls;
    el.appendChild(lineEl);

    let charIndex = 0;
    const speed = lineIndex === 0 ? 28 : 10;

    function typeChar() {
      if (charIndex < text.length) {
        lineEl.textContent += text[charIndex];
        charIndex++;
        setTimeout(typeChar, speed);
      } else {
        lineIndex++;
        setTimeout(typeLine, 90);
      }
    }
    typeChar();
  }

  typeLine();
});
