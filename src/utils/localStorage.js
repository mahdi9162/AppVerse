export const loadInstalledData = () => {
  try {
    const data = localStorage.getItem('installed');
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const updateInstalledData = (id) => {
  const loadData = loadInstalledData();

  try {
    const isDuplicate = loadData.includes(id);
    if (isDuplicate) return;
    const updatedata = JSON.stringify([...loadData, id]);
    localStorage.setItem('installed', updatedata);
  } catch (error) {
    console.log(error);
  }
};

export const removeCard = (id) => {
  const loadData = loadInstalledData();
  try {
    const removeData = loadData.filter((data) => data !== id);
    const updatedata = JSON.stringify(removeData);;
    localStorage.setItem('installed', updatedata);
  } catch (error) {
    console.log(error);
  }
};
