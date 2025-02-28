# GA4 Event Action Result Values

When implementing GA4 tracking for links and interactive elements, use the following standardized values for the `data-dotagging-event-action-result` attribute:

| Value      | Usage                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------ |
| `open`     | For links that stay within the same tab                                                    |
| `redirect` | For external links that open in a new tab or window                                        |
| `open`     | For links to a default SRP with no search query (e.g., `/searchnew.aspx`)                  |
| `search`   | For links to an SRP with a search query (e.g., `/searchnew.aspx?Make=Toyota&Model=~Supra`) |

## Example Implementation

```html
<!-- Internal navigation link example -->
<a
  href="/vehicles"
  data-dotagging-event-category="navigation"
  data-dotagging-event-action="click"
  data-dotagging-event-label="vehicles page"
  data-dotagging-event-action-result="open"
  data-dotagging-element-order="0"
  >View Inventory</a
>

<!-- External link example -->
<a
  href="https://example.com"
  target="_blank"
  data-dotagging-event-category="outbound"
  data-dotagging-event-action="click"
  data-dotagging-event-label="example site"
  data-dotagging-event-action-result="redirect"
  data-dotagging-element-order="0"
  >Visit Partner</a
>

<!-- Search results page with query -->
<a
  href="/searchnew.aspx?Make=Toyota&Model=~Supra"
  data-dotagging-event-category="inventory"
  data-dotagging-event-action="search"
  data-dotagging-event-label="toyota supra"
  data-dotagging-event-action-result="search"
  data-dotagging-element-order="0"
  >Toyota Supra</a
>
```

## Important Notes

1. Always use the standardized values to maintain consistency across the platform
2. The `data-dotagging-element-order` attribute should start at 0 and increment for each similar element in a group
3. For external links that use `redirect` as the action result, include `target="_blank" rel="noopener noreferrer"` for security best practices
