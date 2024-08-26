import './css.css'

export const metadata = {
    title: 'XR.MA | Home',
    description: 'The XR.MA homepage'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  );
}
