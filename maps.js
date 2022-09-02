const emojis = {
    "-": " ",
    O: "🚪",
    X: "💣",
    I: "🎁",
    PLAYER: "💀",
    BOMB_COLLISION: "🔥",
    GAME_OVER: "👎",
    WIN: "🏆",
  };
  const maps = [];
  maps.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    OXXXXXXXXX
  `);
  maps.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXX---IXX
    XXXXXXXXXX
    `);
  maps.push(`
    I-----XXXX
    XXXXX-XXXX
    XX----XXXX
    XX-XXXXXXX
    XX-----XXX
    XXXXXX-XXX
    XX-----XXX
    XX-XXXXXXX
    XX-----OXX
    XXXXXXXXXX
  `);
  maps.push(`
    O--XXXXXXX
    XX--XXXXXX
    XXX--XXXXX
    XXXX--XXXX
    XXXXX--XXX
    XXXXX--XXX
    XXXX--XXXX
    XXX--XXXXX
    XX--XXXXXX
    I--XXXXXXX
  `);
  maps.push(`
  IXXXXXXXXX
  XX------XX
  XX-XXXX-XX
  XX-XXXX-XX
  XX-X-IX-XX
  XX-X-XX-XX
  XX---XX-XX
  XXXXXXX-XX
  XXXXX---XX
  O-----XXXX
`);

  