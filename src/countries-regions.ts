export type CountryOrRegion = Record<IdentifierScheme, string | undefined> &
  Partial<{ alternate: true }>

/** Enumerations of country/region codes. */
export const countriesAndRegions = [
  {
    name: 'Afghanistan',
    icao: 'AFG',
    iso2: 'AF',
    iso3: 'AFG',
    flag: '🇦🇫',
    phone: '+93',
  },
  {
    name: 'Albania',
    icao: 'ALB',
    iso2: 'AL',
    iso3: 'ALB',
    flag: '🇦🇱',
    phone: '+355',
  },
  {
    name: 'Algeria',
    icao: 'DZA',
    iso2: 'DZ',
    iso3: 'DZA',
    flag: '🇩🇿',
    phone: '+213',
  },
  {
    name: 'American Samoa',
    icao: 'ASM',
    iso2: 'AS',
    iso3: 'ASM',
    flag: '🇦🇸',
    phone: '+1-684',
  },
  {
    name: 'Andorra',
    icao: 'AND',
    iso2: 'AD',
    iso3: 'AND',
    flag: '🇦🇩',
    phone: '+376',
  },
  {
    name: 'Angola',
    icao: 'AGO',
    iso2: 'AO',
    iso3: 'AGO',
    flag: '🇦🇴',
    phone: '+244',
  },
  {
    name: 'Anguilla',
    icao: 'AIA',
    iso2: 'AI',
    iso3: 'AIA',
    flag: '🇦🇮',
    phone: '+1-264',
  },
  {
    name: 'Antarctica',
    icao: 'ATA',
    iso2: 'AQ',
    iso3: 'ATA',
    flag: '🇦🇶',
    phone: '+672',
  },
  {
    name: 'Antigua And Barbuda',
    icao: 'ATG',
    iso2: 'AG',
    iso3: 'ATG',
    flag: '🇦🇬',
    phone: '+1-268',
  },
  {
    name: 'Argentina',
    icao: 'ARG',
    iso2: 'AR',
    iso3: 'ARG',
    flag: '🇦🇷',
    phone: '+54',
  },
  {
    name: 'Armenia',
    icao: 'ARM',
    iso2: 'AM',
    iso3: 'ARM',
    flag: '🇦🇲',
    phone: '+374',
  },
  {
    name: 'Aruba',
    icao: 'ABW',
    iso2: 'AW',
    iso3: 'ABW',
    flag: '🇦🇼',
    phone: '+297',
  },
  {
    name: 'Australia',
    icao: 'AUS',
    iso2: 'AU',
    iso3: 'AUS',
    flag: '🇦🇺',
    phone: '+61',
  },
  {
    name: 'Austria',
    icao: 'AUT',
    iso2: 'AT',
    iso3: 'AUT',
    flag: '🇦🇹',
    phone: '+43',
  },
  {
    name: 'Azerbaijan',
    icao: 'AZE',
    iso2: 'AZ',
    iso3: 'AZE',
    flag: '🇦🇿',
    phone: '+994',
  },
  {
    name: 'Åland Island',
    icao: 'ALA',
    iso2: 'AX',
    iso3: 'ALA',
    flag: '🇦🇽',
    phone: undefined,
  },
  {
    name: 'Bahamas',
    icao: 'BHS',
    iso2: 'BS',
    iso3: 'BHS',
    flag: '🇧🇸',
    phone: '+1-242',
  },
  {
    name: 'Bahrain',
    icao: 'BHR',
    iso2: 'BH',
    iso3: 'BHR',
    flag: '🇧🇭',
    phone: '+973',
  },
  {
    name: 'Bangladesh',
    icao: 'BGD',
    iso2: 'BD',
    iso3: 'BGD',
    flag: '🇧🇩',
    phone: '+880',
  },
  {
    name: 'Barbados',
    icao: 'BRB',
    iso2: 'BB',
    iso3: 'BRB',
    flag: '🇧🇧',
    phone: '+1-246',
  },
  {
    name: 'Belarus',
    icao: 'BLR',
    iso2: 'BY',
    iso3: 'BLR',
    flag: '🇧🇾',
    phone: '+375',
  },
  {
    name: 'Belgium',
    icao: 'BEL',
    iso2: 'BE',
    iso3: 'BEL',
    flag: '🇧🇪',
    phone: '+32',
  },
  {
    name: 'Belize',
    icao: 'BLZ',
    iso2: 'BZ',
    iso3: 'BLZ',
    flag: '🇧🇿',
    phone: '+501',
  },
  {
    name: 'Benin',
    icao: 'BEN',
    iso2: 'BJ',
    iso3: 'BEN',
    flag: '🇧🇯',
    phone: '+229',
  },
  {
    name: 'Bermuda',
    icao: 'BMU',
    iso2: 'BM',
    iso3: 'BMU',
    flag: '🇧🇲',
    phone: '+1-441',
  },
  {
    name: 'Bhutan',
    icao: 'BTN',
    iso2: 'BT',
    iso3: 'BTN',
    flag: '🇧🇹',
    phone: '+975',
  },
  {
    name: 'Bolivia',
    icao: 'BOL',
    iso2: 'BO',
    iso3: 'BOL',
    flag: '🇧🇴',
    phone: '+591',
  },
  {
    name: 'Bonaire, Sint Eustatius and Saba',
    icao: 'NLD',
    iso2: 'BQ',
    alternate: true,
    iso3: 'BES',
    flag: '🇳🇱',
    phone: undefined,
  },
  {
    name: 'Bosnia And Herzegovina',
    icao: 'BIH',
    iso2: 'BA',
    iso3: 'BIH',
    flag: '🇧🇦',
    phone: '+387',
  },
  {
    name: 'Botswana',
    icao: 'BWA',
    iso2: 'BW',
    iso3: 'BWA',
    flag: '🇧🇼',
    phone: '+267',
  },
  {
    name: 'Bouvet Island',
    icao: 'BVT',
    iso2: 'BV',
    iso3: 'BVT',
    flag: '🇧🇻',
    phone: undefined,
  },
  {
    name: 'Brazil',
    icao: 'BRA',
    iso2: 'BR',
    iso3: 'BRA',
    flag: '🇧🇷',
    phone: '+55',
  },
  {
    name: 'British Indian Ocean Territory',
    icao: 'IOT',
    iso2: 'IO',
    iso3: 'IOT',
    flag: '🇮🇴',
    phone: '+246',
  },
  {
    name: 'Brunei Darussalam',
    icao: 'BRN',
    iso2: 'BN',
    iso3: 'BRN',
    flag: '🇧🇳',
    phone: '+673',
  },
  {
    name: 'Bulgaria',
    icao: 'BGR',
    iso2: 'BG',
    iso3: 'BGR',
    flag: '🇧🇬',
    phone: '+359',
  },
  {
    name: 'Burkina Faso',
    icao: 'BFA',
    iso2: 'BF',
    iso3: 'BFA',
    flag: '🇧🇫',
    phone: '+226',
  },
  {
    name: 'Burundi',
    icao: 'BDI',
    iso2: 'BI',
    iso3: 'BDI',
    flag: '🇧🇮',
    phone: '+257',
  },
  {
    name: 'Cabo Verde',
    icao: 'CPV',
    iso2: 'CV',
    iso3: 'CPV',
    flag: '🇨🇻',
    phone: '+238',
  },
  {
    name: 'Cambodia',
    icao: 'KHM',
    iso2: 'KH',
    iso3: 'KHM',
    flag: '🇰🇭',
    phone: '+855',
  },
  {
    name: 'Cameroon',
    icao: 'CMR',
    iso2: 'CM',
    iso3: 'CMR',
    flag: '🇨🇲',
    phone: '+237',
  },
  {
    name: 'Canada',
    icao: 'CAN',
    iso2: 'CA',
    iso3: 'CAN',
    flag: '🇨🇦',
    phone: '+1',
    alternate: true,
  },
  {
    name: 'Cayman Islands',
    icao: 'GBR',
    iso2: 'KY',
    alternate: true,
    iso3: 'CYM',
    flag: '🇬🇧',
    phone: '+1-345',
  },
  {
    name: 'Central African Republic',
    icao: 'CAF',
    iso2: 'CF',
    iso3: 'CAF',
    flag: '🇨🇫',
    phone: '+236',
  },
  {
    name: 'Chad',
    icao: 'TCD',
    iso2: 'TD',
    iso3: 'TCD',
    flag: '🇹🇩',
    phone: '+235',
  },
  {
    name: 'Chile',
    icao: 'CHL',
    iso2: 'CL',
    iso3: 'CHL',
    flag: '🇨🇱',
    phone: '+56',
  },
  {
    name: 'China',
    icao: 'CHN',
    iso2: 'CN',
    iso3: 'CHN',
    flag: '🇲🇴',
    phone: '+86',
  },
  {
    name: 'Christmas Island',
    icao: 'CXR',
    iso2: 'CX',
    iso3: 'CXR',
    flag: '🇨🇽',
    phone: '+61',
    alternate: true,
  },
  {
    name: 'Cocos (Keeling) Islands',
    icao: 'AUS',
    iso2: 'CC',
    alternate: true,
    iso3: 'CCK',
    flag: '🇦🇺',
    phone: '+61',
  },
  {
    name: 'Colombia',
    icao: 'COL',
    iso2: 'CO',
    iso3: 'COL',
    flag: '🇨🇴',
    phone: '+57',
  },
  {
    name: 'Comoros',
    icao: 'COM',
    iso2: 'KM',
    iso3: 'COM',
    flag: '🇰🇲',
    phone: '+269',
  },
  {
    name: 'Congo',
    icao: 'COG',
    iso2: 'CG',
    iso3: 'COG',
    flag: '🇨🇬',
    phone: '+242',
  },
  {
    name: 'Congo, Democratic Republic of the',
    icao: 'COD',
    iso2: 'CD',
    iso3: 'COD',
    flag: '🇨🇩',
    phone: '+243',
  },
  {
    name: 'Cook Islands',
    icao: 'COK',
    iso2: 'CK',
    iso3: 'COK',
    flag: '🇨🇰',
    phone: '+682',
  },
  {
    name: 'Costa Rica',
    icao: 'CRI',
    iso2: 'CR',
    iso3: 'CRI',
    flag: '🇨🇷',
    phone: '+506',
  },
  {
    name: 'Cote Divoire',
    icao: 'CIV',
    iso2: 'CI',
    iso3: 'CIV',
    flag: '🇨🇮',
    phone: '+225',
  },
  {
    name: 'Croatia',
    icao: 'HRV',
    iso2: 'HR',
    iso3: 'HRV',
    flag: '🇭🇷',
    phone: '+385',
  },
  {
    name: 'Cuba',
    icao: 'CUB',
    iso2: 'CU',
    iso3: 'CUB',
    flag: '🇨🇺',
    phone: '+53',
  },
  {
    name: 'Curaçao',
    icao: 'NLD',
    iso2: 'CW',
    alternate: true,
    iso3: 'CUW',
    flag: '🇳🇱',
    phone: '+599',
  },
  {
    name: 'Cyprus',
    icao: 'CYP',
    iso2: 'CY',
    iso3: 'CYP',
    flag: '🇨🇾',
    phone: '+357',
  },
  {
    name: 'Czech Republic',
    icao: 'CZE',
    iso2: 'CZ',
    iso3: 'CZE',
    flag: '🇨🇿',
    phone: '+420',
  },
  {
    name: 'Denmark',
    icao: 'DNK',
    iso2: 'DK',
    iso3: 'DNK',
    flag: '🇩🇰',
    phone: '+45',
  },
  {
    name: 'Djibouti',
    icao: 'DJI',
    iso2: 'DJ',
    iso3: 'DJI',
    flag: '🇩🇯',
    phone: '+253',
  },
  {
    name: 'Dominica',
    icao: 'DMA',
    iso2: 'DM',
    iso3: 'DMA',
    flag: '🇩🇲',
    phone: '+1-767',
  },
  {
    name: 'Dominican Republic',
    icao: 'DOM',
    iso2: 'DO',
    iso3: 'DOM',
    flag: '🇩🇴',
    phone: '+1-809',
  },
  {
    name: 'Dominican Republic',
    icao: 'DOM',
    iso2: 'DO',
    iso3: 'DOM',
    flag: '🇩🇴',
    phone: '+1-829',
    alternate: true,
  },
  {
    name: 'Dominican Republic',
    icao: 'DOM',
    iso2: 'DO',
    iso3: 'DOM',
    flag: '🇩🇴',
    phone: '+1-849',
    alternate: true,
  },
  {
    name: 'Ecuador',
    icao: 'ECU',
    iso2: 'EC',
    iso3: 'ECU',
    flag: '🇪🇨',
    phone: '+593',
  },
  {
    name: 'Egypt',
    icao: 'EGY',
    iso2: 'EG',
    iso3: 'EGY',
    flag: '🇪🇬',
    phone: '+20',
  },
  {
    name: 'El Salvador',
    icao: 'SLV',
    iso2: 'SV',
    iso3: 'SLV',
    flag: '🇸🇻',
    phone: '+503',
  },
  {
    name: 'Equatorial Guinea',
    icao: 'GNQ',
    iso2: 'GQ',
    iso3: 'GNQ',
    flag: '🇬🇶',
    phone: '+240',
  },
  {
    name: 'Eritrea',
    icao: 'ERI',
    iso2: 'ER',
    iso3: 'ERI',
    flag: '🇪🇷',
    phone: '+291',
  },
  {
    name: 'Estonia',
    icao: 'EST',
    iso2: 'EE',
    iso3: 'EST',
    flag: '🇪🇪',
    phone: '+372',
  },
  {
    name: 'Eswatini',
    icao: 'SWZ',
    iso2: 'SZ',
    iso3: 'SWZ',
    flag: '🇸🇿',
    phone: '+268',
  },
  {
    name: 'Ethiopia',
    icao: 'ETH',
    iso2: 'ET',
    iso3: 'ETH',
    flag: '🇪🇹',
    phone: '+251',
  },
  {
    name: 'Falkland Islands (Malvinas)',
    icao: 'FLK',
    iso2: 'FK',
    iso3: 'FLK',
    flag: '🇫🇰',
    phone: '+500',
  },
  {
    name: 'Faroe Islands',
    icao: 'FRO',
    iso2: 'FO',
    iso3: 'FRO',
    flag: '🇫🇴',
    phone: '+298',
  },
  {
    name: 'Fiji',
    icao: 'FJI',
    iso2: 'FJ',
    iso3: 'FJI',
    flag: '🇫🇯',
    phone: '+679',
  },
  {
    name: 'Finland',
    icao: 'FIN',
    iso2: 'FI',
    iso3: 'FIN',
    flag: '🇫🇮',
    phone: '+358',
  },
  {
    name: 'France',
    icao: 'FRA',
    iso2: 'FR',
    iso3: 'FRA',
    flag: '🇫🇷',
    phone: '+33',
  },
  {
    name: 'France, Metropolitan',
    icao: 'FXX',
    iso2: 'FR',
    alternate: true,
    iso3: 'FRA',
    flag: '🇫🇷',
    phone: '+33',
  },
  {
    name: 'French Guiana',
    icao: 'GUF',
    iso2: 'GF',
    iso3: 'GUF',
    flag: '🇬🇫',
    phone: undefined,
  },
  {
    name: 'French Polynesia',
    icao: 'PYF',
    iso2: 'PF',
    iso3: 'PYF',
    flag: '🇵🇫',
    phone: '+689',
  },
  {
    name: 'French Southern Territories',
    icao: 'ATF',
    iso2: 'TF',
    iso3: 'ATF',
    flag: '🇹🇫',
    phone: undefined,
  },
  {
    name: 'Gabon',
    icao: 'GAB',
    iso2: 'GA',
    iso3: 'GAB',
    flag: '🇬🇦',
    phone: '+241',
  },
  {
    name: 'Gambia',
    icao: 'GMB',
    iso2: 'GM',
    iso3: 'GMB',
    flag: '🇬🇲',
    phone: '+220',
  },
  {
    name: 'Georgia',
    icao: 'GEO',
    iso2: 'GE',
    iso3: 'GEO',
    flag: '🇬🇪',
    phone: '+995',
  },
  {
    name: 'Germany',
    icao: 'DEU',
    iso2: 'DE',
    alternate: true,
    iso3: 'DEU',
    flag: '🇩🇪',
    phone: '+49',
  },
  {
    name: 'Germany',
    icao: 'D',
    iso2: 'DE',
    iso3: 'DEU',
    flag: '🇩🇪',
    phone: '+49',
  },
  {
    name: 'Ghana',
    icao: 'GHA',
    iso2: 'GH',
    iso3: 'GHA',
    flag: '🇬🇭',
    phone: '+233',
  },
  {
    name: 'Gibraltar',
    icao: 'GIB',
    iso2: 'GI',
    iso3: 'GIB',
    flag: '🇬🇮',
    phone: '+350',
  },
  {
    name: 'Greece',
    icao: 'GRC',
    iso2: 'GR',
    iso3: 'GRC',
    flag: '🇬🇷',
    phone: '+30',
  },
  {
    name: 'Greenland',
    icao: 'GRL',
    iso2: 'GL',
    iso3: 'GRL',
    flag: '🇬🇱',
    phone: '+299',
  },
  {
    name: 'Grenada',
    icao: 'GRD',
    iso2: 'GD',
    iso3: 'GRD',
    flag: '🇬🇩',
    phone: '+1-473',
  },
  {
    name: 'Guadeloupe',
    icao: 'GLP',
    iso2: 'GP',
    iso3: 'GLP',
    flag: '🇬🇵',
    phone: undefined,
  },
  {
    name: 'Guatemala',
    icao: 'GTM',
    iso2: 'GT',
    iso3: 'GTM',
    flag: '🇬🇹',
    phone: '+502',
  },
  {
    name: 'Guernsey',
    icao: 'GBN',
    iso2: 'GG',
    alternate: true,
    iso3: 'GGY',
    flag: '🇬🇧',
    phone: '+44-1481',
  },
  {
    name: 'Guinea',
    icao: 'GIN',
    iso2: 'GN',
    iso3: 'GIN',
    flag: '🇬🇳',
    phone: '+224',
  },
  {
    name: 'Guinea-Bissau',
    icao: 'GNB',
    iso2: 'GW',
    iso3: 'GNB',
    flag: '🇬🇼',
    phone: '+245',
  },
  {
    name: 'Guyana',
    icao: 'GUY',
    iso2: 'GY',
    iso3: 'GUY',
    flag: '🇬🇾',
    phone: '+592',
  },
  {
    name: 'Haiti',
    icao: 'HTI',
    iso2: 'HT',
    iso3: 'HTI',
    flag: '🇭🇹',
    phone: '+509',
  },
  {
    name: 'Heard And McDonald Islands',
    icao: 'HMD',
    iso2: 'HM',
    iso3: 'HMD',
    flag: '🇭🇲',
    phone: undefined,
  },
  {
    name: 'Honduras',
    icao: 'HND',
    iso2: 'HN',
    iso3: 'HND',
    flag: '🇭🇳',
    phone: '+504',
  },
  {
    name: 'Hong Kong SAR',
    icao: 'CHN',
    iso2: 'HK',
    alternate: true,
    iso3: 'HKG',
    flag: '🇲🇴',
    phone: '+852',
  },
  {
    name: 'Hungary',
    icao: 'HUN',
    iso2: 'HU',
    iso3: 'HUN',
    flag: '🇭🇺',
    phone: '+36',
  },
  {
    name: 'Iceland',
    icao: 'ISL',
    iso2: 'IS',
    iso3: 'ISL',
    flag: '🇮🇸',
    phone: '+354',
  },
  {
    name: 'India',
    icao: 'IND',
    iso2: 'IN',
    iso3: 'IND',
    flag: '🇮🇳',
    phone: '+91',
  },
  {
    name: 'Indonesia',
    icao: 'IDN',
    iso2: 'ID',
    iso3: 'IDN',
    flag: '🇮🇩',
    phone: '+62',
  },
  {
    name: 'Iran (Islamic Republic Of)',
    icao: 'IRN',
    iso2: 'IR',
    iso3: 'IRN',
    flag: '🇮🇷',
    phone: '+98',
  },
  {
    name: 'Iraq',
    icao: 'IRQ',
    iso2: 'IQ',
    iso3: 'IRQ',
    flag: '🇮🇶',
    phone: '+964',
  },
  {
    name: 'Ireland',
    icao: 'IRL',
    iso2: 'IE',
    iso3: 'IRL',
    flag: '🇮🇪',
    phone: '+353',
  },
  {
    name: 'Isle of Man',
    icao: 'GBR',
    iso2: 'IM',
    alternate: true,
    iso3: 'IMN',
    flag: '🇬🇧',
    phone: '+44-1624',
  },
  {
    name: 'Israel',
    icao: 'ISR',
    iso2: 'IL',
    iso3: 'ISR',
    flag: '🇮🇱',
    phone: '+972',
  },
  {
    name: 'Italy',
    icao: 'ITA',
    iso2: 'IT',
    iso3: 'ITA',
    flag: '🇮🇹',
    phone: '+39',
  },
  {
    name: 'Jamaica',
    icao: 'JAM',
    iso2: 'JM',
    iso3: 'JAM',
    flag: '🇯🇲',
    phone: '+1-876',
  },
  {
    name: 'Japan',
    icao: 'JPN',
    iso2: 'JP',
    iso3: 'JPN',
    flag: '🇯🇵',
    phone: '+81',
  },
  {
    name: 'Jersey',
    icao: 'GBR',
    iso2: 'JE',
    alternate: true,
    iso3: 'JEY',
    flag: '🇬🇧',
    phone: '+44-1534',
  },
  {
    name: 'Jordan',
    icao: 'JOR',
    iso2: 'JO',
    iso3: 'JOR',
    flag: '🇯🇴',
    phone: '+962',
  },
  {
    name: 'Kazakhstan',
    icao: 'KAZ',
    iso2: 'KZ',
    iso3: 'KAZ',
    flag: '🇰🇿',
    phone: '+7',
    alternate: true,
  },
  {
    name: 'Kenya',
    icao: 'KEN',
    iso2: 'KE',
    iso3: 'KEN',
    flag: '🇰🇪',
    phone: '+254',
  },
  {
    name: 'Kiribati',
    icao: 'KIR',
    iso2: 'KI',
    iso3: 'KIR',
    flag: '🇰🇮',
    phone: '+686',
  },
  {
    name: "Korea, Democratic People's Republic of",
    icao: 'PRK',
    iso2: 'KP',
    iso3: 'PRK',
    flag: '🇰🇵',
    phone: '+850',
  },
  {
    name: 'Korea, Republic of',
    icao: 'KOR',
    iso2: 'KR',
    iso3: 'KOR',
    flag: '🇰🇷',
    phone: '+82',
  },
  // Kosovo is not listed as an ISO standard country. The unofficial codes are used by the European Commission and others until Kosovo is assigned an ISO code.
  {
    name: 'Kosovo',
    icao: 'RKS',
    iso2: 'XK',
    iso3: 'XKX',
    flag: '🇽🇰',
    phone: '+383',
  },
  {
    name: 'Kuwait',
    icao: 'KWT',
    iso2: 'KW',
    iso3: 'KWT',
    flag: '🇰🇼',
    phone: '+965',
  },
  {
    name: 'Kyrgyzstan',
    icao: 'KGZ',
    iso2: 'KG',
    iso3: 'KGZ',
    flag: '🇰🇬',
    phone: '+996',
  },
  {
    name: 'Lao Peoples Democratic Republic',
    icao: 'LAO',
    iso2: 'LA',
    iso3: 'LAO',
    flag: '🇱🇦',
    phone: '+856',
  },
  {
    name: 'Latvia',
    icao: 'LVA',
    iso2: 'LV',
    iso3: 'LVA',
    flag: '🇱🇻',
    phone: '+371',
  },
  {
    name: 'Lebanon',
    icao: 'LBN',
    iso2: 'LB',
    iso3: 'LBN',
    flag: '🇱🇧',
    phone: '+961',
  },
  {
    name: 'Lesotho',
    icao: 'LSO',
    iso2: 'LS',
    iso3: 'LSO',
    flag: '🇱🇸',
    phone: '+266',
  },
  {
    name: 'Liberia',
    icao: 'LBR',
    iso2: 'LR',
    iso3: 'LBR',
    flag: '🇱🇷',
    phone: '+231',
  },
  {
    name: 'Libyan Arab Jamahiriya',
    icao: 'LBY',
    iso2: 'LY',
    iso3: 'LBY',
    flag: '🇱🇾',
    phone: '+218',
  },
  {
    name: 'Liechtenstein',
    icao: 'LIE',
    iso2: 'LI',
    iso3: 'LIE',
    flag: '🇱🇮',
    phone: '+423',
  },
  {
    name: 'Lithuania',
    icao: 'LTU',
    iso2: 'LT',
    iso3: 'LTU',
    flag: '🇱🇹',
    phone: '+370',
  },
  {
    name: 'Luxembourg',
    icao: 'LUX',
    iso2: 'LU',
    iso3: 'LUX',
    flag: '🇱🇺',
    phone: '+352',
  },
  {
    name: 'Macao SAR',
    icao: 'CHN',
    iso2: 'MO',
    alternate: true,
    iso3: 'MAC',
    flag: '🇲🇴',
    phone: '+853',
  },
  {
    name: 'Madagascar',
    icao: 'MDG',
    iso2: 'MG',
    iso3: 'MDG',
    flag: '🇲🇬',
    phone: '+261',
  },
  {
    name: 'Malawi',
    icao: 'MWI',
    iso2: 'MW',
    iso3: 'MWI',
    flag: '🇲🇼',
    phone: '+265',
  },
  {
    name: 'Malaysia',
    icao: 'MYS',
    iso2: 'MY',
    iso3: 'MYS',
    flag: '🇲🇾',
    phone: '+60',
  },
  {
    name: 'Maldives',
    icao: 'MDV',
    iso2: 'MV',
    iso3: 'MDV',
    flag: '🇲🇻',
    phone: '+960',
  },
  {
    name: 'Mali',
    icao: 'MLI',
    iso2: 'ML',
    iso3: 'MLI',
    flag: '🇲🇱',
    phone: '+223',
  },
  {
    name: 'Malta',
    icao: 'MLT',
    iso2: 'MT',
    iso3: 'MLT',
    flag: '🇲🇹',
    phone: '+356',
  },
  {
    name: 'Marshall Islands',
    icao: 'MHL',
    iso2: 'MH',
    iso3: 'MHL',
    flag: '🇲🇭',
    phone: '+692',
  },
  {
    name: 'Martinique',
    icao: 'MTQ',
    iso2: 'MQ',
    iso3: 'MTQ',
    flag: '🇲🇶',
    phone: undefined,
  },
  {
    name: 'Mauritania',
    icao: 'MRT',
    iso2: 'MR',
    iso3: 'MRT',
    flag: '🇲🇷',
    phone: '+222',
  },
  {
    name: 'Mauritius',
    icao: 'MUS',
    iso2: 'MU',
    iso3: 'MUS',
    flag: '🇲🇺',
    phone: '+230',
  },
  {
    name: 'Mayotte',
    icao: 'MYT',
    iso2: 'YT',
    iso3: 'MYT',
    flag: '🇾🇹',
    phone: '+262',
    alternate: true,
  },
  {
    name: 'Mexico',
    icao: 'MEX',
    iso2: 'MX',
    iso3: 'MEX',
    flag: '🇲🇽',
    phone: '+52',
  },
  {
    name: 'Micronesia, Federated States of',
    icao: 'FSM',
    iso2: 'FM',
    iso3: 'FSM',
    flag: '🇫🇲',
    phone: '+691',
  },
  {
    name: 'Moldova',
    icao: 'MDA',
    iso2: 'MD',
    iso3: 'MDA',
    flag: '🇲🇩',
    phone: '+373',
  },
  {
    name: 'Monaco',
    icao: 'MCO',
    iso2: 'MC',
    iso3: 'MCO',
    flag: '🇲🇨',
    phone: '+377',
  },
  {
    name: 'Mongolia',
    icao: 'MNG',
    iso2: 'MN',
    iso3: 'MNG',
    flag: '🇲🇳',
    phone: '+976',
  },
  {
    name: 'Montenegro',
    icao: 'MNE',
    iso2: 'ME',
    iso3: 'MNE',
    flag: '🇲🇪',
    phone: '+382',
  },
  {
    name: 'Montserrat',
    icao: 'MSR',
    iso2: 'MS',
    iso3: 'MSR',
    flag: '🇲🇸',
    phone: '+1-664',
  },
  {
    name: 'Morocco',
    icao: 'MAR',
    iso2: 'MA',
    iso3: 'MAR',
    flag: '🇲🇦',
    phone: '+212',
  },
  {
    name: 'Mozambique',
    icao: 'MOZ',
    iso2: 'MZ',
    iso3: 'MOZ',
    flag: '🇲🇿',
    phone: '+258',
  },
  {
    name: 'Myanmar',
    icao: 'MMR',
    iso2: 'MM',
    iso3: 'MMR',
    flag: '🇲🇲',
    phone: '+95',
  },
  {
    name: 'Namibia',
    icao: 'NAM',
    iso2: 'NA',
    iso3: 'NAM',
    flag: '🇳🇦',
    phone: '+264',
  },
  {
    name: 'Nauru',
    icao: 'NRU',
    iso2: 'NR',
    iso3: 'NRU',
    flag: '🇳🇷',
    phone: '+674',
  },
  {
    name: 'Nepal',
    icao: 'NPL',
    iso2: 'NP',
    iso3: 'NPL',
    flag: '🇳🇵',
    phone: '+977',
  },
  {
    name: 'Netherlands',
    icao: 'NLD',
    iso2: 'NL',
    iso3: 'NLD',
    flag: '🇳🇱',
    phone: '+31',
  },
  {
    name: 'Netherlands Antilles',
    icao: 'ANT',
    iso2: 'AN',
    iso3: 'ANT',
    flag: '🇳🇱',
    alternate: true,
    phone: '+599',
  },
  {
    name: 'New Caledonia',
    icao: 'NCL',
    iso2: 'NC',
    iso3: 'NCL',
    flag: '🇳🇨',
    phone: '+687',
  },
  {
    name: 'New Zealand',
    icao: 'NZL',
    iso2: 'NZ',
    iso3: 'NZL',
    flag: '🇳🇿',
    phone: '+64',
  },
  {
    name: 'Nicaragua',
    icao: 'NIC',
    iso2: 'NI',
    iso3: 'NIC',
    flag: '🇳🇮',
    phone: '+505',
  },
  {
    name: 'Niger',
    icao: 'NER',
    iso2: 'NE',
    iso3: 'NER',
    flag: '🇳🇪',
    phone: '+227',
  },
  {
    name: 'Nigeria',
    icao: 'NGA',
    iso2: 'NG',
    iso3: 'NGA',
    flag: '🇳🇬',
    phone: '+234',
  },
  {
    name: 'Niue',
    icao: 'NIU',
    iso2: 'NU',
    iso3: 'NIU',
    flag: '🇳🇺',
    phone: '+683',
  },
  {
    name: 'Norfolk Island',
    icao: 'NFK',
    iso2: 'NF',
    iso3: 'NFK',
    flag: '🇳🇫',
    phone: undefined,
  },
  {
    name: 'North Macedonia',
    icao: 'MKD',
    iso2: 'MK',
    iso3: 'MKD',
    flag: '🇲🇰',
    phone: '+389',
  },
  {
    name: 'Northern Mariana Islands',
    icao: 'MNP',
    iso2: 'MP',
    iso3: 'MNP',
    flag: '🇲🇵',
    phone: '+1-670',
  },
  {
    name: 'Norway',
    icao: 'NOR',
    iso2: 'NO',
    iso3: 'NOR',
    flag: '🇳🇴',
    phone: '+47',
  },
  {
    name: 'Oman',
    icao: 'OMN',
    iso2: 'OM',
    iso3: 'OMN',
    flag: '🇴🇲',
    phone: '+968',
  },
  {
    name: 'Guam',
    icao: 'GUM',
    iso2: 'GU',
    iso3: 'GUM',
    flag: '🇬🇺',
    phone: '+1-671',
  },
  {
    name: 'Pakistan',
    icao: 'PAK',
    iso2: 'PK',
    iso3: 'PAK',
    flag: '🇵🇰',
    phone: '+92',
  },
  {
    name: 'Palau',
    icao: 'PLW',
    iso2: 'PW',
    iso3: 'PLW',
    flag: '🇵🇼',
    phone: '+680',
  },
  {
    name: 'Palestinian Territory, Occupied',
    icao: 'PSE',
    iso2: 'PS',
    iso3: 'PSE',
    flag: '🇵🇸',
    phone: '+970',
  },
  {
    name: 'Panama',
    icao: 'PAN',
    iso2: 'PA',
    iso3: 'PAN',
    flag: '🇵🇦',
    phone: '+507',
  },
  {
    name: 'Papua New Guinea',
    icao: 'PNG',
    iso2: 'PG',
    iso3: 'PNG',
    flag: '🇵🇬',
    phone: '+675',
  },
  {
    name: 'Paraguay',
    icao: 'PRY',
    iso2: 'PY',
    iso3: 'PRY',
    flag: '🇵🇾',
    phone: '+595',
  },
  {
    name: 'Peru',
    icao: 'PER',
    iso2: 'PE',
    iso3: 'PER',
    flag: '🇵🇪',
    phone: '+51',
  },
  {
    name: 'Philippines',
    icao: 'PHL',
    iso2: 'PH',
    iso3: 'PHL',
    flag: '🇵🇭',
    phone: '+63',
  },
  {
    name: 'Pitcairn',
    icao: 'PCN',
    iso2: 'PN',
    iso3: 'PCN',
    flag: '🇵🇳',
    phone: '+64',
    alternate: true,
  },
  {
    name: 'Poland',
    icao: 'POL',
    iso2: 'PL',
    iso3: 'POL',
    flag: '🇵🇱',
    phone: '+48',
  },
  {
    name: 'Portugal',
    icao: 'PRT',
    iso2: 'PT',
    iso3: 'PRT',
    flag: '🇵🇹',
    phone: '+351',
  },
  {
    name: 'Puerto Rico',
    icao: 'PRI',
    iso2: 'PR',
    iso3: 'PRI',
    flag: '🇵🇷',
    phone: '+1-787',
  },
  {
    name: 'Puerto Rico',
    icao: 'PRI',
    iso2: 'PR',
    iso3: 'PRI',
    flag: '🇵🇷',
    phone: '+1-939',
    alternate: true,
  },
  {
    name: 'Qatar',
    icao: 'QAT',
    iso2: 'QA',
    iso3: 'QAT',
    flag: '🇶🇦',
    phone: '+974',
  },
  {
    name: 'Reunion',
    icao: 'REU',
    iso2: 'RE',
    iso3: 'REU',
    flag: '🇷🇪',
    phone: '+262',
  },
  {
    name: 'Romania',
    icao: 'ROU',
    iso2: 'RO',
    iso3: 'ROU',
    flag: '🇷🇴',
    phone: '+40',
  },
  {
    name: 'Russian Federation',
    icao: 'RUS',
    iso2: 'RU',
    iso3: 'RUS',
    flag: '🇷🇺',
    phone: '+7',
  },
  {
    name: 'Rwanda',
    icao: 'RWA',
    iso2: 'RW',
    iso3: 'RWA',
    flag: '🇷🇼',
    phone: '+250',
  },
  {
    name: 'Saint Kitts And Nevis',
    icao: 'KNA',
    iso2: 'KN',
    iso3: 'KNA',
    flag: '🇰🇳',
    phone: '+1-869',
  },
  {
    name: 'Saint Barthélemy',
    icao: 'FRA',
    iso2: 'BL',
    alternate: true,
    iso3: 'BLM',
    flag: '🇫🇷',
    phone: '+590',
  },
  {
    name: 'Saint Lucia',
    icao: 'LCA',
    iso2: 'LC',
    iso3: 'LCA',
    flag: '🇱🇨',
    phone: '+1-758',
  },
  {
    name: 'Saint Martin (French)',
    icao: 'FRA',
    iso2: 'MF',
    alternate: true,
    iso3: 'MAF',
    flag: '🇫🇷',
    phone: '+590',
  },
  {
    name: 'Saint Martin (Dutch)',
    icao: 'NLD',
    iso2: 'SX',
    alternate: true,
    iso3: 'SXM',
    flag: '🇳🇱',
    phone: '+1-721',
  },
  {
    name: 'Saint Vincent And The Grenadines',
    icao: 'VCT',
    iso2: 'VC',
    iso3: 'VCT',
    flag: '🇻🇨',
    phone: '+1-784',
  },
  {
    name: 'Samoa',
    icao: 'WSM',
    iso2: 'WS',
    iso3: 'WSM',
    flag: '🇼🇸',
    phone: '+685',
  },
  {
    name: 'San Marino',
    icao: 'SMR',
    iso2: 'SM',
    iso3: 'SMR',
    flag: '🇸🇲',
    phone: '+378',
  },
  {
    name: 'Sao Tome And Principe',
    icao: 'STP',
    iso2: 'ST',
    iso3: 'STP',
    flag: '🇸🇹',
    phone: '+239',
  },
  {
    name: 'Saudi Arabia',
    icao: 'SAU',
    iso2: 'SA',
    iso3: 'SAU',
    flag: '🇸🇦',
    phone: '+966',
  },
  {
    name: 'Senegal',
    icao: 'SEN',
    iso2: 'SN',
    iso3: 'SEN',
    flag: '🇸🇳',
    phone: '+221',
  },
  {
    name: 'Serbia',
    icao: 'SRB',
    iso2: 'RS',
    iso3: 'SRB',
    flag: '🇷🇸',
    phone: '+381',
  },
  {
    name: 'Seychelles',
    icao: 'SYC',
    iso2: 'SC',
    iso3: 'SYC',
    flag: '🇸🇨',
    phone: '+248',
  },
  {
    name: 'Sierra Leone',
    icao: 'SLE',
    iso2: 'SL',
    iso3: 'SLE',
    flag: '🇸🇱',
    phone: '+232',
  },
  {
    name: 'Singapore',
    icao: 'SGP',
    iso2: 'SG',
    iso3: 'SGP',
    flag: '🇸🇬',
    phone: '+65',
  },
  {
    name: 'Slovakia',
    icao: 'SVK',
    iso2: 'SK',
    iso3: 'SVK',
    flag: '🇸🇰',
    phone: '+421',
  },
  {
    name: 'Slovenia',
    icao: 'SVN',
    iso2: 'SI',
    iso3: 'SVN',
    flag: '🇸🇮',
    phone: '+386',
  },
  {
    name: 'Solomon Islands',
    icao: 'SLB',
    iso2: 'SB',
    iso3: 'SLB',
    flag: '🇸🇧',
    phone: '+677',
  },
  {
    name: 'Somalia',
    icao: 'SOM',
    iso2: 'SO',
    iso3: 'SOM',
    flag: '🇸🇴',
    phone: '+252',
  },
  {
    name: 'South Africa',
    icao: 'ZAF',
    iso2: 'ZA',
    iso3: 'ZAF',
    flag: '🇿🇦',
    phone: '+27',
  },
  {
    name: 'South Georgia And The South Sandwich Islands',
    icao: 'SGS',
    iso2: 'GS',
    iso3: 'SGS',
    flag: '🇬🇸',
    phone: undefined,
  },
  {
    name: 'South Sudan',
    icao: 'SSD',
    iso2: 'SS',
    iso3: 'SSD',
    flag: '🇸🇸',
    phone: '+211',
  },
  {
    name: 'Spain',
    icao: 'ESP',
    iso2: 'ES',
    iso3: 'ESP',
    flag: '🇪🇸',
    phone: '+34',
  },
  {
    name: 'Sri Lanka',
    icao: 'LKA',
    iso2: 'LK',
    iso3: 'LKA',
    flag: '🇱🇰',
    phone: '+94',
  },
  {
    name: 'St. Helena',
    icao: 'SHN',
    iso2: 'SH',
    iso3: 'SHN',
    flag: '🇸🇭',
    phone: '+290',
  },
  {
    name: 'St. Pierre And Miquelon',
    icao: 'SPM',
    iso2: 'PM',
    iso3: 'SPM',
    flag: '🇵🇲',
    phone: '+508',
  },
  {
    name: 'Sudan',
    icao: 'SDN',
    iso2: 'SD',
    iso3: 'SDN',
    flag: '🇸🇩',
    phone: '+249',
  },
  {
    name: 'Suriname',
    icao: 'SUR',
    iso2: 'SR',
    iso3: 'SUR',
    flag: '🇸🇷',
    phone: '+597',
  },
  {
    name: 'Svalbard And Jan Mayen Islands',
    icao: 'SJM',
    iso2: 'SJ',
    iso3: 'SJM',
    flag: '🇸🇯',
    phone: '+47',
    alternate: true,
  },
  {
    name: 'Sweden',
    icao: 'SWE',
    iso2: 'SE',
    iso3: 'SWE',
    flag: '🇸🇪',
    phone: '+46',
  },
  {
    name: 'Switzerland',
    icao: 'CHE',
    iso2: 'CH',
    iso3: 'CHE',
    flag: '🇨🇭',
    phone: '+41',
  },
  {
    name: 'Syrian Arab Republic',
    icao: 'SYR',
    iso2: 'SY',
    iso3: 'SYR',
    flag: '🇸🇾',
    phone: '+963',
  },
  {
    name: 'Taiwan',
    icao: 'TWN',
    iso2: 'TW',
    iso3: 'TWN',
    flag: '🇹🇼',
    phone: '+886',
  },
  {
    name: 'Tajikistan',
    icao: 'TJK',
    iso2: 'TJ',
    iso3: 'TJK',
    flag: '🇹🇯',
    phone: '+992',
  },
  {
    name: 'Tanzania',
    icao: 'TZA',
    iso2: 'TZ',
    iso3: 'TZA',
    flag: '🇹🇿',
    phone: '+255',
  },
  {
    name: 'Thailand',
    icao: 'THA',
    iso2: 'TH',
    iso3: 'THA',
    flag: '🇹🇭',
    phone: '+66',
  },
  {
    name: 'Timor-Leste',
    icao: 'TLS',
    iso2: 'TL',
    iso3: 'TLS',
    flag: '🇹🇱',
    phone: '+670',
  },
  {
    name: 'Togo',
    icao: 'TGO',
    iso2: 'TG',
    iso3: 'TGO',
    flag: '🇹🇬',
    phone: '+228',
  },
  {
    name: 'Tokelau',
    icao: 'TKL',
    iso2: 'TK',
    iso3: 'TKL',
    flag: '🇹🇰',
    phone: '+690',
  },
  {
    name: 'Tonga',
    icao: 'TON',
    iso2: 'TO',
    iso3: 'TON',
    flag: '🇹🇴',
    phone: '+676',
  },
  {
    name: 'Trinidad And Tobago',
    icao: 'TTO',
    iso2: 'TT',
    iso3: 'TTO',
    flag: '🇹🇹',
    phone: '+1-868',
  },
  {
    name: 'Tunisia',
    icao: 'TUN',
    iso2: 'TN',
    iso3: 'TUN',
    flag: '🇹🇳',
    phone: '+216',
  },
  {
    name: 'Turkey',
    icao: 'TUR',
    iso2: 'TR',
    iso3: 'TUR',
    flag: '🇹🇷',
    phone: '+90',
  },
  {
    name: 'Turkmenistan',
    icao: 'TKM',
    iso2: 'TM',
    iso3: 'TKM',
    flag: '🇹🇲',
    phone: '+993',
  },
  {
    name: 'Turks And Caicos Islands',
    icao: 'TCA',
    iso2: 'TC',
    iso3: 'TCA',
    flag: '🇹🇨',
    phone: '+1-649',
  },
  {
    name: 'Tuvalu',
    icao: 'TUV',
    iso2: 'TV',
    iso3: 'TUV',
    flag: '🇹🇻',
    phone: '+688',
  },
  {
    name: 'Uganda',
    icao: 'UGA',
    iso2: 'UG',
    iso3: 'UGA',
    flag: '🇺🇬',
    phone: '+256',
  },
  {
    name: 'Ukraine',
    icao: 'UKR',
    iso2: 'UA',
    iso3: 'UKR',
    flag: '🇺🇦',
    phone: '+380',
  },
  {
    name: 'United Arab Emirates',
    icao: 'ARE',
    iso2: 'AE',
    iso3: 'ARE',
    flag: '🇦🇪',
    phone: '+971',
  },
  {
    name: 'United Kingdom British Citizen',
    icao: 'GBR',
    iso2: 'GB',
    iso3: 'GBR',
    flag: '🇬🇧',
    phone: '+44',
  },
  {
    name: 'UK British Dependent Territories Citiz',
    icao: 'GBD',
    iso2: 'GB',
    alternate: true,
    iso3: 'GBR',
    flag: '🇬🇧',
    phone: '+44',
  },
  {
    name: 'UK British National (Overseas)',
    icao: 'GBN',
    iso2: 'GB',
    alternate: true,
    iso3: 'GBR',
    flag: '🇬🇧',
    phone: '+44',
  },
  {
    name: 'UK British Overseas Citizen',
    icao: 'GBO',
    iso2: 'GB',
    alternate: true,
    iso3: 'GBR',
    flag: '🇬🇧',
    phone: '+44',
  },
  {
    name: 'UK British Protected Person',
    icao: 'GBP',
    iso2: 'GB',
    alternate: true,
    iso3: 'GBR',
    flag: '🇬🇧',
    phone: '+44',
  },
  {
    name: 'UK British Subject',
    icao: 'GBS',
    iso2: 'GB',
    alternate: true,
    iso3: 'GBR',
    flag: '🇬🇧',
    phone: '+44',
  },
  {
    name: 'United Nations Agency',
    icao: 'UNA',
    iso2: undefined,
    iso3: undefined,
    flag: '🇺🇳',
    phone: undefined,
    alternate: true,
  },
  {
    name: 'United Nations Organization',
    icao: 'UNO',
    iso2: undefined,
    iso3: undefined,
    phone: undefined,
    flag: '🇺🇳',
  },
  {
    name: 'United States',
    icao: 'USA',
    iso2: 'US',
    iso3: 'USA',
    flag: '🇺🇸',
    phone: '+1',
  },
  {
    name: 'United States Minor Outlying Islands',
    icao: 'USA',
    iso2: 'UM',
    alternate: true,
    iso3: 'UMI',
    flag: '🇺🇸',
    phone: undefined,
  },
  {
    name: 'Uruguay',
    icao: 'URY',
    iso2: 'UY',
    iso3: 'URY',
    flag: '🇺🇾',
    phone: '+598',
  },
  {
    name: 'Uzbekistan',
    icao: 'UZB',
    iso2: 'UZ',
    iso3: 'UZB',
    flag: '🇺🇿',
    phone: '+998',
  },
  {
    name: 'Vanuatu',
    icao: 'VUT',
    iso2: 'VU',
    iso3: 'VUT',
    flag: '🇻🇺',
    phone: '+678',
  },
  {
    name: 'Vatican City State',
    icao: 'VAT',
    iso2: 'VA',
    iso3: 'VAT',
    flag: '🇻🇦',
    phone: '+379',
  },
  {
    name: 'Virgin Islands',
    icao: 'USA',
    iso2: 'VI',
    alternate: true,
    iso3: 'VIR',
    flag: '🇺🇸',
    phone: '+1-340',
  },
  {
    name: 'Venezuela',
    icao: 'VEN',
    iso2: 'VE',
    iso3: 'VEN',
    flag: '🇻🇪',
    phone: '+58',
  },
  {
    name: 'Vietnam',
    icao: 'VNM',
    iso2: 'VN',
    iso3: 'VNM',
    flag: '🇻🇳',
    phone: '+84',
  },
  {
    name: 'Virgin Islands (British)',
    icao: 'VGB',
    iso2: 'VG',
    iso3: 'VGB',
    flag: '🇻🇬',
    phone: '+1-284',
  },
  {
    name: 'Wallis and Futana',
    icao: 'FRA',
    iso2: 'WF',
    alternate: true,
    iso3: 'WLF',
    flag: '🇫🇷',
    phone: '+681',
  },
  {
    name: 'Western Sahara',
    icao: 'ESH',
    iso2: 'EH',
    iso3: 'ESH',
    flag: '🇪🇭',
    phone: '+212',
    alternate: true,
  },
  {
    name: 'Yemen',
    icao: 'YEM',
    iso2: 'YE',
    iso3: 'YEM',
    flag: '🇾🇪',
    phone: '+967',
  },
  {
    name: 'Zambia',
    icao: 'ZMB',
    iso2: 'ZM',
    iso3: 'ZMB',
    flag: '🇿🇲',
    phone: '+260',
  },
  {
    name: 'Zimbabwe',
    icao: 'ZIM',
    iso2: 'ZW',
    iso3: 'ZWE',
    flag: '🇿🇼',
    phone: undefined,
  },
  {
    name: 'International Labour Organization',
    icao: 'ILO',
    iso2: undefined,
    iso3: undefined,
    flag: undefined,
    phone: undefined,
  },
  {
    name: 'Refugee (Others)',
    icao: 'XXC',
    iso2: undefined,
    iso3: undefined,
    flag: undefined,
    phone: undefined,
  },
  {
    name: 'Refugee (Status)',
    icao: 'XXB',
    iso2: undefined,
    iso3: undefined,
    flag: undefined,
    phone: undefined,
  },
  {
    name: 'Stateless',
    icao: 'XXA',
    iso2: undefined,
    iso3: undefined,
    flag: undefined,
    phone: undefined,
  },
  {
    name: 'Unspecified Nationality',
    icao: 'XXX',
    iso2: undefined,
    iso3: undefined,
    flag: undefined,
    phone: undefined,
    alternate: true,
  },
] as const

export const IdentifierSchemes = [
  'name',
  'icao',
  'iso2',
  'iso3',
  'flag',
  'phone',
] as const
export type IdentifierScheme = typeof IdentifierSchemes[number]

export type Identifier<T extends IdentifierScheme> = Exclude<
  typeof countriesAndRegions[number][T],
  undefined
>
