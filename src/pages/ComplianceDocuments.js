// material
import { connect } from 'react-redux';
import { Grid, Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CreateDocument, GetDocuments } from '../hooks/useDocumentHandler';
// components
import Page from '../components/Page';

import { ComplianceDocumentsCard, ComplianceDocumentsSelfEmploy } from '../sections/@dashboard/complianceDocuments';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const DocumentTypes = [
  'Passport or National ID',
  'Proof of registration with social security authorities',
  'Proof of registration with tax authorities',
  'Relevant sector specific licenses and/or permits(Optional)',
  'Any additional relevant documents(Optional)',
];

function ComplianceDocuments(props) {
  const [documents, setDocuments] = useState(null);
  useEffect(() => {
    async function fetchDocuments() {
      try {
        const response = await GetDocuments(props.user.id);
        setDocuments(response);
      } catch (e) {
        console.error(e);
      }
    }
    fetchDocuments();
  }, []);
  console.log('LOG : ComplianceDocuments -> documents', documents);

  const hasDocument = (type) => {
    const document = documents.filter((doc) => doc.document_type == type);
    console.log('LOG : hasDocument -> document', document);
    if (document.length > 0) {
      return document[0].url;
    } else {
      return null;
    }
  };
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Compliance Documents
        </Typography>
        {documents && (
          <Grid container>
            <Grid item xs={12} sm={6} md={6}>
              <ComplianceDocumentsCard
                title="Passport or National ID"
                user_id={props.user.id}
                total={71400}
                icon={'ic:baseline-account-balance'}
                document_url={hasDocument('Passport or National ID')}
              />
              <ComplianceDocumentsCard
                title="Proof of registration with social security authorities"
                user_id={props.user.id}
                total={71400}
                icon={'ic:baseline-account-balance'}
                document_url={hasDocument('Proof of registration with social security authorities')}
              />
              <ComplianceDocumentsCard
                title="Proof of registration with tax authorities"
                user_id={props.user.id}
                total={71400}
                icon={'ic:baseline-account-balance'}
                document_url={hasDocument('Proof of registration with tax authorities')}
              />
              <ComplianceDocumentsCard
                title="Relevant sector specific licenses and/or permits(Optional)"
                user_id={props.user.id}
                total={71400}
                icon={'ic:baseline-account-balance'}
                document_url={hasDocument('Relevant sector specific licenses and/or permits(Optional)')}
              />
              <ComplianceDocumentsCard
                title="Any additional relevant documents(Optional)"
                user_id={props.user.id}
                total={71400}
                icon={'ic:baseline-account-balance'}
                document_url={hasDocument('Any additional relevant documents(Optional)')}
              />
            </Grid>
          </Grid>
        )}
      </Container>
    </Page>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(ComplianceDocuments);
