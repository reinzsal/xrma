import './css.css'

export const metadata = {
    title: 'maneki',
    description: 'TG: @btcgoblin'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  );
}
