it("should update quality", () => {
  expect(updateQuality).toVerifyAllCombinations(
    ["foo", "Aged Brie", "Sulfuras"],
    [-1, 0],
    [0, 1, 2, 50]
  )
})
