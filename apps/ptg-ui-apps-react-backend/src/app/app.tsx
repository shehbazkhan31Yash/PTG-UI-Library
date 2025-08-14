import React, { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import Home from './components/Home';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer/Footer';
import Technologies from './components/Technologies';
import Teams from './components/Teams';
import BestPracticesDocs from './components/BestPracticesDocs';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { fetchDataFromStrapi } from './utils/DocumentService';
import { FormBuilder } from './components/components/form-builder';
import './globals.css';

const App: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchDataFromStrapi('best-practice-documents?populate=*').then((data) => {
      setData(data.data);
      setIsLoading(false);
    });
  }, []);

  const filteredFiles = useMemo(() => {
    if (!searchText) return [];
    return data
      .flatMap((doc) =>
        (doc.attributes.file?.data || []).map((file: any) => ({
          docId: doc.id,
          folderTitle: doc.attributes.folder_title,
          file,
        }))
      )
      .filter((item) =>
        item.file.attributes.name
          ?.toLowerCase()
          .includes(searchText.toLowerCase())
      );
  }, [data, searchText]);

  return (
    <div>
      <AppBar
        searchText={searchText}
        setSearchText={setSearchText}
        filteredFiles={filteredFiles}
      />
      <div className="container mt-4">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
          {/* Hide for now when the contact us form will be implemented then we can unhide this*/}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/" element={<Home />} />
          <Route
            path="/best_practices_docs"
            element={
              <BestPracticesDocs
                searchText={searchText}
                data={data}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/form-builder" element={<FormBuilder />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
