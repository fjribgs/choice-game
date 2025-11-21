import { useState } from "react";

function App() {
  const [isAVisited, setIsAVisited] = useState(false);

  const [currentPage, setCurrentPage] = useState('selection');

  const handleVisitedOptionA = () => {
    setIsAVisited(true);

    setCurrentPage('selection');
    console.log('Opsi A Selesai. Fitur B terbuka!');
  };

  const handleGoBack = () => {
    setCurrentPage('selection');
  };

  if (currentPage === 'selection') {
    return (
      <div>

          <h2>Pilih Opsi: </h2>

          <button onClick={() => setCurrentPage('optionA')}
            className="cursor-pointer">
            Jelajahi A
          </button>

          <button onClick={() => setCurrentPage('optionB')}
            className="cursor-pointer">
            Jelajahi B
          </button>

          <p>Status Kunci B: {isAVisited ? 'TERBUKA' : 'TERKUNCI'}</p>

      </div>
    )
  }

  if (currentPage === 'optionA') {
    return (
      <div>

        <h3>Konten Opsi A</h3>
        <p>Yaya</p>
        <button onClick={handleVisitedOptionA}>
          Kembali
        </button>

      </div>
    )
  }

  if (currentPage === 'optionB') {
    return (
      <div>

        <h3>Konten Opsi B</h3>
        <p>Jing</p>

        <button onClick={() => setCurrentPage('optionB_advanced')}
          className={`${isAVisited ? 'flex' : 'hidden'}`}>Lanjut Ke Halaman B</button>
        <button onClick={handleGoBack}>Kembali ke A</button>

      </div>
    )
  }

  if (currentPage === 'optionB_advanced') {
    return (
      <div style={{ padding: '20px', border: '1px solid #FF9800', borderRadius: '8px' }}>
        <h3>🏆 Konten Opsi B Lanjutan!</h3>
        <p>Anda berhasil mencapai halaman ini karena telah menyelesaikan prasyarat Opsi A.</p>
        <button onClick={handleGoBack}>
          Kembali ke Pilihan
        </button>
      </div>
    );
  }

  return (
    <div>Nigga</div>
  )
}

export default App;