"use client";

export default function Content() {
  return (
    <section className="content section">
      <div className="container">

        {/* ========== INTRO ========== */}
        <h2 className="section__title">Ooty Travels – Complete Travel Solutions</h2>
        <p className="content__intro">
          Experience the Queen of Hills with greater convenience. Ooty Travels has been serving travellers since 1999 with private cabs, Tempo Travellers, Force Urbania, airport & railway transfers, sightseeing tours, hotel bookings and customized South India packages.
        </p>

        {/* ========== MAIN SERVICES ========== */}
        <div className="content__block">
          <h3 className="content__subtitle">Our Main Travel Services</h3>
          <ul className="content__list">
            <li>Ooty local sightseeing tours</li>
            <li>Coonoor sightseeing tours</li>
            <li>Pykara sightseeing trips</li>
            <li>Avalanche tours</li>
            <li>Mudumalai and Masinagudi tour packages</li>
            <li>Ooty airport and railway station transfers</li>
            <li>Mettupalayam to Ooty transfers</li>
            <li>Coimbatore Airport to Ooty transfers</li>
            <li>Mysore and Bangalore to Ooty transfers</li>
            <li>Sedan and SUV cab rentals</li>
            <li>Tempo Traveller rental</li>
            <li>Force Urbania rental</li>
            <li>Toy Train ticket assistance</li>
            <li>Ooty hotel booking, Homestays & cottages</li>
            <li>Food and accommodation assistance</li>
            <li>Acting driver service</li>
            <li>Tourist guide service</li>
            <li>South India tour packages</li>
          </ul>
        </div>

        {/* ========== OOTY SIGHTSEEING TARIFF ========== */}
        <div className="content__block">
          <h3 className="content__subtitle">Ooty Sightseeing Tariff</h3>
          <p className="content__note">
            Starting tariffs for up to 8 hours. Prices may vary based on season, date, vehicle availability and route.
          </p>

          <div className="table-wrapper">
            <table className="content__table">
              <thead>
                <tr>
                  <th>Vehicle</th>
                  <th>Starting Tariff</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dzire / Glanza / Etios</td>
                  <td>₹2,500 onwards</td>
                  <td>Up to 8 Hours</td>
                </tr>
                <tr>
                  <td>Innova</td>
                  <td>₹3,500 onwards</td>
                  <td>Up to 8 Hours</td>
                </tr>
                <tr>
                  <td>Innova Crysta</td>
                  <td>₹5,500 onwards</td>
                  <td>Up to 8 Hours</td>
                </tr>
                <tr>
                  <td>Innova Hycross</td>
                  <td>₹6,000 onwards</td>
                  <td>Up to 8 Hours</td>
                </tr>
                <tr>
                  <td>Tempo Traveller (12 Seater)</td>
                  <td>₹5,000 onwards</td>
                  <td>Up to 8 Hours</td>
                </tr>
                <tr>
                  <td>Tempo Traveller (14/16 Seater)</td>
                  <td>₹5,500 – ₹6,000 onwards</td>
                  <td>Up to 8 Hours</td>
                </tr>
                <tr>
                  <td>Force Urbania</td>
                  <td>On Request</td>
                  <td>As per itinerary</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="content__note">
            Parking, entrance tickets, boating, special permits and personal expenses are extra unless mentioned in the booking.
          </p>
        </div>

        {/* ========== DROP TAXI FARES ========== */}
        <div className="content__block">
          <h3 className="content__subtitle">Drop Taxi Fares</h3>

          <div className="table-grid">
            <div>
              <h4 className="content__table-title">Ooty → Coonoor</h4>
              <div className="table-wrapper">
                <table className="content__table">
                  <thead>
                    <tr>
                      <th>Vehicle</th>
                      <th>Fare</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>4 Seater</td><td>₹1,300</td></tr>
                    <tr><td>7 Seater</td><td>₹2,300</td></tr>
                    <tr><td>12 Seater</td><td>₹3,500</td></tr>
                    <tr><td>18 Seater</td><td>₹5,000</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="content__table-title">Ooty → Mettupalayam</h4>
              <div className="table-wrapper">
                <table className="content__table">
                  <thead>
                    <tr>
                      <th>Vehicle</th>
                      <th>Fare</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>4 Seater</td><td>₹2,500</td></tr>
                    <tr><td>7 Seater</td><td>₹3,500</td></tr>
                    <tr><td>12 Seater</td><td>₹6,000</td></tr>
                    <tr><td>18 Seater</td><td>₹7,500</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="content__table-title">Ooty → Coimbatore (One-way)</h4>
              <div className="table-wrapper">
                <table className="content__table">
                  <thead>
                    <tr>
                      <th>Vehicle</th>
                      <th>Fare</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>4 Seater</td><td>₹3,500</td></tr>
                    <tr><td>7 Seater</td><td>₹5,500</td></tr>
                    <tr><td>12 Seater</td><td>₹8,500</td></tr>
                    <tr><td>18 Seater</td><td>₹9,500</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* ========== SHARING MINI BUS ========== */}
        <div className="content__block">
          <h3 className="content__subtitle">Ooty Sharing Mini Bus Sightseeing Packages</h3>
          <p className="content__note">Pickup & Drop: Ooty Bus Stand | Timing: 9:30 AM – 6:00 PM</p>

          <div className="table-wrapper">
            <table className="content__table">
              <thead>
                <tr>
                  <th>Tour Package</th>
                  <th>Fare Per Head</th>
                  <th>Timing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ooty Sightseeing</td>
                  <td>₹475 / Person</td>
                  <td>9:30 AM – 6:00 PM</td>
                </tr>
                <tr>
                  <td>Coonoor Sightseeing</td>
                  <td>₹475 / Person</td>
                  <td>9:30 AM – 6:00 PM</td>
                </tr>
                <tr>
                  <td>Pykara Sightseeing</td>
                  <td>₹475 / Person</td>
                  <td>9:30 AM – 6:00 PM</td>
                </tr>
                <tr>
                  <td>Mudumalai Sightseeing</td>
                  <td>₹750 / Person</td>
                  <td>9:30 AM – 6:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="content__note">
            Entry tickets, boating, safari charges, parking and personal expenses are not included. Advance booking recommended.
          </p>
        </div>

        {/* ========== POPULAR ATTRACTIONS ========== */}
        <div className="content__block">
          <h3 className="content__subtitle">Popular Ooty Attractions</h3>
          <div className="content__grid">
            <ul className="content__list">
              <li>Ooty Lake</li>
              <li>Government Botanical Garden</li>
              <li>Government Rose Garden</li>
              <li>Doddabetta Peak</li>
              <li>Tea Factory & Tea Museum</li>
              <li>Pine Forest</li>
            </ul>
\
          </div>
        </div>

        {/* ========== COONOOR / PYKARA / AVALANCHE / MUDUMALAI ========== */}
        <div className="content__block">
          <h3 className="content__subtitle">Day Trips from Ooty</h3>

          <div className="content__cards">
            <div className="content__card">
              <h4>Coonoor Sightseeing</h4>
              <ul>
                <li>Sim’s Park</li>
                <li>Lamb’s Rock</li>
                <li>Dolphin’s Nose</li>
                <li>Tea Estates & Factory</li>
                <li>Catherine Falls viewpoint</li>
                <li>Wellington & Coonoor town</li>
              </ul>
            </div>

            <div className="content__card">
              <h4>Pykara Tour</h4>
              <ul>
                <li>Pykara Lake & Boat House</li>
                <li>Pykara Waterfalls</li>
                <li>Pykara Dam</li>
                <li>Pine Forest</li>
                <li>Shooting Point</li>
                <li>Wenlock Downs</li>
              </ul>
            </div>

            <div className="content__card">
              <h4>Avalanche</h4>
              <ul>
                <li>Peaceful mountain scenery</li>
                <li>Forests & lakes</li>
                <li>Emerald surroundings</li>
                <li>Quieter landscapes</li>
                <li>Ideal for nature lovers</li>
              </ul>
            </div>

            <div className="content__card">
              <h4>Mudumalai & Masinagudi</h4>
              <ul>
                <li>Gudalur & Mudumalai</li>
                <li>Masinagudi & Theppakadu</li>
                <li>Moyar region</li>
                <li>Forest landscapes</li>
                <li>Wildlife safari options</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ========== TRANSFERS ========== */}
        <div className="content__block">
          <h3 className="content__subtitle">Airport & Railway Transfers</h3>
          <ul className="content__list">
            <li>Mettupalayam Railway Station ↔ Ooty</li>
            <li>Coimbatore International Airport ↔ Ooty</li>
            <li>Mysore → Ooty</li>
            <li>Bangalore → Ooty (one-way & round-trip)</li>
          </ul>
          <p className="content__note">
            Private cabs and group vehicles (Tempo Traveller / Force Urbania) available according to your arrival/departure schedule.
          </p>
        </div>

        {/* ========== VEHICLES ========== */}
        <div className="content__block">
          <h3 className="content__subtitle">Cab & Vehicle Options</h3>
          <div className="content__cards">
            <div className="content__card">
              <h4>Sedan Cars</h4>
              <ul>
                <li>Maruti Suzuki Dzire</li>
                <li>Toyota Etios</li>
                <li>Toyota Glanza</li>
              </ul>
            </div>
            <div className="content__card">
              <h4>SUV & Premium</h4>
              <ul>
                <li>Toyota Innova</li>
                <li>Toyota Innova Crysta</li>
                <li>Toyota Innova Hycross</li>
              </ul>
            </div>
            <div className="content__card">
              <h4>Group Vehicles</h4>
              <ul>
                <li>12 / 14 / 16 / 18 Seater Tempo Traveller</li>
                <li>Force Urbania (premium)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ========== TOY TRAIN ========== */}
        <div className="content__block">
          <h3 className="content__subtitle">Nilgiri Mountain Railway (Toy Train) Assistance</h3>
          <p className="content__note">
            We assist with Coonoor ↔ Ooty Toy Train ticket booking (subject to railway availability).
          </p>

          <div className="table-wrapper">
            <table className="content__table">
              <thead>
                <tr>
                  <th>Route</th>
                  <th>Approx. Departure</th>
                  <th>Approx. Arrival</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Coonoor → Ooty</td>
                  <td>Around 7:45 AM</td>
                  <td>Around 9:05 AM</td>
                </tr>
                <tr>
                  <td>Coonoor → Ooty</td>
                  <td>Around 12:35 PM</td>
                  <td>Around 1:50 PM</td>
                </tr>
                <tr>
                  <td>Coonoor → Ooty</td>
                  <td>Around 4:30 PM</td>
                  <td>Around 5:45 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="content__note">
            Timings are approximate and can change. Always confirm the official railway timetable for your travel date.
          </p>
        </div>

        {/* ========== HOTELS ========== */}
        <div className="content__block">
          <h3 className="content__subtitle">Hotel Booking & Accommodation Assistance</h3>
          <div className="content__cards">
            <div className="content__card">
              <h4>Budget & Economy</h4>
              <ul>
                <li>Hotel Maneck</li>
                <li>Hotel Tamilnadu Ooty</li>
                <li>Rainbow Cottages</li>
                <li>Hotel Mayura Sudarshan</li>
              </ul>
            </div>
            <div className="content__card">
              <h4>Mid-Range</h4>
              <ul>
                <li>Hotel Lakeview</li>
                <li>Sterling Ooty – Fern Hill</li>
                <li>West Downs – The Heritage Resort</li>
                <li>Fortune Resort Sullivan Court</li>
              </ul>
            </div>
            <div className="content__card">
              <h4>Luxury</h4>
              <ul>
                <li>Savoy, Ooty – IHCL SeleQtions</li>
                <li>Accord Highland Ooty</li>
                <li>WelcomHeritage Fernhills Royal Palace</li>
              </ul>
            </div>
          </div>
          <p className="content__note">
            Homestays and cottages also available. Hotel names are examples only – availability and rates change with season and demand.
          </p>
        </div>

        {/* ========== OTHER SERVICES ========== */}
        <div className="content__block">
          <h3 className="content__subtitle">Additional Services</h3>
          <div className="content__cards">
            <div className="content__card">
              <h4>Acting Driver</h4>
              <p>₹1,500 per day onwards</p>
              <p className="content__small">For personal cars – local sightseeing or outstation hill-road driving.</p>
            </div>
            <div className="content__card">
              <h4>Tourist Guide</h4>
              <p>Knowledgeable local guides available for families, groups and first-time visitors.</p>
            </div>
            <div className="content__card">
              <h4>South India Packages</h4>
              <p>Custom multi-day tours covering Ooty, Coonoor, Coorg, Wayanad, Munnar, Alleppey, Kodaikanal, Madurai, Kanyakumari and more.</p>
            </div>
          </div>
        </div>

        {/* ========== WHY CHOOSE ========== */}
        <div className="content__block">
          <h3 className="content__subtitle">Why Choose Ooty Travels?</h3>
          <ul className="content__list">
            <li>Local travel experience since 1999</li>
            <li>Multiple vehicle choices – from economical sedans to Force Urbania</li>
            <li>Complete assistance: transport + sightseeing + hotels + Toy Train + guides</li>
            <li>Flexible planning according to your dates, group size and budget</li>
          </ul>
        </div>

        {/* ========== BOOKING CTA ========== */}
        <div className="content__cta">
          <h3 className="content__subtitle">Plan Your Ooty Holiday</h3>
          <p>
            Share your travel date, pickup location, number of passengers, preferred vehicle and sightseeing requirements.
          </p>
          <a href="tel:7806882556" className="button content__button">
            Book Now – 7806882556
          </a>
        </div>

      </div>
    </section>
  );
}