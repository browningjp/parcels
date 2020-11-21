# Parcels

## Table of Contents

  - [About the project](#about-the-project)
    - [Built With](#built-with)
  - [Getting Started](#getting-started)
    - [Loading in the data](#loading-in-the-data)
      - [CSV file format](#csv-file-format)
    - [Adding deliveries](#adding-deliveries)
    - [Configuring email settings](#configuring-email-settings)
    - [Sending emails](#sending-emails)
    - [Printing deliveries list](#printing-deliveries-list)
  - [Known Issues](#known-issues)
  - [License](#license)
  - [Contact](#contact)

## About the project

This is a simple web application to help reception staff to quickly send emails to people who have had a parcel/letter delivered to reception. 

It's designed with University halls of residence in mind, but could equally be applied to an office environment.

### Built With

* [Vue.js](https://vuejs.org)
* [Bootstrap](https://getbootstrap.com)
* [Font Awesome](https://fontawesome.com)

## Getting Started

To use the system, you will need a CSV file containing the data of all the people. See [CSV file format](#csv-file-format) for more details on the format.

The system is available at [www.jonnybrowning.com/parcels](https://www.jonnybrowning.com/parcels).

### Loading in the data

When you load the page, you first need to load in the data from your CSV file - click `Browse` in the top right.

#### CSV file format

You will need four columns of data, in this order:

1. Surname
2. First name
3. Middle names
4. Email address

The first row is reserved for these headings.

Line breaks must be denoted using \r\n

### Adding deliveries

Search for people by surname using the search box. Once you have found them, click `Add Parcel` or `Add Letter` as appropriate. Their name will appear in the Deliveries list on the right hand side of the page. You can adjust the number of parcels/letters as you like.

### Configuring email settings

Click `Email Settings` - here you can alter the subject line and body of the email you will send to recipients.

You can also save these settings as a bookmark - right click on the link, and add it to your bookmarks. When you visit the bookmark, the email settings will already be filled for you.

### Sending emails

Click `Send emails` - this will open your default mail application with the message pre-made ready to be sent. The recipients are entered into the bcc field for you, and the subject and body are already filled based on the email settings you have specified.

### Printing deliveries list

Click `Print List` (or print using the browser menu) to print out a list of the deliveries. There is a column available for recipients to sign for parcels/letters as well.

## Data protection

The application is GDPR-compliant by design. The personal data never leaves your device - everything is done within the browser. When emailing recipients, the application uses your default mail application, and adds the recipients to the `bcc` field, so that they cannot see each other.

## Known Issues

* Parsing of the CSV files is a bit crude, might be prone to errors if there are differences in the CSV file (for instance, lines are separated by \r\n)
* Long lists of recipients might not work - depending on how the user's system responds to long mailto links
* Long email settings might not save as a bookmark correctly - depending on how the user's system responds to long links

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Jonny Browning - jb@jonnybrowning.com