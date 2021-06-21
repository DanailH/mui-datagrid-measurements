## Performance measurements with 1000 rows (without pagination)

- Bundle size: 325 KiB
- First contentful paint: 600 ms
- Time to interactive: 600 ms
- Sorting time: 47 ms
- Filtering: 69 ms
- Scrolling experience: 42 ms for virtual page change (~49 fps)
- Keyboard navigation: ~19 ms moving to the next cell / ~32 ms for virtual page change (~43 fps)

## Performance measurements with 1000 rows (with pagination)

- Bundle size: 325 KiB
- First contentful paint: 600 ms
- Time to interactive: 700 ms
- Sorting time: 52 ms
- Filtering: 70 ms
- Scrolling experience: 20 ms for virtual page change (~54 fps)
- Keyboard navigation: ~12 ms moving to the next cell / ~25 ms for virtual page change (~43 fps)
- Pagination page change time: 42 ms