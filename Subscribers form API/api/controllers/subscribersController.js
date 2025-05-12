import sanity from '../models/sanityClient.js';

 
export const createSubscriber = async (req, res) => {
  const {
    systemNo,
    restaurantName,
    companyName,
    authorizedSignatureName,
    representativeName,
    shopLocation,
    plotNo,
    unitNo,
    companyAddress,
    city,
    poBox,
    email,
    telephone,
    mobileNo,
    fax,
    gasMeterType,
    kaEmail,
    dateOfSubscription,
    additionalNotes,
    termsAccepted
  } = req.body;

  const depositMap = {
    G4: '8000 AED',
    G6: '15000 AED',
    G10: '20000 AED',
  };

  const refundableGasDeposit = depositMap[gasMeterType];

  try {
    const newDocument = await sanity.create({
      _type: 'gasSubscription',
      systemNo,
      restaurantName,
      companyName,
      authorizedSignatureName,
      representativeName,
      shopLocation,
      plotNo,
      unitNo,
      companyAddress,
      city,
      poBox,
      email,
      telephone,
      mobileNo,
      fax,
      gasMeterType,
      refundableGasDeposit,
      kaEmail,
      dateOfSubscription,
      additionalNotes,
      termsAccepted
    });

    res.status(201).json({ success: true, data: newDocument });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};
