import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {Data} from '@angular/router';
import {HospitalService} from './hospital.service';
import {UrlService} from './url.service';
import {Appointment} from './hospital.structure';

describe('HospitalService', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let hospitalService: HospitalService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        // Inject the http service and test controller for each test
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
        hospitalService = new HospitalService(httpClient);
    });
    /// Tests begin ///
    it('获取指定医院的信息', () => {
        const id = '1';
        const testData: Data = {hospital: 'Test Data'};

        // Make an HTTP GET request
        hospitalService.querySpecificHospital(id)
            .subscribe(data =>
                // When observable resolves, result should match test data
                expect(data).toEqual(testData)
            );

        // The following `expectOne()` will match the request's URL.
        // If no requests or multiple requests matched that URL
        // `expectOne()` would throw.
        const req = httpTestingController.expectOne(UrlService.QuerySpecific('hospital', id));

        // Assert that the request is a GET.
        expect(req.request.method).toEqual('GET');

        // Respond with mock data, causing Observable to resolve.
        // Subscribe callback asserts that correct data was returned.
        req.flush(testData);
    });

    it('测试404错误', () => {
        const id = '1';
        const errMsg = 'deliberate 404 error';

        hospitalService.querySpecificHospital(id)
            .subscribe(
                error => {
                    expect(error.status).toEqual(404, 'status');
                    expect(error.statusText).toEqual('Not Found', 'statusText');
                    expect(error.error).toEqual(errMsg, 'message');
                }
            );

        const req = httpTestingController.expectOne(UrlService.QuerySpecific('hospital', id));

        // Respond with mock error
        req.flush(errMsg, {status: 404, statusText: 'Not Found'});
    });

    it('生成预约挂号单', () => {
        const testData: Appointment = {
            rid: '',
            schedule: 1,
            patient: 1,
            appointment: '',
            requestId: '',
            bizId: '',
            phone: '',
            verificationCode: ''
        };

        // Make an HTTP POST request
        hospitalService.makeAppointment(testData)
            .subscribe(() => {
            });
        const req = httpTestingController.expectOne(UrlService.Insert('appointment'));
        expect(req.request.method).toEqual('POST');
    });
    /// Tests end ///
    afterEach(() => {
        // After every test, assert that there are no more pending requests.
        httpTestingController.verify();
    });
});