## Performance measurements with 100 rows (without pagination)

- Bundle size: 323.7 KiB
- First contentful paint: 600 ms
- Time to interactive: 900 ms
- Sorting time: 40 ms
- Filtering: 63 ms
- Scrolling experience: 30 ms for virtual page change (~50 fps)
- Keyboard navigation: ~12 ms moving to the next cell / ~20 ms for virtual page change (~43 fps)

## Performance measurements with 100 rows (with pagination)

- Bundle size: 323.7 KiB
- First contentful paint: 600 ms
- Time to interactive: 1 s
- Sorting time: 154.54 ms
- Filtering: 254.31 ms
- Scrolling experience: -
- Keyboard navigation: ~14 ms moving to the next cell (~46 fps)
- Pagination page change time: 38.77 ms