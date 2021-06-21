## Performance measurements with 100 rows (without pagination)

- Bundle size: 325 KiB
- First contentful paint: 600 ms
- Time to interactive: 600 ms
- Sorting time: 39 ms
- Filtering: 57 ms
- Scrolling experience: 20 ms for virtual page change (~54 fps)
- Keyboard navigation: ~12 ms moving to the next cell / ~25 ms for virtual page change (~43 fps)

## Performance measurements with 100 rows (with pagination)

- Bundle size: 325 KiB
- First contentful paint: 600 ms
- Time to interactive: 600 ms
- Sorting time: 89 ms
- Filtering: 161 ms
- Scrolling experience: 29 ms for virtual page change (~52 fps)
- Keyboard navigation: ~15 ms moving to the next cell / ~30 ms for virtual page change (~46 fps)
- Pagination page change time: 40 ms