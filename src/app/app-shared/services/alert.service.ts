import { Injectable } from '@angular/core';
declare const swal: any;
declare const $: any;

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  // Notification Method
  notify(
    iconType: string,
    title: string,
    alertMessage: string,
    alertType: string
  ) {
    $.notify(
      {
        // options
        icon: iconType,
        title: '<strong>' + title + '</strong>' + ':',
        message: alertMessage,
      },
      {
        // settings
        element: 'body',
        position: null,
        type: alertType,
        allow_dismiss: true,
        newest_on_top: false,
        showProgressbar: true,
        placement: {
          from: 'top',
          align: 'right',
        },
        offset: 20,
        spacing: 10,
        // z_index: 1031, By JL on 27-01-21, confirm on 03-11-21
        // z_index: 1041,
        z_index: 1051,
        delay: 2000,
        timer: 1000,
        url_target: '_blank',
        mouse_over: null,
        animate: {
          // enter: 'animated fadeInDown',
          enter: 'animate__animated animate__bounceInDown',
          exit: 'animate__animated animate__bounceOutRight',
          // exit: 'animated fadeOutUp'
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: 'class',
        template:
          '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
          '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
          '<span data-notify="icon"></span> ' +
          '<span data-notify="title message">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>',
      }
    );
  }

  //  ********** Form Control Error Notification Section **********
  // Registration Form

  // First Name Empty Notify
  firstNameEmpty(alertMessage: string = 'Please provide "First name" ') {
    this.notify(
      'fa fa-lg fa-exclamation-circle',
      'Empty',
      alertMessage,
      'pastel-warning'
    );
  }

  // Last Name Empty Notify
  lastNameEmpty(alertMessage: string = 'Please provide "Last name" ') {
    this.notify(
      'fa fa-lg fa-exclamation-circle',
      'empty',
      alertMessage,
      'pastel-warning'
    );
  }

  // email Empty Notify in Eng
  emailEmptyEn(alertMessage: string = 'Please provide "Email" ') {
    this.notify(
      'fa fa-lg fa-exclamation-circle',
      'empty',
      alertMessage,
      'pastel-warning'
    );
  }
  // email Empty Notify In thai
  emailEmptyTh(alertMessage: string = 'กรุณาระบุ "อีเมล์" ') {
    this.notify(
      'fa fa-lg fa-exclamation-circle',
      'ค่าว่าง',
      alertMessage,
      'pastel-warning'
    );
  }

  // email Invalid Notify in en
  emailInvalidEn(alertMessage: string = 'Email "format" incorrect ') {
    this.notify(
      'fa fa-lg fa-times-circle',
      'Error',
      alertMessage,
      'pastel-danger'
    );
  }
  // email Invalid Notify in thai
  emailInvalidTh(alertMessage: string = '"รูปแบบ" อีเมล์ไม่ถูกต้อง ') {
    this.notify(
      'fa fa-lg fa-times-circle',
      'ผิดพลาด',
      alertMessage,
      'pastel-danger'
    );
  }

  // password Empty Notify in en
  passwordEmptyEn(alertMessage: string = 'Please provide "Password" ') {
    this.notify(
      'fa fa-lg fa-exclamation-circle',
      'empty',
      alertMessage,
      'pastel-warning'
    );
  }

  // password Empty Notify in thai
  passwordEmptyTh(alertMessage: string = 'กรุณาระบุ "รหัสผ่าน" ') {
    this.notify(
      'fa fa-lg fa-exclamation-circle',
      'ค่าว่าง',
      alertMessage,
      'pastel-warning'
    );
  }

  // password too short notify
  passwordTooShort(alertMessage: string = 'At least 6 caracters!') {
    this.notify(
      'fa fa-lg fa-exclamation-circle',
      'Empty',
      alertMessage,
      'pastel-warning'
    );
  }

  // password Invalid Notify in en
  passwordInvalidEn(
    alertMessage: string = 'Password "must have" at least 8 characters long with special character, and at least 1 UPPER & LOWER case character'
  ) {
    this.notify(
      'fa fa-lg fa-times-circle',
      'Error',
      alertMessage,
      'pastel-danger'
    );
  }
  // password Invalid Notify in thai
  passwordInvalidTh(
    alertMessage: string = 'รหัสผ่าน "ต้องมีความยาวอย่างน้อย 8 ตัวอักษร รวมทั้งอักขระพิเศษ, และ ตัวอักษรเล็กใหญ่ '
  ) {
    this.notify(
      'fa fa-lg fa-times-circle',
      'ผิดพลาด',
      alertMessage,
      'pastel-danger'
    );
  }

  // confirm password Empty Notify
  confirmPasswordEmpty(alertMessage: string = 'Please confirm "Password" ') {
    this.notify(
      'fa fa-lg fa-times-circle',
      'Empty',
      alertMessage,
      'pastel-danger'
    );
  }

  // confirm password Invalid Notify
  confirmPasswordInvalid(
    alertMessage: string = 'Password "not matched" please check '
  ) {
    this.notify(
      'fa fa-lg fa-times-circle',
      'Error',
      alertMessage,
      'pastel-danger'
    );
  }

  // Current Password Empty Notify
  currentPasswordEmpty(
    alertMessage: string = 'Please provide "current password" '
  ) {
    this.notify(
      'fa fa-lg fa-exclamation-circle',
      'Empty',
      alertMessage,
      'pastel-warning'
    );
  }

  // New Password Empty Notify
  newPasswordEmpty(alertMessage: string = 'Please provide "new password" ') {
    this.notify(
      'fa fa-lg fa-exclamation-circle',
      'Empty',
      alertMessage,
      'pastel-warning'
    );
  }

  // Confirm New Password Empty Notify
  confirmNewPasswordEmpty(
    alertMessage: string = 'Please confirm "new password" '
  ) {
    this.notify(
      'fa fa-lg fa-exclamation-circle',
      'Empty',
      alertMessage,
      'pastel-warning'
    );
  }

  // confirm password Invalid Notify
  confirmNewPasswordInvalid(
    alertMessage: string = 'New password "not matched" please check '
  ) {
    this.notify(
      'fa fa-lg fa-times-circle',
      'Error',
      alertMessage,
      'pastel-danger'
    );
  }

  // designation Empty Notify
  designationEmpty(alertMessage: string = 'Please provide "your designation"') {
    this.notify(
      'fa fa-lg fa-exclamation-circle',
      'Empty',
      alertMessage,
      'pastel-warning'
    );
  }

  // Role Empty Notify
  roleEmpty(alertMessage: string = 'Please provide "user role"') {
    this.notify(
      'fa fa-lg fa-exclamation-circle',
      'Empty',
      alertMessage,
      'pastel-warning'
    );
  }

  // assessCat Empty Notify
  assessCatEmpty(alertMessage: string = 'ไม่พบข้อมูลหมวดการประเมิน') {
    this.notify(
      'fa fa-lg fa-exclamation-circle',
      'Empty',
      alertMessage,
      'pastel-warning'
    );
  }

  // assessTemplate Empty Notify
  assessTemplateEmpty(alertMessage: string = 'ไม่พบข้อมูลแบบประเมิน') {
    this.notify(
      'fa fa-lg fa-exclamation-circle',
      'Empty',
      alertMessage,
      'pastel-warning'
    );
  }

  // assessAnalysis Empty Notify
  assessAnalysisEmpty(
    alertMessage: string = 'ไม่พบข้อมูลการวิเคราะห์แบบประเมิน'
  ) {
    this.notify(
      'fa fa-lg fa-exclamation-circle',
      'Empty',
      alertMessage,
      'pastel-warning'
    );
  }

  // Sweet Alert Section
  confirmDelete(confirmMessage: string = 'Confirm Delete?'): Promise<any> {
    return swal(confirmMessage, {
      // title: confirmMessage,
      buttons: ['Cancel', 'Ok'],
      dangerMode: true,
      icon: 'warning',
    });
  }
}
