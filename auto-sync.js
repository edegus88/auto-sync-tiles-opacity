Hooks.on(\"updateScene\", async (scene, changes) => {
  if (!(\"darkness\" in changes)) return;

  const darkness = scene.darkness;
  const opacity = Math.clamped(darkness, 0, 1);

  const tiles = scene.tiles;
  if (!tiles.size) return;

  for (const tile of tiles) {
    await tile.update({ alpha: opacity });
  }

  console.log(`Auto-synced ${tiles.size} tiles to opacity ${opacity.toFixed(2)} (Darkness: ${darkness.toFixed(2)})`);
});
