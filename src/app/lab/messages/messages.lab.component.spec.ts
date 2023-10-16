// // describe("2-message component integration testing:", () => {

// //     it("expect comp. created successfully", () => { })
// //     it("expect component template to be empty", () => {
// //         //Note: there is *ngIf="messageService.messages.length" in line 1 in template
// //     })
// //     it("then expect div.msg to have the messages after setting it", () => {})
// // })

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesComponentForLab } from './messages.lab.component';
import { MessageService } from 'src/app/services/message/message.service';

describe('2-message component integration testing:', () => {
  let fixture: ComponentFixture<MessagesComponentForLab>;
  let component: MessagesComponentForLab;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesComponentForLab],
      providers: [MessageService],
    });

    fixture = TestBed.createComponent(MessagesComponentForLab);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
  });

  it('expect comp. created successfully', () => {
    expect(component).toBeTruthy();
  });

  it('expect component template to be empty', () => {
    fixture.detectChanges();

    const containerElement = fixture.nativeElement.querySelector('#container');
    expect(containerElement).toBeNull();
  });

  it('then expect div.msg to have the messages after setting it', () => {
    const messages = ['Message 1', 'Message 2'];
    messageService.messages = messages;
    fixture.detectChanges();

    const containerElement = fixture.nativeElement.querySelector('#container');
    expect(containerElement).not.toBeNull();

    const msgElements = fixture.nativeElement.querySelectorAll('.msg');
    expect(msgElements.length).toBe(messages.length);
  });
});
